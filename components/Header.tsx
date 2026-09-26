"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Decor";
import { Close, Menu, Phone, Pin } from "./Icons";
import { nav, site } from "@/lib/site";

export default function Header({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="container-x flex items-center justify-between gap-6 pt-6 sm:pt-8">
          <Logo />
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Основное меню">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`relative pb-2 font-serif text-[19px] text-ink transition hover:text-gold-200 ${
                  active === n.label ? "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gold-300" : ""
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden flex-col items-end gap-1.5 text-[14px] xl:flex">
            <a href={site.phoneHref} className="flex items-center gap-3 font-serif text-[17px] text-ink hover:text-gold-200">
              <Phone size={16} className="text-gold-300" />
              {site.phone}
            </a>
            <span className="flex items-center gap-2 font-serif text-[15px] text-ink-muted">
              <Pin size={14} className="text-gold-300" />
              {site.address}
            </span>
          </div>
          <button
            className="flex h-11 w-11 items-center justify-center rounded border border-gold-400/60 text-gold-200 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Открыть меню"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* липкая панель при прокрутке */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            exit={{ y: -80 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-x-0 top-0 z-40 border-b border-gold-500/25 bg-coal-900/90 backdrop-blur-md"
          >
            <div className="container-x flex h-[68px] items-center justify-between gap-6">
              <Logo compact />
              <nav className="hidden items-center gap-8 lg:flex">
                {nav.map((n) => (
                  <Link key={n.href} href={n.href} className="font-serif text-[18px] text-ink hover:text-gold-200">
                    {n.label}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-3">
                <a href={site.phoneHref} className="hidden items-center gap-2 font-serif text-[17px] text-ink hover:text-gold-200 sm:flex">
                  <Phone size={16} className="text-gold-300" />
                  {site.phone}
                </a>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded border border-gold-400/60 text-gold-200 lg:hidden"
                  onClick={() => setOpen(true)}
                  aria-label="Открыть меню"
                >
                  <Menu size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* мобильное меню */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="bg-texture fixed inset-0 z-50 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-x flex items-center justify-between pt-6">
              <Logo compact />
              <button
                className="flex h-11 w-11 items-center justify-center rounded border border-gold-400/60 text-gold-200"
                onClick={() => setOpen(false)}
                aria-label="Закрыть меню"
              >
                <Close size={22} />
              </button>
            </div>
            <nav className="container-x mt-12 flex flex-col gap-2">
              {nav.map((n, i) => (
                <motion.div
                  key={n.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-gold-500/20 py-4 font-serif text-[32px] text-ink"
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="container-x mt-auto pb-10">
              <a href={site.phoneHref} className="btn-gold w-full">
                <Phone size={18} /> Позвонить
              </a>
              <p className="mt-4 flex items-center justify-center gap-2 font-serif text-[16px] text-ink-muted">
                <Pin size={14} className="text-gold-300" /> {site.address}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
