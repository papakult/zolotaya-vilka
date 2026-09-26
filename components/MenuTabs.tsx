"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Branch } from "./Decor";
import * as I from "./Icons";
import { site } from "@/lib/site";
import { chefPick, fromPrice, menu, type Dish } from "@/lib/menu";

const ease = [0.22, 1, 0.36, 1] as const;
const plural = (n: number) => (n % 10 === 1 && n % 100 !== 11 ? "позиция" : [2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100) ? "позиции" : "позиций");

/** Позиции списком: название, описание, точки, цена */
function DishList({ items, cols }: { items: Dish[]; cols?: boolean }) {
  return (
    <ul className={`grid gap-x-8 ${cols ? "sm:grid-cols-2" : ""}`}>
      {items.map((dish, i) => (
        <motion.li
          key={dish.name}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: Math.min(i, 12) * 0.035 }}
          className="flex items-baseline gap-3 border-b border-gold-500/15 py-3"
        >
          <span className="min-w-0">
            <span className="block font-serif text-[18px] leading-tight text-ink sm:text-[19px]">{dish.name}</span>
            {dish.desc && <span className="mt-0.5 block text-[12.5px] leading-snug text-ink-muted">{dish.desc}</span>}
          </span>
          <span className="mb-1 min-w-4 flex-1 border-b border-dotted border-gold-500/30" />
          <span className={dish.price ? "shrink-0 whitespace-nowrap font-serif text-[17px] text-gold-200" : "shrink-0 whitespace-nowrap font-body text-[12px] text-ink-soft"}>
            {dish.price || "по телефону"}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

function DishCard({ dish, i }: { dish: Dish & { image: string }; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease, delay: Math.min(i, 8) * 0.06 }}
      whileHover={{ y: -4 }}
      className="group flex w-full flex-row overflow-hidden rounded-md border border-gold-400/35 bg-coal-800/80 transition duration-500 hover:border-gold-300/70 hover:shadow-card sm:flex-col"
    >
      {/* на телефоне фото слева квадратом, с sm и выше сверху на всю ширину */}
      <div className="relative aspect-square w-[118px] shrink-0 overflow-hidden sm:aspect-[4/3] sm:w-full">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="(min-width:1024px) 380px, (min-width:640px) 50vw, 118px"
          className="object-cover transition duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-coal-900/60 via-transparent to-transparent sm:block" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col px-3.5 py-3 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-[18px] leading-[1.1] text-[#f7f1e8] sm:text-[22px]">{dish.name}</h3>
          {dish.price && (
            <span className="hidden shrink-0 whitespace-nowrap font-serif text-[21px] text-gold-200 sm:inline">{dish.price}</span>
          )}
          {!dish.price && (
            <span className="hidden shrink-0 whitespace-nowrap pt-1.5 font-body text-[12px] text-ink-soft sm:inline">цена по телефону</span>
          )}
        </div>
        <p className="mt-1 line-clamp-2 flex-1 text-[12.5px] leading-snug text-ink-muted sm:mt-2 sm:line-clamp-none sm:text-[14px]">{dish.desc ?? ""}</p>
        {/* нижняя строка на телефоне: цена + маленькая кнопка звонка */}
        <div className="mt-2 flex items-center justify-between gap-3 sm:hidden">
          <span className={dish.price ? "font-serif text-[18px] text-gold-200" : "font-body text-[11.5px] text-ink-soft"}>
            {dish.price || "цена по телефону"}
          </span>
          <a
            href={site.phoneHref}
            aria-label={`Заказать ${dish.name} по телефону`}
            className="inline-flex h-9 items-center gap-1.5 rounded-[4px] border border-gold-300/70 px-3 font-serif text-[14px] text-ink active:bg-gold-300/15"
          >
            <I.Phone size={13} className="text-gold-300" /> Заказать
          </a>
        </div>
        <a
          href={site.phoneHref}
          className="mt-5 hidden items-center justify-center gap-2 rounded-[4px] border border-gold-300/70 px-4 py-3 font-serif text-[16px] text-ink transition duration-300 hover:border-transparent hover:bg-gold-btn hover:text-coal-900 hover:shadow-gold active:scale-[0.98] sm:inline-flex [&:hover_svg]:text-coal-900"
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

  const idx = menu.findIndex((c) => c.id === active);
  const cat = menu[idx];
  const prev = menu[idx - 1];
  const next = menu[idx + 1];
  const cards = cat.items.filter((d): d is Dish & { image: string } => !!d.image);
  const rest = cat.items.filter((d) => !d.image);

  const scrollTabs = (dir: number) => {
    const el = tabRefs.current[menu[0].id]?.parentElement;
    el?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

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
        <div className="container-x relative">
          <button
            onClick={() => scrollTabs(-1)}
            aria-label="Прокрутить категории влево"
            className="absolute left-0 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gold-400/50 bg-coal-900/90 text-gold-200 transition hover:bg-gold-300/15 lg:flex"
          >
            <I.Chevron size={18} className="rotate-90" />
          </button>
          <button
            onClick={() => scrollTabs(1)}
            aria-label="Прокрутить категории вправо"
            className="absolute right-0 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gold-400/50 bg-coal-900/90 text-gold-200 transition hover:bg-gold-300/15 lg:flex"
          >
            <I.Chevron size={18} className="-rotate-90" />
          </button>
          <div
            role="tablist"
            aria-label="Категории меню"
            className="-mx-5 flex gap-1 overflow-x-auto scroll-smooth px-5 py-3 [mask-image:linear-gradient(90deg,transparent,black_24px,black_calc(100%-24px),transparent)] [scrollbar-width:none] sm:mx-0 lg:mx-11 lg:px-2 [&::-webkit-scrollbar]:hidden"
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
                className={`relative shrink-0 whitespace-nowrap rounded-[4px] px-4 py-2.5 font-serif text-[18px] transition-colors duration-300 ${
                  active === c.id ? "text-coal-900" : "text-ink hover:text-gold-200"
                }`}
              >
                {active === c.id && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 -z-0 rounded-[4px] bg-gold-btn shadow-gold"
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
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease }}
          >
            <div className="mb-8 flex items-end gap-5">
              <h2 className="font-serif text-[40px] leading-none text-[#f7f1e8] sm:text-[48px]">{cat.title}</h2>
              <span className="mb-2 h-px flex-1 bg-gold-400/50" />
              <span className="mb-1 font-body text-[13px] text-ink-muted">{cat.note ?? (fromPrice(cat) || `${cat.items.length} ${plural(cat.items.length)}`)}</span>
            </div>

            {cat.compact ? (
              <div className="grid overflow-hidden rounded-md border border-gold-400/40 bg-coal-800/80 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[240px] overflow-hidden lg:min-h-full">
                  <Image
                    src={cat.cover}
                    alt={cat.title}
                    fill
                    sizes="(min-width:1024px) 520px, 100vw"
                    className="object-cover transition duration-[1.4s] ease-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal-800/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-coal-800/60" />
                </div>
                <div className="p-6 sm:p-9">
                  {cat.items.some((d) => !d.price) && (
                    <p className="mb-3 font-body text-[12px] uppercase tracking-[0.18em] text-ink-soft">Цены уточните по телефону</p>
                  )}
                  <DishList items={cat.items} cols={cat.items.length > 9} />
                  <a href={site.phoneHref} className="btn-gold mt-7 w-full sm:w-fit">
                    <I.Phone size={18} /> Заказать по телефону
                  </a>
                </div>
              </div>
            ) : (
              <>
                {cards.length > 0 && (
                  <div className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                    {cards.map((dish, i) => (
                      <div key={dish.name} className="flex">
                        <DishCard dish={dish} i={i} />
                      </div>
                    ))}
                  </div>
                )}
                {rest.length > 0 && (
                  <div className={`rounded-md border border-gold-400/35 bg-coal-800/70 px-5 py-4 sm:px-9 sm:py-7 ${cards.length ? "mt-6 sm:mt-8" : ""}`}>
                    {cards.length > 0 && (
                      <p className="mb-1 font-body text-[11px] uppercase tracking-[0.22em] text-gold-200">Ещё в разделе</p>
                    )}
                    <DishList items={rest} cols={rest.length > 5} />
                  </div>
                )}
              </>
            )}

            {cat.footnote && <p className="mt-5 text-[13.5px] leading-relaxed text-ink-muted">{cat.footnote}</p>}

            {/* соседние категории */}
            <div className="mt-12 flex items-center justify-between gap-4 border-t border-gold-500/25 pt-6">
              {prev ? (
                <button onClick={() => select(prev.id)} className="group flex items-center gap-3 text-left font-serif text-[18px] text-ink-muted transition hover:text-gold-200">
                  <I.Arrow size={22} className="rotate-180 text-gold-300 transition group-hover:-translate-x-1" />
                  <span>
                    <span className="block font-body text-[11px] uppercase tracking-[0.2em] text-ink-soft">Назад</span>
                    {prev.title}
                  </span>
                </button>
              ) : (
                <span />
              )}
              {next && (
                <button onClick={() => select(next.id)} className="group flex items-center gap-3 text-right font-serif text-[18px] text-ink transition hover:text-gold-200">
                  <span>
                    <span className="block font-body text-[11px] uppercase tracking-[0.2em] text-ink-soft">Дальше</span>
                    {next.title}
                  </span>
                  <I.Arrow size={22} className="text-gold-300 transition group-hover:translate-x-1" />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
