import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgressRail from "@/components/ui/ScrollProgressRail";
import LuxuryHeader from "@/components/navigation/LuxuryHeader";
import LuxuryFooter from "@/components/navigation/LuxuryFooter";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VELOURS NOIR | Haute Parfumerie Paris — The Art of Being Remembered",
  description:
    "An invisible signature. An unforgettable presence. Discover Velours Noir, an exclusive Parisian fragrance maison crafting artistic, sensual, and timeless fine perfumes.",
  keywords: [
    "Velours Noir",
    "Haute Parfumerie",
    "Luxury Perfume",
    "Niche Fragrance",
    "Parisian Perfume Maison",
    "Fine Fragrance",
    "Nuit de Velours",
  ],
  icons: {
    icon: "/images/brand/vn_monogram.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased selection:bg-[#633A78] selection:text-[#F4EAF2]`}
    >
      <body className="min-h-full flex flex-col bg-[#12041A] text-[#F4EAF2] font-sans overflow-x-hidden">
        <SmoothScrollProvider>
          <CustomCursor />
          <ScrollProgressRail />
          <LuxuryHeader />
          <main className="flex-grow relative">{children}</main>
          <LuxuryFooter />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
