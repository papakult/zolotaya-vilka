"use client";

import { motion } from "framer-motion";
import { Phone } from "./Icons";
import { site } from "@/lib/site";

/** Плавающая кнопка звонка на телефонах: доставка и бронь только по звонку */
export default function CallFab() {
  return (
    <motion.a
      href={site.phoneHref}
      aria-label={`Позвонить ${site.phone}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-gold-btn text-coal-900 shadow-gold lg:hidden"
    >
      <Phone size={24} />
    </motion.a>
  );
}
