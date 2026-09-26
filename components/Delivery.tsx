"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, ScriptNote } from "./Decor";
import * as I from "./Icons";
import { site } from "@/lib/site";

const photos = {
  big: "/images/dishes/hot-stroganoff.jpg",
  a: "/images/dishes/pasta-carbonara.jpg",
  b: "/images/dishes/dessert-cheesecake.jpg",
};

const perks = [
  { icon: I.Scooter, t: "Доставка по Сочи", d: "Привезём горячим, в плотной упаковке" },
  { icon: I.Bag, t: "Самовывоз", d: "Заберите заказ в ресторане в удобное время" },
  { icon: I.Cloche, t: "Готовим после заказа", d: "Ничего не лежит заранее: всё свежее" },
  { icon: I.House, t: "Домашняя кухня", d: "Те же рецепты и порции, что в зале" },
  { icon: I.Phone, t: "Заказ по телефону", d: "Без корзины и онлайн-оплаты, всё решаем в разговоре" },
];

const steps = ["Позвоните нам", "Выберите блюда с администратором", "Получите заказ дома или заберите сами"];

/** Отдельный блок доставки: только звонок, без корзины и онлайн-оплаты */
export default function Delivery() {
  return (
    <section id="delivery" className="bg-texture relative scroll-mt-16 overflow-hidden border-y border-gold-500/40">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:py-24">
        <Reveal className="flex flex-col justify-center">
          <p className="eyebrow">Доставка и самовывоз</p>
          <h2 className="mt-6 font-serif text-[42px] font-medium leading-[1] text-[#f7f1e8] sm:text-[56px]">
            Доставка
            <span className="block font-normal italic text-gold-200">любимых блюд</span>
          </h2>
          <p className="mt-6 max-w-[460px] text-[16px] leading-relaxed text-ink">
            Мы готовим блюда только после вашего заказа, аккуратно упаковываем и доставляем по Сочи. Всё так же вкусно, как в ресторане.
          </p>

          <ul className="mt-9 grid gap-5 sm:grid-cols-2 sm:gap-x-6">
            {perks.map((p, i) => (
              <motion.li
                key={p.t}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.07 * i }}
                className={`flex items-start gap-4 ${i === perks.length - 1 ? "sm:col-span-2" : ""}`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-400/60 text-gold-300 transition duration-300 group-hover:bg-gold-300/10">
                  <p.icon size={22} strokeWidth={1.3} />
                </span>
                <span>
                  <span className="block font-serif text-[20px] leading-tight text-ink">{p.t}</span>
                  <span className="mt-0.5 block text-[13.5px] text-ink-muted">{p.d}</span>
                </span>
              </motion.li>
            ))}
          </ul>

          <ol className="mt-9 grid gap-3 border-t border-gold-500/25 pt-7 sm:grid-cols-3 sm:gap-5">
            {steps.map((s, i) => (
              <li key={s} className="flex items-start gap-3 sm:flex-col sm:gap-2">
                <span className="font-serif text-[30px] leading-none text-gold-300">{i + 1}</span>
                <span className="text-[13.5px] leading-snug text-ink-muted">{s}</span>
              </li>
            ))}
          </ol>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a href={site.phoneHref} className="btn-gold h-[60px] px-8 text-[18px]">
              <I.Phone size={18} /> Позвонить и заказать
            </a>
            <a href={site.phoneHref} className="inline-flex min-h-[44px] items-center font-serif text-[20px] text-gold-200 hover:text-gold-300">{site.phone}</a>
          </div>
        </Reveal>

        <div className="relative grid h-fit grid-cols-2 gap-4 self-center sm:gap-5">
          <Reveal className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-md border border-gold-400/50">
            <Image src={photos.big} alt="Бефстроганов с пюре" fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tl from-coal-900/70 via-transparent to-transparent" />
            <ScriptNote lines={["Вкус дома", "в любую погоду"]} rotate={-10} className="absolute bottom-5 right-6 text-[28px] sm:text-[34px]" />
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-md border border-gold-400/50">
            <Image src={photos.a} alt="Паста карбонара" fill sizes="(min-width:1024px) 300px, 50vw" className="object-cover" />
          </Reveal>
          <Reveal delay={0.18} className="relative aspect-[4/3] overflow-hidden rounded-md border border-gold-400/50">
            <Image src={photos.b} alt="Чизкейк" fill sizes="(min-width:1024px) 300px, 50vw" className="object-cover" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
