import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Ресторан «Золотая Вилка» в Сочи: домашняя кухня, мангал и доставка";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Шрифты сайта в формате TTF для генератора картинки
async function googleFont(family: string, text: string, style = "") {
  const url = `https://fonts.googleapis.com/css2?family=${family}${style}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!src) throw new Error(`Font not loaded: ${family}`);
  return (await fetch(src[1])).arrayBuffer();
}

const NAME = "Золотая Вилка";
const SUB = "домашний ресторан";
const TAG = "Тёплая атмосфера, в которую хочется вернуться";
const CHIPS = ["Домашняя кухня", "Мангал", "Доставка"];
const ADDR = "СОЧИ · МАЦЕСТА · +7 999 653-49-83";
const SCRIPT = "Вкусные моменты рядом";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public/images/interior/hero-atmosphere.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  const [serif, serifItalic, body, script] = await Promise.all([
    googleFont("Cormorant+Garamond", NAME + SUB, ":wght@500"),
    googleFont("Cormorant+Garamond", TAG, ":ital,wght@1,500"),
    googleFont("PT+Serif", CHIPS.join("") + ADDR),
    googleFont("Marck+Script", SCRIPT),
  ]);

  return new ImageResponse(
    (
      <div style={{ width: 1200, height: 630, display: "flex", position: "relative", background: "#15100b" }}>
        <img src={photoSrc} width={700} height={630} style={{ position: "absolute", right: 0, top: 0, objectFit: "cover", objectPosition: "62% 50%" }} />
        <div style={{ position: "absolute", right: 0, top: 0, width: 700, height: 630, display: "flex",
          backgroundImage: "linear-gradient(90deg, #15100b 0%, rgba(21,16,11,0.85) 18%, rgba(21,16,11,0.25) 55%, rgba(21,16,11,0.15) 100%)" }} />
        <div style={{ position: "absolute", left: 22, top: 22, width: 1156, height: 586, border: "1px solid rgba(212,173,109,0.45)", display: "flex" }} />
        <div style={{ position: "absolute", left: 72, top: 0, width: 640, height: 630, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg viewBox="0 0 24 64" width={44} height={118}>
              <path fill="#d4ad6d" d="M4 1.5c.6 0 1 .4 1 1V13c0 .5.4.8.8.8s.8-.3.8-.8V2.5c0-.6.5-1 1.1-1s1 .4 1 1V13c0 .5.4.8.8.8s.8-.3.8-.8V2.5c0-.6.4-1 1-1s1 .4 1 1V13c0 .5.4.8.8.8s.8-.3.8-.8V2.5c0-.6.5-1 1.1-1s1 .4 1 1V15c0 3.3-2.1 5.6-4.4 6.6l.6 37.4c0 2-1.4 3.5-3.1 3.5S8.4 61 8.5 59l.6-37.4C6.1 20.6 3 18.3 3 15V2.5c0-.6.4-1 1-1Z" />
            </svg>
            <div style={{ display: "flex", flexDirection: "column", marginLeft: 22 }}>
              <div style={{ fontFamily: "Serif", fontSize: 92, color: "#e9c98f", lineHeight: 1 }}>{NAME}</div>
              <div style={{ fontFamily: "Serif", fontSize: 26, letterSpacing: 8, color: "#f3dcae", marginTop: 10, paddingLeft: 4 }}>{SUB}</div>
            </div>
          </div>
          <div style={{ fontFamily: "SerifItalic", fontSize: 40, lineHeight: 1.15, color: "#f5eee2", marginTop: 40, maxWidth: 560 }}>{TAG}</div>
          <div style={{ display: "flex", marginTop: 34 }}>
            {CHIPS.map((c, i) => (
              <div key={c} style={{ fontFamily: "Body", fontSize: 21, padding: "9px 20px", borderRadius: 30, marginRight: 12,
                color: i < 2 ? "#15100b" : "#f3dcae", background: i < 2 ? "#d4ad6d" : "transparent", border: "1px solid #d4ad6d" }}>{c}</div>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", left: 72, bottom: 52, fontFamily: "Body", fontSize: 20, letterSpacing: 2.4, color: "#cbb895", display: "flex" }}>{ADDR}</div>
        <div style={{ position: "absolute", right: 70, bottom: 64, fontFamily: "Script", fontSize: 44, color: "#e6c68e", transform: "rotate(-6deg)", display: "flex" }}>{SCRIPT}</div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Serif", data: serif, weight: 500, style: "normal" },
        { name: "SerifItalic", data: serifItalic, weight: 500, style: "italic" },
        { name: "Body", data: body, weight: 400, style: "normal" },
        { name: "Script", data: script, weight: 400, style: "normal" },
      ],
    },
  );
}
