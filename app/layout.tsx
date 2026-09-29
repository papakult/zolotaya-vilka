import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, PT_Serif, Marck_Script } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

const serif = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const body = PT_Serif({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-body",
  display: "swap",
});

const script = Marck_Script({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Золотая Вилка — домашний ресторан в Сочи, Мацеста",
  description:
    "Домашняя кухня, уютная атмосфера, доставка и бронирование столиков. Ресторан «Золотая Вилка», Верхняя Мацеста, Сочи.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Золотая Вилка · домашний ресторан в Сочи",
    description: "Домашняя кухня и мангал на Мацесте. Доставка по Мацесте, Хосте и Бытхе, бронь столов по телефону.",
    url: "/",
    siteName: "Золотая Вилка",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ресторан «Золотая Вилка» в Сочи: домашняя кухня, мангал и доставка" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export const viewport: Viewport = {
  themeColor: "#15100b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${serif.variable} ${body.variable} ${script.variable}`}>
      <body className="font-body">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
