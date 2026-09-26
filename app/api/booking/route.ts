import { NextResponse } from "next/server";

/**
 * Приём заявок на бронь.
 * Заявка уходит в Telegram, если в Vercel заданы переменные окружения:
 *   TELEGRAM_BOT_TOKEN  токен бота от @BotFather
 *   TELEGRAM_CHAT_ID    id чата/группы, куда слать заявки
 * Пока переменные не заданы, форма честно предлагает позвонить.
 */
export async function POST(req: Request) {
  let body: Record<string, string> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "bad_request" }, { status: 400 });
  }

  const clean = (v: unknown, max = 80) => String(v ?? "").replace(/[<>]/g, "").trim().slice(0, max);
  const name = clean(body.name);
  const phone = clean(body.phone, 24);
  const date = clean(body.date, 12);
  const time = clean(body.time, 8);
  const guests = clean(body.guests, 4);

  if (!name || phone.replace(/\D/g, "").length < 11 || !date || !time || !guests) {
    return NextResponse.json({ ok: false, reason: "validation" }, { status: 422 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return NextResponse.json({ ok: false, reason: "not_configured" }, { status: 503 });
  }

  const [y, m, d] = date.split("-");
  const text =
    `🍴 Новая бронь «Золотая вилка»\n\n` +
    `Имя: ${name}\nТелефон: ${phone}\nДата: ${d}.${m}.${y}\nВремя: ${time}\nГостей: ${guests}`;

  try {
    const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    if (!r.ok) throw new Error(String(r.status));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, reason: "send_failed" }, { status: 502 });
  }
}
