"use client";

import { getImageProps } from "next/image";
import Link from "next/link";
import { preload } from "react-dom";
import { motion } from "framer-motion";
import { ScriptNote } from "./Decor";
import * as I from "./Icons";
import { img } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const feats = [
  { icon: I.Bowl, t: ["Домашняя", "кухня"], d: ["Любимые блюда", "в авторском исполнении"] },
  { icon: I.People, t: ["Уютная", "атмосфера"], d: ["Для семейных ужинов", "и душевных встреч"] },
  { icon: I.Wine, t: ["Хорошая", "компания"], d: ["Вкуснее вместе"] },
];

/**
 * Первый экран по утверждённому тёмному макету главной.
 * Фон: реальное фото столика у окна (шторы, лампа, свеча), тёплая вечерняя обработка.
 * Затемнение только слева под текстом, правая часть интерьера остаётся светлой.
 */
export default function Hero() {
  // разные кадры: широкий для компьютера, вертикальный для телефона
  const common = { alt: "", fill: true, priority: true, quality: 90, sizes: "100vw" } as const;
  const { props: { srcSet: dSet, ...dRest } } = getImageProps({ ...common, src: img.hero });
  const { props: { srcSet: mSet } } = getImageProps({ ...common, src: img.heroMobile });
  const desktop = { srcSet: dSet, rest: dRest };
  const mobile = { srcSet: mSet };
  // предзагрузка только кадра Hero: свой для телефона и для компьютера
  preload(img.heroMobile, { as: "image", imageSrcSet: mSet, imageSizes: "100vw", fetchPriority: "high", media: "(max-width: 767px)" } as never);
  preload(img.hero, { as: "image", imageSrcSet: dSet, imageSizes: "100vw", fetchPriority: "high", media: "(min-width: 768px)" } as never);
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden border-b border-gold-500/40 bg-coal-900">
      {/* фото на всю ширину */}
      <motion.div
        className="absolute inset-0 -z-20"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.6, ease }}
      >
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop.srcSet} sizes="100vw" />
          <source srcSet={mobile.srcSet} sizes="100vw" />
          <img
            {...desktop.rest}
            alt="Уютный столик у окна с золотыми шторами, лампой и свечой в ресторане «Золотая Вилка»"
            className="absolute inset-0 h-full w-full object-cover object-center md:object-[center_58%]"
          />
        </picture>
      </motion.div>

      {/* затемнение: слева под текстом, лёгкое сверху под шапкой и снизу под преимуществами */}
      <div
        className="absolute inset-0 -z-10 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(15,11,8,.95) 0%, rgba(15,11,8,.9) calc(50% - 250px), rgba(15,11,8,.66) calc(50% + 60px), rgba(15,11,8,.26) calc(50% + 230px), rgba(15,11,8,.05) calc(50% + 360px), rgba(15,11,8,0) calc(50% + 440px))",
        }}
      />
      <div
        className="absolute inset-0 -z-10 hidden md:block"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,11,8,.55) 0%, rgba(15,11,8,0) 18%, rgba(15,11,8,0) 72%, rgba(15,11,8,.55) 100%)",
        }}
      />
      {/* мобильная версия: текст идёт поверх всего кадра */}
      <div
        className="absolute inset-0 -z-10 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,11,8,.7) 0%, rgba(15,11,8,.45) 32%, rgba(15,11,8,.42) 58%, rgba(15,11,8,.88) 100%)",
        }}
      />

      <div className="container-x flex flex-1 flex-col pb-10 pt-32 sm:pt-40 lg:pb-12 lg:pt-[clamp(128px,18vh,210px)]">
        <div className="max-w-[760px]">
          <motion.p
            className="eyebrow text-[12px] text-ink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Больше, чем еда
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.3 }}
            className="mt-6 font-serif text-[clamp(44px,min(6.4vw,9.4vh),100px)] font-medium leading-[0.96] tracking-[-0.005em] text-[#f7f1e8]"
          >
            <span className="block">Тёплая атмосфера,</span>
            <span className="block font-normal italic text-gold-200">
              в которую хочется
              <br />
              вернуться
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.5 }}
            className="mt-7 max-w-[470px] text-[17px] leading-[1.6] text-ink sm:text-[19px]"
          >
            Домашняя кухня, уютная обстановка и спокойные встречи в самом сердце Сочи. Здесь вкусно, как дома.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.65 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link href="/menu" className="btn-gold h-[60px] text-[18px] sm:w-[250px]">
              Открыть меню <I.Arrow />
            </Link>
            <Link href="#booking" className="btn-outline h-[60px] text-[18px] sm:w-[200px]">
              Забронировать
            </Link>
          </motion.div>
        </div>

        {/* три преимущества внизу первого экрана */}
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.9 }}
          className="mt-12 grid grid-cols-3 gap-0 md:mt-auto md:pt-12 lg:max-w-[760px]"
        >
          {feats.map((f, i) => (
            <li
              key={i}
              className={`flex flex-col items-center gap-2 px-2 text-center sm:flex-row sm:items-start sm:gap-5 sm:px-0 sm:pr-5 sm:text-left ${
                i > 0 ? "border-l border-gold-400/45 sm:pl-7" : ""
              }`}
            >
              <f.icon size={46} className="h-9 w-9 shrink-0 text-gold-300 sm:h-[46px] sm:w-[46px]" strokeWidth={1.1} />
              <div>
                <p className="font-serif text-[16px] leading-[1.15] text-ink sm:text-[19px]">
                  {f.t[0]}
                  <br />
                  {f.t[1]}
                </p>
                <p className="mt-2 hidden text-[13px] leading-snug text-ink-muted sm:block">
                  {f.d.map((l, k) => (
                    <span key={k} className="block">
                      {l}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>

      <ScriptNote
        lines={["Вкусные", "моменты", "рядом"]}
        className="absolute bottom-12 right-[5%] hidden text-[50px] drop-shadow-[0_2px_10px_rgba(0,0,0,.55)] lg:block"
      />
    </section>
  );
}
