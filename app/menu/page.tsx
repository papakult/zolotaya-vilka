import type { Metadata } from "next";
import Header from "@/components/Header";
import CallFab from "@/components/CallFab";
import MenuPage from "@/components/MenuPage";
import { Footer } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Меню | Золотая вилка",
  description: "Завтраки, салаты, горячие блюда, паста, десерты и напитки домашнего ресторана «Золотая вилка» в Сочи.",
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
