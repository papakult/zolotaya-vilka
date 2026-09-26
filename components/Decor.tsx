"use client";

import Link from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

/** Золотая Вилка, как в логотипе макета */
export function ForkMark({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  const id = dark ? "fk-dark" : "fk-gold";
  return (
    <svg viewBox="0 0 24 64" className={className} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="1">
          {dark ? (
            <>
              <stop offset="0" stopColor="#b88a48" />
              <stop offset="1" stopColor="#7d5620" />
            </>
          ) : (
            <>
              <stop offset="0" stopColor="#f3dcae" />
              <stop offset=".5" stopColor="#d4ad6d" />
              <stop offset="1" stopColor="#a67a3b" />
            </>
          )}
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        d="M4 1.5c.6 0 1 .4 1 1V13c0 .5.4.8.8.8s.8-.3.8-.8V2.5c0-.6.5-1 1.1-1s1 .4 1 1V13c0 .5.4.8.8.8s.8-.3.8-.8V2.5c0-.6.4-1 1-1s1 .4 1 1V13c0 .5.4.8.8.8s.8-.3.8-.8V2.5c0-.6.5-1 1.1-1s1 .4 1 1V15c0 3.3-2.1 5.6-4.4 6.6l.6 37.4c0 2-1.4 3.5-3.1 3.5S8.4 61 8.5 59l.6-37.4C6.1 20.6 3 18.3 3 15V2.5c0-.6.4-1 1-1Z"
        transform="translate(-0.5 0)"
      />
    </svg>
  );
}

export function Logo({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <Link href="/" className="group flex shrink-0 items-center gap-3 whitespace-nowrap" aria-label="Золотая Вилка, на главную">
      <ForkMark dark={dark} className={compact ? "h-11 w-4" : "h-12 w-[18px] sm:h-14 sm:w-5"} />
      <span className="leading-none">
        <span
          className={`block font-serif ${compact ? "text-[26px]" : "text-[28px] sm:text-[34px]"} font-medium ${
            dark ? "text-cocoa" : "bg-gradient-to-b from-gold-50 via-gold-200 to-gold-400 bg-clip-text text-transparent"
          }`}
        >
          Золотая Вилка
        </span>
        <span
          className={`mt-1 block text-center font-serif text-[13px] tracking-[0.18em] sm:text-[15px] ${
            dark ? "text-cocoa-muted" : "text-gold-200"
          }`}
        >
          домашний ресторан
        </span>
      </span>
    </Link>
  );
}

/** Рукописная подпись с сердечком */
export function ScriptNote({
  lines,
  className = "",
  rotate = -14,
  dark = false,
}: {
  lines: string[];
  className?: string;
  rotate?: number;
  dark?: boolean;
}) {
  return (
    <div
      className={`pointer-events-none select-none font-script leading-[0.95] ${
        dark ? "text-caramel" : "text-gold-200"
      } ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden
    >
      {lines.map((l, i) => (
        <span key={i} className="block" style={{ paddingLeft: `${i * 0.9}em` }}>
          {l}
        </span>
      ))}
      <svg viewBox="0 0 40 36" className="ml-auto mt-1 h-[0.9em] w-[1em]" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M20 33C8 25 2 18 3.5 10.5 5 3.5 14 1.5 20 9c6-7.5 15-5.5 16.5 1.5C38 18 32 25 20 33Z" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/** Тонкая золотая ветка-ornament (линейная графика) */
export function Branch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 200" className={className} fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
      <path d="M20 195C50 150 80 100 145 10" />
      {[
        [40, 165, -35],
        [55, 140, 20],
        [70, 118, -40],
        [85, 95, 25],
        [98, 75, -42],
        [112, 55, 28],
        [124, 38, -45],
      ].map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
          <path d="M0 0C10-14 30-16 40-10 30 2 12 6 0 0Z" />
          <path d="M0 0C12-5 24-8 40-10" />
        </g>
      ))}
    </svg>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
  ...rest
}: { children: ReactNode; delay?: number; y?: number; className?: string } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
