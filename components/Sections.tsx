"use client";

import Image from "next/image";
import Link from "next/link";
import { Branch, Logo, Reveal, ScriptNote } from "./Decor";
import * as I from "./Icons";
import BookingForm from "./BookingForm";
import { img, mapEmbed, routeHref, site } from "@/lib/site";
import { featured } from "@/lib/menu";


export function About() {
  return (
    <section id="about" className="bg-texture relative overflow-hidden border-b border-gold-500/40">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 lg:py-14">
        <Reveal className="relative flex flex-col justify-center">
          <p className="eyebrow">О ресторане</p>
          <h2 className="mt-7 font-serif text-[40px] leading-[1.02] text-[#f7f1e8] sm:text-[48px]">
            Атмосфера
            <br />
            настоящего отдыха
          </h2>
          <p className="mt-7 max-w-[340px] text-[15px] leading-[1.6] text-ink-muted">
            «Золотая вилка» — это место, где гармонично сочетаются домашняя кухня, тёплый приём и особая атмосфера. Мы создали
            пространство для тех, кто ценит вкусную еду, душевные разговоры и время с близкими.
          </p>
          <Link href="#contacts" className="btn-outline mt-10 w-fit px-10">
            Узнать больше <I.Arrow />
          </Link>
          <Branch className="pointer-events-none absolute -bottom-10 right-4 h-44 w-36 text-gold-500/35 lg:-bottom-6" />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { src: img.bar, alt: "Барная стойка с бокалами и кирпичной стеной", cap: "Вкус в деталях" },
            { src: img.windowBooth, alt: "Столик у окна с диванами и золотыми шторами", cap: "Уют в каждой встрече" },
          ].map((p, i) => (
            <Reveal key={p.cap} delay={0.12 * i}>
              <figure>
                <div className="group relative aspect-[4/3.1] overflow-hidden border border-gold-400/60">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width:1024px) 340px, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition duration-[1.2s] ease-out group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-5 text-center font-body text-[11px] uppercase tracking-eyebrow text-ink-muted">
                  {p.cap}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Quote() {
  return (
    <section className="relative isolate overflow-hidden bg-coal-900">
      <div className="grid md:grid-cols-[1.35fr_1fr]">
        <div className="relative min-h-[300px] sm:min-h-[380px] md:min-h-[430px]">
          <Image
            src={img.facade}
            alt="Фасад и летняя терраса ресторана «Золотая вилка»"
            fill
            sizes="(min-width:768px) 60vw, 100vw"
            className="object-cover object-[60%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coal-900 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-coal-900" />
          <div className="absolute inset-0 bg-coal-900/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-coal-900/85 via-coal-900/25 via-35% to-transparent" />
        </div>
        <Reveal className="relative flex items-center px-6 pb-16 pt-4 md:px-10 md:py-16">
          <div className="md:-ml-10">
            <span className="font-serif text-[64px] leading-none text-gold-300">“</span>
            <blockquote className="-mt-4 font-serif text-[30px] italic leading-[1.25] text-[#f7f1e8] sm:text-[34px]">
              Домашняя кухня.
              <br />
              Настоящие встречи.
            </blockquote>
            <span className="mt-8 block h-px w-10 bg-gold-300" />
            <p className="mt-6 font-body text-[13px] tracking-[0.12em] text-ink-muted">Золотая вилка</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────── СВЕТЛЫЙ БЛОК МЕНЮ ───────────────────── */

export function MenuLight() {
  return (
    <section id="menu" className="bg-texture relative border-t border-gold-500/25">
      <div className="container-x grid gap-10 py-16 lg:grid-cols-[0.62fr_1.38fr] lg:gap-10 lg:py-20">
        <Reveal className="flex flex-col justify-center">
          <p className="eyebrow">Наше меню</p>
          <h2 className="mt-5 font-serif text-[40px] font-medium leading-[1.05] text-[#f7f1e8] sm:text-[44px]">
            Любимые блюда
            <span className="block font-normal italic text-gold-200">домашней кухни</span>
          </h2>
          <p className="mt-5 max-w-[300px] text-[15px] leading-[1.55] text-ink-muted">
            Готовим из качественных продуктов по проверенным рецептам. Простые, понятные вкусы, которые объединяют.
          </p>
          <Link href="/menu" className="btn-gold mt-8 w-fit px-8 py-4 text-[17px]">
            Смотреть всё меню <I.Arrow />
          </Link>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {featured.map((c, i) => (
            <Reveal key={c.title} delay={0.08 * i}>
              <Link
                href={c.href}
                className="group block h-full overflow-hidden rounded-[6px] border border-gold-400/35 bg-coal-800/80 transition duration-500 hover:-translate-y-1 hover:border-gold-300/70 hover:shadow-card"
              >
                <div className="relative aspect-[4/4.6] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(min-width:768px) 200px, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal-800/70 via-transparent to-transparent" />
                </div>
                <div className="px-4 pb-5 pt-4">
                  <p className="font-serif text-[20px] leading-tight text-[#f7f1e8]">{c.title}</p>
                  <p className="mt-1 text-[12px] text-ink-muted">{c.desc}</p>
                  <p className="mt-4 font-serif text-[18px] text-gold-200">{c.from}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── БРОНЬ + ДОСТАВКА ───────────────────── */

export function BookingDelivery() {
  return (
    <section id="booking" className="relative isolate bg-[#17110c]">
      {/* верхний баннер, как в макете «Бронь» */}
      <div className="relative isolate overflow-hidden">
        <Image
          src={img.bar}
          alt="Барная стойка ресторана"
          fill
          sizes="100vw"
          className="-z-10 object-cover object-[center_45%] md:[mask-image:linear-gradient(90deg,transparent_5%,black_45%)]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-coal-900 via-coal-900/75 to-coal-900/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#17110c] from-[8%] via-transparent to-[#17110c]/60" />
        <div className="container-x pb-40 pt-20 sm:pt-24 lg:pb-44">
          <Reveal>
            <p className="eyebrow max-w-[330px] leading-relaxed">Встречи начинаются с хороших планов</p>
            <h2 className="mt-6 max-w-[640px] font-serif text-[42px] font-medium leading-[1] text-[#f7f1e8] sm:text-[58px] lg:text-[64px]">
              Забронируйте столик
              <span className="block font-normal italic text-gold-200">или закажите любимые блюда</span>
            </h2>
            <p className="mt-6 max-w-[520px] text-[16px] leading-relaxed text-ink">
              Семейный ужин, романтическое свидание или тёплая встреча с друзьями — мы создадим для вас идеальную атмосферу. А
              если хотите насладиться нашими блюдами дома — с радостью приготовим и доставим.
            </p>
          </Reveal>
        </div>
        <ScriptNote lines={["Вкусные", "моменты", "ближе"]} className="absolute right-[7%] top-24 hidden text-[44px] lg:block" />
      </div>

      <div className="container-x relative z-10 -mt-28 grid gap-6 pb-16 lg:grid-cols-2 lg:pb-20">
        {/* бронь */}
        <Reveal className="relative overflow-hidden rounded-md border border-gold-400/60 bg-coal-800/95 p-6 shadow-card sm:p-8">
          <Branch className="pointer-events-none absolute right-6 top-6 h-36 w-28 text-gold-500/35" />
          <p className="eyebrow">Бронирование столика</p>
          <h3 className="mt-4 font-serif text-[34px] leading-tight text-[#f7f1e8] sm:text-[38px]">Забронируйте столик</h3>
          <p className="mb-6 mt-1 text-[14px] text-ink-muted">Мы свяжемся с вами для подтверждения брони.</p>
          <BookingForm />
          <ScriptNote
            lines={["Вкусные", "встречи", "начинаются", "здесь"]}
            rotate={-12}
            className="absolute bottom-7 right-7 hidden text-[22px] opacity-80 xl:block"
          />
        </Reveal>

        {/* доставка только по звонку */}
        <Reveal
          delay={0.12}
          className="relative flex flex-col overflow-hidden rounded-md border border-gold-400/60 bg-coal-800/95 shadow-card"
        >
          <div className="relative flex-1 p-6 sm:p-8">
            <div className="absolute -right-10 top-16 hidden h-[260px] w-[260px] overflow-hidden rounded-full border border-gold-500/30 opacity-90 sm:block">
              <Image src={featured[2].image} alt="Горячее блюдо «Золотой вилки»" fill sizes="260px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-coal-800 via-coal-800/20 to-transparent" />
            </div>
            <div className="relative">
              <div className="flex items-start justify-between">
                <p className="eyebrow">Заказ блюд</p>
                <I.Cloche size={42} className="mr-6 -mt-1 text-gold-300 sm:mr-24" strokeWidth={1.1} />
              </div>
              <h3 className="mt-2 font-serif text-[34px] leading-[1.05] text-[#f7f1e8] sm:text-[38px]">
                Любимые блюда —
                <br />у вас дома
              </h3>
              <p className="mt-5 max-w-[270px] text-[15px] leading-[1.55] text-ink-muted">
                Оформите заказ на самовывоз или с доставкой по звонку и наслаждайтесь вкусом «Золотой вилки» в любом месте.
              </p>
              <a href={site.phoneHref} className="btn-gold mt-7 w-full sm:w-[240px]">
                <I.Phone size={18} /> Позвонить
              </a>
              <p className="mt-3 text-[12.5px] text-ink-soft">Все заказы принимаем только по телефону.</p>
            </div>
          </div>
          <ul className="grid grid-cols-1 gap-5 border-t border-gold-500/20 p-6 sm:grid-cols-3 sm:gap-0 sm:px-8">
            {[
              { icon: I.Scooter, t: ["Доставка", "по Сочи"] },
              { icon: I.Bag, t: ["Самовывоз", "из ресторана"] },
              { icon: I.Chef, t: ["Те же любимые", "блюда, то же качество"] },
            ].map((f, i) => (
              <li key={i} className={`flex items-center gap-4 ${i > 0 ? "sm:border-l sm:border-gold-400/30 sm:pl-5" : ""}`}>
                <f.icon size={34} className="shrink-0 text-gold-300" strokeWidth={1.1} />
                <span className="text-[12.5px] leading-snug text-ink-muted">
                  {f.t[0]}
                  <br />
                  {f.t[1]}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── КОНТАКТЫ ───────────────────────── */

export function Contacts() {
  return (
    <section id="contacts" className="bg-texture border-t border-gold-500/20">
      <div className="container-x grid gap-10 py-16 lg:grid-cols-[250px_1fr] lg:gap-10 lg:py-20">
        <Reveal>
          <p className="eyebrow">Наши контакты</p>
          <h2 className="mt-5 font-serif text-[40px] leading-[1.02] text-[#f7f1e8] sm:text-[44px]">
            Всегда рады
            <br />
            вас видеть
          </h2>
          <ul className="mt-9 space-y-7">
            <li className="flex gap-5">
              <I.Phone size={26} className="mt-1 shrink-0 text-gold-300" />
              <div>
                <a href={site.phoneHref} className="font-serif text-[20px] text-ink hover:text-gold-200">
                  {site.phone}
                </a>
                <p className="text-[13px] text-ink-muted">Звоните, мы на связи</p>
              </div>
            </li>
            <li className="flex gap-5">
              <I.Pin size={26} className="mt-1 shrink-0 text-gold-300" />
              <div>
                <p className="font-serif text-[20px] text-ink">{site.address}</p>
                <p className="text-[13px] text-ink-muted">{site.addressNote}</p>
              </div>
            </li>
            <li className="flex gap-5">
              <I.Clock size={26} className="mt-1 shrink-0 text-gold-300" />
              <div>
                <p className="font-serif text-[20px] leading-tight text-ink">
                  {site.hoursLines[0]}
                  <br />
                  {site.hoursLines[1]}
                </p>
                <p className="text-[13px] text-ink-muted">Ждём вас!</p>
              </div>
            </li>
          </ul>
          <div className="mt-9 flex gap-3">
            {[
              { h: site.whatsapp, i: I.Whatsapp, l: "WhatsApp" },
              { h: site.telegram, i: I.Telegram, l: "Telegram" },
              { h: site.instagram, i: I.Instagram, l: "Instagram" },
            ].map((s) => (
              <a
                key={s.l}
                href={s.h}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.l}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/70 text-gold-200 transition hover:bg-gold-300/10"
              >
                <s.i size={22} />
              </a>
            ))}
          </div>
          <p className="mt-3 text-[13px] leading-snug text-ink-muted">
            Напишите нам
            <br />в мессенджерах
          </p>
        </Reveal>

        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-[1.6fr_1fr]">
            <Reveal className="group relative min-h-[260px] overflow-hidden border border-gold-400/60 sm:min-h-[300px]">
              <Image
                src={img.windowBooth}
                alt="Столик у окна"
                fill
                sizes="(min-width:1024px) 520px, 100vw"
                className="object-cover transition duration-[1.2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-coal-900/80 via-transparent to-transparent" />
              <ScriptNote
                lines={["Больше,", "чем просто", "ресторан"]}
                rotate={-12}
                className="absolute bottom-6 right-6 text-[30px] sm:text-[34px]"
              />
            </Reveal>
            <Reveal delay={0.1} className="relative flex min-h-[300px] flex-col overflow-hidden border border-gold-400/60 bg-coal-800">
              <iframe
                title={`Карта: ${site.address}`}
                src={mapEmbed}
                className="map-dark absolute inset-0 h-full w-full"
                loading="lazy"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-coal-900/90 via-transparent to-transparent" />
              <a
                href={routeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline relative z-10 mx-5 mb-5 mt-auto bg-coal-900/70 px-5 py-3 text-[16px] backdrop-blur"
              >
                Построить маршрут <I.Arrow />
              </a>
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { src: img.terrace, alt: "Терраса", pos: "object-[30%_center]" },
              { src: img.hallTables, alt: "Зал со столиками", pos: "object-center" },
              { src: img.tapestryTable, alt: "Столик у гобелена", pos: "object-center", note: true },
            ].map((p, i) => (
              <Reveal key={p.src} delay={0.08 * i} className="group relative aspect-[4/3] overflow-hidden border border-gold-400/60">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width:1024px) 260px, 33vw"
                  className={`object-cover ${p.pos} transition duration-[1.2s] group-hover:scale-105`}
                />
                {p.note && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-l from-coal-900/75 to-transparent" />
                    <ScriptNote
                      lines={["Хорошие", "люди", "собираются", "здесь"]}
                      rotate={-8}
                      className="absolute right-3 top-3 hidden text-[20px] sm:block lg:text-[22px]"
                    />
                  </>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */

export function Footer() {
  return (
    <footer className="bg-texture border-t border-gold-500/40">
      <div className="container-x flex flex-col gap-8 py-9 lg:flex-row lg:items-center lg:justify-between">
        <ul className="grid gap-5 sm:grid-cols-3 sm:gap-0">
          {[
            { i: I.ForkKnife, t: "Вкусная еда" },
            { i: I.People, t: "Уютная атмосфера" },
            { i: I.Heart, t: "Люди, которые возвращаются" },
          ].map((f, k) => (
            <li
              key={f.t}
              className={`flex items-center gap-4 text-[13px] text-ink-muted sm:px-7 ${
                k > 0 ? "sm:border-l sm:border-gold-400/40" : "sm:pl-0"
              }`}
            >
              <f.i size={30} className="text-gold-300" strokeWidth={1.2} />
              {f.t}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-8">
          <span className="hidden h-px w-24 bg-gold-400/50 xl:block" />
          <Logo compact />
        </div>
      </div>
      <div className="border-t border-gold-500/15">
        <div className="container-x flex flex-col gap-2 py-5 text-[12px] text-ink-soft sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} «{site.name}», {site.address}
          </span>
          <a href={site.phoneHref} className="hover:text-gold-200">
            {site.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
