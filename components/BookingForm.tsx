"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Arrow, Calendar, Chevron, Clock, Phone, People, User } from "./Icons";
import { site } from "@/lib/site";

function formatPhone(raw: string) {
  let d = raw.replace(/\D/g, "");
  if (d.startsWith("8")) d = "7" + d.slice(1);
  if (!d.startsWith("7")) d = "7" + d;
  d = d.slice(0, 11);
  const p = d.slice(1);
  let out = "+7";
  if (p.length > 0) out += " (" + p.slice(0, 3);
  if (p.length >= 3) out += ")";
  if (p.length > 3) out += " " + p.slice(3, 6);
  if (p.length > 6) out += "-" + p.slice(6, 8);
  if (p.length > 8) out += "-" + p.slice(8, 10);
  return out;
}

/** Поле даты/времени с русской подписью вместо системного плейсхолдера */
function PickerField({
  name,
  type,
  label,
  icon,
  min,
  max,
}: {
  name: string;
  type: "date" | "time";
  label: string;
  icon: React.ReactNode;
  min?: string;
  max?: string;
}) {
  const [val, setVal] = useState("");
  const [focus, setFocus] = useState(false);
  const empty = !val && !focus;
  return (
    <label className="field relative">
      {icon}
      <input
        name={name}
        type={type}
        required
        min={min}
        max={max}
        aria-label={label}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onClick={(e) => {
          try {
            (e.currentTarget as HTMLInputElement).showPicker?.();
          } catch {}
        }}
        className={`[color-scheme:dark] ${empty ? "picker-empty text-transparent" : ""}`}
      />
      {empty && <span className="pointer-events-none absolute left-[46px] text-ink-soft">{label}</span>}
    </label>
  );
}

type Status = "idle" | "sending" | "done" | "offline" | "error";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [phone, setPhone] = useState("");
  const today = new Date().toISOString().slice(0, 10);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    if (String(data.phone).replace(/\D/g, "").length < 11) {
      (e.currentTarget.elements.namedItem("phone") as HTMLInputElement)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) setStatus("done");
      else if (json.reason === "not_configured") setStatus("offline");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "done" || status === "offline" || status === "error" ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[236px] flex-col justify-center gap-4"
          >
            {status === "done" ? (
              <>
                <p className="font-serif text-[28px] leading-tight text-ink">Спасибо! Заявка принята.</p>
                <p className="text-[15px] text-ink-muted">Мы перезвоним вам, чтобы подтвердить бронь.</p>
              </>
            ) : (
              <>
                <p className="font-serif text-[26px] leading-tight text-ink">
                  {status === "offline" ? "Бронь пока принимаем по телефону" : "Не получилось отправить заявку"}
                </p>
                <p className="text-[15px] text-ink-muted">Позвоните нам, и мы сразу подберём для вас столик.</p>
                <a href={site.phoneHref} className="btn-gold w-fit">
                  <Phone size={18} /> {site.phone}
                </a>
              </>
            )}
            <button onClick={() => setStatus("idle")} className="w-fit text-[13px] text-gold-300 underline underline-offset-4">
              Заполнить форму ещё раз
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="field">
                <User size={18} className="shrink-0 text-gold-300" />
                <input name="name" required placeholder="Ваше имя" autoComplete="name" aria-label="Ваше имя" />
              </label>
              <label className="field">
                <Phone size={16} className="shrink-0 text-gold-300" />
                <input
                  name="phone"
                  type="tel"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+7 (___) ___-__-__"
                  aria-label="Телефон"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value ? formatPhone(e.target.value) : "")}
                />
              </label>
              <PickerField name="date" type="date" label="Дата визита" icon={<Calendar size={18} className="shrink-0 text-gold-300" />} min={today} />
              <PickerField name="time" type="time" label="Время" icon={<Clock size={18} className="shrink-0 text-gold-300" />} min="12:00" max="22:30" />
              <label className="field relative">
                <People size={18} className="shrink-0 text-gold-300" />
                <select
                  name="guests"
                  required
                  defaultValue=""
                  aria-label="Количество гостей"
                  onChange={(e) => e.currentTarget.classList.toggle("text-ink-soft", !e.currentTarget.value)}
                  className="appearance-none pr-6 text-ink-soft"
                >
                  <option value="" disabled>
                    Количество гостей
                  </option>
                  {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"].map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
                <Chevron size={18} className="pointer-events-none absolute right-4 text-ink-muted" />
              </label>
            </div>
            <button type="submit" disabled={status === "sending"} className="btn-gold mt-3 w-full sm:w-[300px] disabled:opacity-70">
              {status === "sending" ? "Отправляем…" : "Забронировать столик"}
              <Arrow />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
