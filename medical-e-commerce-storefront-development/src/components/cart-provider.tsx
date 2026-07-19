"use client";

import Link from "next/link";
import { Check, ChevronRight, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { formatPrice, type Product } from "@/lib/catalog";

type CartItem = Pick<Product, "id" | "slug" | "name" | "price" | "size" | "image" | "category"> & { quantity: number };

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  hasLoaded: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, quantity?: number) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "aiims-medical-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem(storageKey);
      if (savedCart) setItems(JSON.parse(savedCart) as CartItem[]);
    } catch {
      window.localStorage.removeItem(storageKey);
    } finally {
      setHasLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (hasLoaded) window.localStorage.setItem(storageKey, JSON.stringify(items));
  }, [items, hasLoaded]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const value = useMemo<CartContextValue>(() => {
    const addItem = (product: Product, quantity = 1) => {
      setItems((current) => {
        const existing = current.find((item) => item.id === product.id);
        if (existing) return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
        return [...current, { id: product.id, slug: product.slug, name: product.name, price: product.price, size: product.size, image: product.image, category: product.category, quantity }];
      });
      setIsOpen(true);
    };
    const updateQuantity = (id: string, quantity: number) => {
      setItems((current) => quantity < 1 ? current.filter((item) => item.id !== id) : current.map((item) => item.id === id ? { ...item, quantity } : item));
    };
    const removeItem = (id: string) => setItems((current) => current.filter((item) => item.id !== id));
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return {
      items,
      count: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal,
      isOpen,
      hasLoaded,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      updateQuantity,
      removeItem,
      clearCart: () => setItems([])
    };
  }, [items, isOpen, hasLoaded]);

  return <CartContext.Provider value={value}>{children}<CartDrawer /></CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}

export function CartButton({ dark = false }: { dark?: boolean }) {
  const { count, openCart, hasLoaded } = useCart();
  return (
    <button onClick={openCart} aria-label="Open shopping bag" className={`relative grid h-11 w-11 place-items-center rounded-full transition ${dark ? "border border-white/15 text-white hover:bg-white/10" : "bg-[#f3efe9] text-[#252b25] hover:bg-[#e8e1d8]"}`}>
      <ShoppingBag size={19} strokeWidth={1.7} />
      <span className={`absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full px-1 text-[10px] font-bold ${dark ? "bg-[#df6849] text-white" : "bg-[#2f644e] text-white"}`}>{hasLoaded ? count : 0}</span>
    </button>
  );
}

function CartDrawer() {
  const { items, subtotal, count, isOpen, closeCart, updateQuantity, removeItem } = useCart();
  const shipping = subtotal === 0 || subtotal >= 45 ? 0 : 6;
  return (
    <div className={`fixed inset-0 z-[60] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!isOpen}>
      <button onClick={closeCart} aria-label="Close shopping bag" className={`absolute inset-0 bg-[#1e2921]/45 backdrop-blur-[2px] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-[465px] flex-col bg-[#fffcf8] shadow-[-16px_0_60px_rgba(26,43,33,.20)] transition-transform duration-500 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <header className="flex items-center justify-between border-b border-[#e9e2da] px-6 py-5 sm:px-8">
          <div>
            <p className="eyebrow">Your selection</p>
            <h2 className="mt-1 font-serif text-2xl text-[#26362b]">Shopping bag <span className="font-sans text-sm text-[#7b817a]">({count})</span></h2>
          </div>
          <button onClick={closeCart} aria-label="Close shopping bag" className="grid h-10 w-10 place-items-center rounded-full text-[#526057] transition hover:bg-[#f0ece5]"><X size={20} /></button>
        </header>
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-[#edf2ed] text-[#357058]"><ShoppingBag size={25} /></div>
            <h3 className="mt-6 font-serif text-2xl text-[#26362b]">Your bag is waiting</h3>
            <p className="mt-2 max-w-xs text-sm leading-6 text-[#737970]">Discover beautifully considered care essentials for every day.</p>
            <button onClick={closeCart} className="mt-6 rounded-full bg-[#2d604a] px-6 py-3 text-xs font-bold uppercase tracking-[.16em] text-white transition hover:bg-[#214b39]">Keep exploring</button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5 sm:px-8">
              <div className="space-y-5">
                {items.map((item) => (
                  <article key={item.id} className="flex gap-4">
                    <div className="h-24 w-20 shrink-0 overflow-hidden rounded-2xl bg-[#f4efe6]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="min-w-0 flex-1 py-1">
                      <div className="flex justify-between gap-3">
                        <div><p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#778077]">{item.category}</p><h3 className="mt-1 font-medium text-[#28352c]">{item.name}</h3><p className="mt-0.5 text-xs text-[#7a8178]">{item.size}</p></div>
                        <button onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`} className="h-7 text-[#929890] transition hover:text-[#b8513f]"><Trash2 size={16} /></button>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-[#e1ddd4] bg-white p-0.5">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity" className="grid h-7 w-7 place-items-center rounded-full text-[#657167] hover:bg-[#f1eee8]"><Minus size={13} /></button>
                          <span className="w-7 text-center text-xs font-semibold">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity" className="grid h-7 w-7 place-items-center rounded-full bg-[#eff3ef] text-[#2f644e] hover:bg-[#dce9df]"><Plus size={13} /></button>
                        </div>
                        <p className="font-medium text-[#26362b]">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <footer className="border-t border-[#e9e2da] bg-[#fbf8f3] px-6 py-5 sm:px-8">
              <div className="rounded-2xl bg-[#edf4ee] px-4 py-3 text-center text-xs text-[#397056]"><Check className="mr-1 inline h-3.5 w-3.5" /> {subtotal >= 45 ? "You have unlocked complimentary delivery." : `${formatPrice(45 - subtotal)} away from complimentary delivery.`}</div>
              <div className="mt-5 space-y-2 text-sm text-[#626b62]"><div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div><div className="flex justify-between"><span>Delivery</span><span>{shipping === 0 ? "Complimentary" : formatPrice(shipping)}</span></div><div className="flex justify-between border-t border-[#e4ddd4] pt-3 font-semibold text-[#26362b]"><span>Total</span><span>{formatPrice(subtotal + shipping)}</span></div></div>
              <Link href="/checkout" onClick={closeCart} className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#2d604a] px-5 py-4 text-xs font-bold uppercase tracking-[.15em] text-white transition hover:bg-[#214b39]">Secure checkout <ChevronRight size={15} /></Link>
              <button onClick={closeCart} className="mt-3 w-full text-center text-xs font-semibold text-[#4a765f] underline-offset-4 hover:underline">Continue shopping</button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
