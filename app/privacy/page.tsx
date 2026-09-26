import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { Footer } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — «Золотая Вилка»",
  description: "Политика конфиденциальности сайта ресторана «Золотая Вилка» в Сочи.",
  alternates: { canonical: "/privacy" },
};

// TODO: заменить заготовку на утверждённый текст политики и реквизиты владельца
export default function Privacy() {
  return (
    <>
      <Header />
      <main className="bg-texture">
        <div className="container-x max-w-[760px] pb-20 pt-32 sm:pt-40">
          <p className="eyebrow">Документы</p>
          <h1 className="mt-5 font-serif text-[40px] leading-[1.05] text-[#f7f1e8] sm:text-[52px]">Политика конфиденциальности</h1>
          <div className="mt-8 space-y-5 text-[15px] leading-[1.65] text-ink-muted">
            <p>
              Текст политики конфиденциальности сайта ресторана «{site.name}» сейчас готовится и будет опубликован на этой странице.
            </p>
            <p>
              Сайт не собирает персональные данные через формы: бронирование столиков и заказы принимаются только по телефону{" "}
              <a href={site.phoneHref} className="text-gold-200 hover:text-gold-300">
                {site.phone}
              </a>
              .
            </p>
            <p>По вопросам обработки данных звоните по этому же номеру.</p>
          </div>
          <Link href="/" className="btn-outline mt-10 w-fit px-8">
            На главную
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
