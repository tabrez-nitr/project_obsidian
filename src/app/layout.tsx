import type { Metadata, Viewport } from "next"; // 1. Import Viewport
import { Geist, Geist_Mono } from "next/font/google";
import { Cedarville_Cursive } from "next/font/google";
import FloatingButtons from "@/components/FLoatiingButtons"; // 2. Import Buttons
import "./globals.css";

// 3. Add this Viewport export to lock zoom
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Metro Sofa Repair",
  description: "Premium Sofa Makers & Repair in Noida , Greater Noida , Gurgaon",
  // ... rest of metadata
};

const cedarville = Cedarville_Cursive({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cedarville",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={`${cedarville.variable}`}>
        {children}
        <FloatingButtons /> {/* 4. Add Buttons Here */}
      </body>
    </html>
  );
}