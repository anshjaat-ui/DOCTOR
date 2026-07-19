import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { CartProvider } from "@/components/cart-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIIMS Medical — A little more well, every day",
  description: "Thoughtfully sourced wellness, personal care and everyday medical essentials.",
  keywords: ["wellness", "personal care", "medical essentials", "AIIMS Medical"],
};

export const viewport: Viewport = { themeColor: "#254c3c" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body><CartProvider>{children}</CartProvider></body></html>;
}
