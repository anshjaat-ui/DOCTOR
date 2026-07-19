import { NextResponse } from "next/server";
import { db } from "@/db";
import { orderItems, orders } from "@/db/schema";
import { products } from "@/lib/catalog";

type CheckoutItem = { id: string; quantity: number };

type CheckoutPayload = {
  email?: string;
  firstName?: string;
  lastName?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  phone?: string;
  items?: CheckoutItem[];
};

const text = (value: unknown, limit = 255) => typeof value === "string" ? value.trim().slice(0, limit) : "";

export async function POST(request: Request) {
  try {
    const body = await request.json() as CheckoutPayload;
    const email = text(body.email).toLowerCase();
    const firstName = text(body.firstName, 120);
    const lastName = text(body.lastName, 120);
    const addressLine1 = text(body.addressLine1);
    const addressLine2 = text(body.addressLine2);
    const city = text(body.city, 120);
    const postalCode = text(body.postalCode, 32);
    const country = text(body.country, 80) || "United States";
    const phone = text(body.phone, 40);

    if (!email.includes("@") || !firstName || !lastName || !addressLine1 || !city || !postalCode) {
      return NextResponse.json({ error: "Please complete all required delivery details." }, { status: 400 });
    }
    if (!Array.isArray(body.items) || body.items.length === 0) {
      return NextResponse.json({ error: "Your shopping bag is empty." }, { status: 400 });
    }

    const normalizedItems = body.items.reduce<CheckoutItem[]>((result, item) => {
      if (!item || typeof item.id !== "string" || !Number.isFinite(item.quantity)) return result;
      const product = products.find((candidate) => candidate.id === item.id);
      const quantity = Math.min(Math.max(Math.floor(item.quantity), 1), 10);
      if (!product) return result;
      const existing = result.find((candidate) => candidate.id === product.id);
      if (existing) existing.quantity += quantity;
      else result.push({ id: product.id, quantity });
      return result;
    }, []);

    if (!normalizedItems.length) return NextResponse.json({ error: "We could not validate items in your bag." }, { status: 400 });

    const lineItems = normalizedItems.map((item) => {
      const product = products.find((candidate) => candidate.id === item.id)!;
      return { product, quantity: item.quantity, unitPriceCents: product.price * 100 };
    });
    const subtotalCents = lineItems.reduce((total, item) => total + item.unitPriceCents * item.quantity, 0);
    const shippingCents = subtotalCents >= 4500 ? 0 : 600;
    const totalCents = subtotalCents + shippingCents;
    const orderNumber = `AM-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

    const createdOrder = await db.transaction(async (tx) => {
      const [order] = await tx.insert(orders).values({
        orderNumber,
        email,
        firstName,
        lastName,
        addressLine1,
        addressLine2: addressLine2 || null,
        city,
        postalCode,
        country,
        phone: phone || null,
        subtotalCents,
        shippingCents,
        totalCents,
        metadata: { source: "aiims-medical-storefront", payment: "demo" }
      }).returning({ id: orders.id, orderNumber: orders.orderNumber });
      await tx.insert(orderItems).values(lineItems.map((item) => ({
        orderId: order.id,
        productId: item.product.id,
        productName: item.product.name,
        unitPriceCents: item.unitPriceCents,
        quantity: item.quantity,
        image: item.product.image
      })));
      return order;
    });

    return NextResponse.json({ orderNumber: createdOrder.orderNumber, totalCents });
  } catch (error) {
    console.error("Unable to create order", error);
    return NextResponse.json({ error: "We could not place your order just now. Please try again." }, { status: 500 });
  }
}
