import type { Metadata } from "next";
import Header from "@/components/Header";
import CallFab from "@/components/CallFab";
import MenuPage from "@/components/MenuPage";
import { Footer } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Меню ресторана «Золотая Вилка» — Сочи",
  description:
    "Завтраки, салаты, горячие блюда, мангал, десерты и доставка. Полное меню ресторана «Золотая Вилка» в Сочи.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "Меню ресторана «Золотая Вилка» — Сочи",
    description: "Завтраки, салаты, горячие блюда, мангал, десерты и доставка. Полное меню ресторана «Золотая Вилка» в Сочи.",
    url: "/menu",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    siteName: "Золотая Вилка",
    locale: "ru_RU",
    type: "website",
  },
};

export default function Menu() {
  return (
    <>
      <Header active="Меню" />
      <main>
        <MenuPage />
      </main>
      <Footer />
      <CallFab />
    </>
  );
}
