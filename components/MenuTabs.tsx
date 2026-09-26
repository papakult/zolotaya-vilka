"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Branch } from "./Decor";
import * as I from "./Icons";
import { site } from "@/lib/site";
import { chefPick, fromPrice, menu, type Dish } from "@/lib/menu";

const ease = [0.22, 1, 0.36, 1] as const;

function DishCard({ dish, i }: { dish: Dish; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease, delay: 0.06 * i }}
      className="group flex w-full flex-col overflow-hidden rounded-md border border-gold-400/35 bg-coal-800/80 transition duration-500 hover:border-gold-300/70 hover:shadow-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="(min-width:1024px) 380px, (min-width:640px) 50vw, 100vw"
          className="object-cover transition duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coal-900/60 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-[22px] leading-[1.1] text-[#f7f1e8]">{dish.name}</h3>
          <span className="shrink-0 whitespace-nowrap font-serif text-[21px] text-gold-200">{dish.price}</span>
        </div>
        <p className="mt-2 flex-1 text-[14px] leading-snug text-ink-muted">{dish.desc}</p>
        <a
          href={site.phoneHref}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-[4px] border border-gold-300/70 px-4 py-3 font-serif text-[16px] text-ink transition hover:bg-gold-300/10"
        >
          <I.Phone size={15} className="text-gold-300" /> Заказать по телефону
        </a>
      </div>
    </motion.article>
  );
}

export default function MenuTabs() {
  const [active, setActive] = useState(menu[0].id);
  const barRef = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // открыть вкладку по ссылке вида /menu#salads
  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      if (menu.some((c) => c.id === id)) {
        setActive(id);
        requestAnimationFrame(() => scrollToTabs());
        setTimeout(scrollToTabs, 600);
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  // активная вкладка всегда видна в ленте на телефоне
  useEffect(() => {
    tabRefs.current[active]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  // прокрутка к началу вкладок (к неподвижному якорю: у липкой панели своя позиция)
  function scrollToTabs() {
    const el = anchorRef.current;
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY + 48 - 68;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  const select = (id: string) => {
    setActive(id);
    history.replaceState(null, "", `#${id}`);
    const top = anchorRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 0 || top > 260) scrollToTabs();
  };

  const cat = menu.find((c) => c.id === active)!;

  return (
    <section className="bg-texture pb-16 lg:pb-20">
      {/* рекомендация шефа */}
      <div className="container-x pt-14 lg:pt-16">
        <div className="relative grid overflow-hidden rounded-md border border-gold-400/60 bg-coal-800/80 md:grid-cols-[1.1fr_1fr]">
          <div className="relative min-h-[240px]">
            <Image src={chefPick.image} alt={chefPick.title} fill sizes="(min-width:768px) 600px, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-coal-800 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-coal-800" />
          </div>
          <div className="relative p-7 sm:p-9">
            <Branch className="pointer-events-none absolute right-4 top-4 h-36 w-28 text-gold-500/35" />
            <p className="flex items-center gap-3 font-body text-[11px] uppercase tracking-[0.22em] text-gold-200">
              <I.Crown size={20} className="text-gold-300" /> Рекомендация шеф-повара
            </p>
            <h2 className="mt-5 font-serif text-[32px] leading-[1.05] text-[#f7f1e8] sm:text-[38px]">{chefPick.title}</h2>
            <p className="mt-3 max-w-[340px] text-[15px] leading-snug text-ink-muted">{chefPick.desc}</p>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <span className="font-serif text-[30px] text-gold-200">{chefPick.price}</span>
              <a href={site.phoneHref} className="btn-gold px-6 py-3 text-[16px]">
                <I.Phone size={16} /> Заказать по телефону
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* вкладки категорий */}
      <div ref={anchorRef} className="h-0" aria-hidden />
      <div ref={barRef} className="sticky top-[68px] z-30 mt-12 border-y border-gold-500/30 bg-coal-900/95 backdrop-blur-md">
        <div className="container-x">
          <div
            role="tablist"
            aria-label="Категории меню"
            className="-mx-5 flex gap-1 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:justify-center"
          >
            {menu.map((c) => (
              <button
                key={c.id}
                ref={(el) => {
                  tabRefs.current[c.id] = el;
                }}
                role="tab"
                aria-selected={active === c.id}
                onClick={() => select(c.id)}
                className={`relative shrink-0 whitespace-nowrap rounded-[4px] px-4 py-2.5 font-serif text-[18px] transition ${
                  active === c.id ? "text-coal-900" : "text-ink hover:text-gold-200"
                }`}
              >
                {active === c.id && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 -z-0 rounded-[4px] bg-gold-btn"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{c.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* содержимое категории */}
      <div className="container-x mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={cat.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mb-8 flex items-end gap-5">
              <h2 className="font-serif text-[40px] leading-none text-[#f7f1e8] sm:text-[48px]">{cat.title}</h2>
              <span className="mb-2 h-px flex-1 bg-gold-400/50" />
              <span className="mb-1 font-body text-[13px] text-ink-muted">{cat.note ?? fromPrice(cat)}</span>
            </div>

            {cat.items.length > 0 ? (
              <div
                className={`grid gap-5 sm:grid-cols-2 lg:gap-6 ${
                  cat.items.length === 5 ? "lg:grid-cols-6" : cat.items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4"
                }`}
              >
                {cat.items.map((dish, i) => (
                  <div
                    key={dish.name}
                    className={`flex ${cat.items.length === 5 ? (i < 2 ? "lg:col-span-3" : "lg:col-span-2") : ""} ${
                      cat.items.length % 2 === 1 && i === cat.items.length - 1 ? "sm:col-span-2 lg:col-span-2" : ""
                    }`}
                  >
                    <DishCard dish={dish} i={i} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid overflow-hidden rounded-md border border-gold-400/40 bg-coal-800/80 md:grid-cols-2">
                <div className="relative min-h-[260px]">
                  <Image src={cat.cover} alt={cat.title} fill sizes="(min-width:768px) 600px, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <p className="font-serif text-[30px] leading-tight text-[#f7f1e8]">{cat.title}</p>
                  <p className="mt-3 max-w-[380px] text-[15px] leading-relaxed text-ink-muted">
                    Позиции и цены этого раздела подскажем по телефону. Администратор расскажет, что готовим сегодня, и сразу примет
                    заказ.
                  </p>
                  <a href={site.phoneHref} className="btn-gold mt-7 w-full sm:w-fit">
                    <I.Phone size={18} /> {site.phone}
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
