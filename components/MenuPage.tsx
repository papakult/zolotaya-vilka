"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScriptNote } from "./Decor";
import * as I from "./Icons";
import MenuTabs from "./MenuTabs";
import Delivery from "./Delivery";
import { img } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;
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

      <MenuTabs />

      <Delivery />

      <section className="bg-texture">
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
