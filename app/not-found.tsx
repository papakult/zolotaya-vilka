import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-texture flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-serif text-[80px] leading-none text-gold-200">404</p>
      <p className="font-serif text-[28px] text-ink">Такой страницы нет</p>
      <Link href="/" className="btn-gold">На главную</Link>
    </main>
  );
}
