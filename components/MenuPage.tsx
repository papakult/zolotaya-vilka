"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Branch, Reveal, ScriptNote } from "./Decor";
import * as I from "./Icons";
import { img } from "@/lib/site";
import { chefPick, menu, type Category } from "@/lib/menu";

const ease = [0.22, 1, 0.36, 1] as const;
const byId = (id: string) => menu.find((c) => c.id === id)!;

function CategoryBlock({ cat, className = "" }: { cat: Category; className?: string }) {
  return (
    <Reveal id={cat.id} className={`scroll-mt-24 px-6 py-9 sm:px-8 lg:px-9 ${className}`}>
      <div className="flex items-center gap-4">
        <h2 className="font-serif text-[32px] leading-none text-[#f7f1e8] sm:text-[34px]">{cat.title}</h2>
        <span className="h-px flex-1 bg-gold-400/60" />
        {cat.note && <span className="font-body text-[12px] text-ink-muted">{cat.note}</span>}
      </div>
      <ul className="mt-6 space-y-4">
        {cat.items.map((d) => (
          <li key={d.name} className="flex items-start justify-between gap-6">
            <div>
              <p className="font-serif text-[18px] leading-tight text-ink">{d.name}</p>
              <p className="mt-0.5 max-w-[290px] text-[12.5px] leading-snug text-ink-muted">{d.desc}</p>
            </div>
            <span className="shrink-0 whitespace-nowrap font-serif text-[18px] text-ink">{d.price}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function MenuPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-gold-500/40 bg-coal-900">
        <motion.div className="absolute inset-0 -z-10" initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease }}>
          <Image
            src={img.windowBooth}
            alt="Столик у окна с диванами и золотыми шторами"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_center] md:left-[28%] md:w-[72%] md:[mask-image:linear-gradient(90deg,transparent_0%,black_30%)]"
          />
        </motion.div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-coal-900 via-coal-900/75 to-coal-900/10 md:via-coal-900/30 md:to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-coal-900/90 via-transparent to-coal-900/60" />

        <div className="container-x pb-12 pt-36 sm:pt-44 lg:pt-40">
          <motion.p className="eyebrow max-w-[260px] leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Вкусные моменты ближе к людям
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.3 }}
            className="mt-4 font-serif text-[96px] font-medium leading-[0.9] text-[#f7f1e8] sm:text-[120px]"
          >
            Меню
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.45 }}
            className="mt-2 font-serif text-[36px] italic leading-[1.05] text-gold-200 sm:text-[44px]"
          >
            Домашняя кухня
            <br />с особой атмосферой
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.55 }}
            className="mt-6 max-w-[380px] text-[15px] leading-relaxed text-ink"
          >
            Мы готовим с любовью — из свежих продуктов, по-домашнему, с вниманием к каждой детали. В нашем меню — любимые блюда,
            новые вкусы и тепло, которое чувствуется в каждом угощении.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <Link href="/#booking" className="btn-outline mt-7 border-gold-200 sm:w-[284px]">
              Забронировать стол <I.Arrow />
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-12 grid grid-cols-3 gap-2 text-center md:ml-auto md:mt-[-120px] md:w-[500px]"
          >
            {[
              { i: I.Leaf, t: "Свежие продукты", d: "Выбираем лучшее для ваших блюд" },
              { i: I.House, t: "Домашние рецепты", d: "Вкус, знакомый с детства" },
              { i: I.People, t: "Уютная атмосфера", d: "Больше, чем просто ресторан" },
            ].map((f, k) => (
              <li key={f.t} className={`flex flex-col items-center px-2 ${k > 0 ? "border-l border-gold-400/40" : ""}`}>
                <f.i size={34} className="text-gold-300" strokeWidth={1.1} />
                <p className="mt-2 font-serif text-[15px] leading-tight text-ink sm:text-[16px]">{f.t}</p>
                <p className="mt-1 text-[11px] leading-snug text-ink-muted">{f.d}</p>
              </li>
            ))}
          </motion.ul>
        </div>
        <ScriptNote
          lines={["Хорошая еда", "собирает", "хороших людей"]}
          className="absolute right-[5%] top-28 hidden text-[36px] lg:block"
        />
      </section>

      {/* СЕТКА МЕНЮ */}
      <section className="bg-texture">
        <div className="mx-auto max-w-[1200px] divide-y divide-gold-500/40">
          {/* ряд 1 */}
          <div className="grid lg:grid-cols-3 lg:divide-x lg:divide-gold-500/40">
            <CategoryBlock cat={byId("breakfast")} />
            <CategoryBlock cat={byId("salads")} className="border-t border-gold-500/40 lg:border-t-0" />
            <div className="border-t border-gold-500/40 p-6 lg:border-t-0 lg:p-7">
              <Reveal className="relative h-full overflow-hidden rounded-md border border-gold-400/70 p-7">
                <Branch className="pointer-events-none absolute -right-2 top-2 h-40 w-32 text-gold-500/40" />
                <p className="flex items-center gap-3 font-body text-[11px] uppercase tracking-[0.22em] text-gold-200">
                  <I.Crown size={20} className="text-gold-300" /> Рекомендация шеф-повара
                </p>
                <p className="mt-6 font-serif text-[28px] leading-[1.1] text-[#f7f1e8]">
                  Тёплый салат
                  <br />с говядиной
                </p>
                <p className="mt-4 max-w-[230px] text-[13px] leading-snug text-ink-muted">{chefPick.desc}</p>
                <div className="mt-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-serif text-[26px] text-ink">{chefPick.price}</p>
                    <I.Arrow size={40} className="mt-2 text-gold-300" />
                  </div>
                  <p className="font-serif text-[15px] italic leading-tight text-gold-200">
                    Гармония вкуса
                    <br />в каждой детали
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ряд 2 */}
          <div className="grid lg:grid-cols-3 lg:divide-x lg:divide-gold-500/40">
            <Reveal className="relative min-h-[280px] overflow-hidden">
              <Image src={img.tapestryTable} alt="Столик с лампой у гобелена" fill sizes="(min-width:1024px) 400px, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tl from-coal-900/80 via-transparent to-transparent" />
              <ScriptNote lines={["Уют", "в каждой", "встрече"]} rotate={-14} className="absolute bottom-6 right-6 text-[30px]" />
            </Reveal>
            <CategoryBlock cat={byId("hot")} />
            <CategoryBlock cat={byId("pasta")} className="border-t border-gold-500/40 lg:border-t-0" />
          </div>

          {/* ряд 3 */}
          <div className="grid lg:grid-cols-3 lg:divide-x lg:divide-gold-500/40">
            <CategoryBlock cat={byId("desserts")} />
            <CategoryBlock cat={byId("drinks")} className="border-t border-gold-500/40 lg:border-t-0" />
            <Reveal className="relative min-h-[300px] overflow-hidden">
              <Image
                src={img.tapestryCabinet}
                alt="Старинный буфет с посудой"
                fill
                sizes="(min-width:1024px) 400px, 100vw"
                className="object-cover object-[80%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-coal-900 via-coal-900/80 to-coal-900/10" />
              <div className="relative p-8 pt-12">
                <span className="font-serif text-[54px] leading-none text-gold-300">“</span>
                <p className="-mt-3 font-serif text-[26px] italic leading-[1.25] text-[#f7f1e8]">
                  Вкус
                  <br />
                  начинается
                  <br />с атмосферы
                </p>
                <p className="mt-8 flex items-center gap-3 font-body text-[12px] tracking-[0.12em] text-ink-muted">
                  <span className="h-px w-8 bg-gold-300" /> Золотая вилка
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* нижняя плашка */}
        <div className="border-t border-gold-500/40">
          <div className="container-x flex flex-col items-center gap-6 py-9 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex items-center gap-5">
              <I.Cloche size={52} className="shrink-0 text-gold-300" strokeWidth={1} />
              <p className="text-[13px] leading-snug text-ink-muted">
                Проведите особенный
                <br />
                вечер в «Золотой вилке»
              </p>
            </div>
            <Link href="/#booking" className="btn-gold w-full sm:w-[270px]">
              Забронировать стол <I.Arrow />
            </Link>
            <div className="flex items-center gap-5">
              <I.People size={46} className="shrink-0 text-gold-300" strokeWidth={1} />
              <p className="text-[13px] leading-snug text-ink-muted">
                Вкусная еда. Тёплые встречи.
                <br />
                Всегда рядом.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
