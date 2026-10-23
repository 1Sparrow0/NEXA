import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const vazirmatn = localFont({
  src: "../public/fonts/Vazirmatn.woff2",
  variable: "--font-vazirmatn",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NEXA | آژانس دیجیتال",
  description:
    "NEXA؛ همراه شما در طراحی سایت، توسعه وب، سئو و رشد دیجیتال کسب‌وکار.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>{children}</body>
    </html>
  );
}
