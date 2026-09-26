import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, PT_Serif, Marck_Script } from "next/font/google";
import "./globals.css";

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
  title: "Золотая вилка | домашний ресторан в Сочи",
  description:
    "Домашняя кухня, уютная обстановка и спокойные встречи в самом сердце Сочи. Бронирование столиков и доставка по звонку.",
  openGraph: {
    title: "Золотая вилка | домашний ресторан",
    description: "Домашняя кухня и тёплая атмосфера в Сочи.",
    images: ["/images/interior/hall-tables.jpg"],
    locale: "ru_RU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#15100b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${serif.variable} ${body.variable} ${script.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
