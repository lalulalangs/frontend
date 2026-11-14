import type { Metadata, Viewport } from "next";
import "./globals.css";

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
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="font-sans">
      <body className="font-sans antialiased bg-[var(--bg)] text-[var(--fg)] selection:bg-[var(--accent)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
