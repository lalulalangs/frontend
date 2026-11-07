import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "pesanmobil.com — Platform Rental & Sewa Mobil Terpercaya",
  description:
    "Pesan rental mobil mudah, cepat, dan terpercaya. Pilihan sewa mobil harian, mingguan, bulanan lepas kunci atau dengan supir profesional. Armada bersih, prima, dan siap jalan.",
  keywords: [
    "pesan mobil",
    "rental mobil",
    "sewa mobil",
    "rental mobil lepas kunci",
    "sewa mobil dengan supir",
    "rental avanza",
    "rental innova zenix",
    "rental hiace",
    "rental mobil indonesia",
  ],
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white selection:bg-[#0071e3] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
