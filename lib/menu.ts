import { DISH_PLACEHOLDER } from "./site";

export type Dish = { name: string; desc: string; price: string; image: string };
export type Category = { id: string; title: string; note?: string; items: Dish[] };

const ph = DISH_PLACEHOLDER;

/** Карточки светлого блока меню на главной. Поле image заменить на фото блюда. */
export const featured = [
  { title: "Салаты", desc: "Свежие и сытные", from: "от 290 ₽", image: ph, href: "/menu#salads" },
  { title: "Супы", desc: "Домашние и наваристые", from: "от 250 ₽", image: ph, href: "/menu" },
  { title: "Горячие блюда", desc: "Классика и авторские рецепты", from: "от 420 ₽", image: ph, href: "/menu#hot" },
  { title: "Десерты", desc: "Сладкие моменты", from: "от 220 ₽", image: ph, href: "/menu#desserts" },
];

export const menu: Category[] = [
  {
    id: "breakfast",
    title: "Завтраки",
    note: "с 8:00 до 12:00",
    items: [
      { name: "Овсяная каша", desc: "На молоке или воде, с сезонными ягодами", price: "320 ₽", image: ph },
      { name: "Домашние сырники", desc: "Со сметаной и ягодным соусом", price: "420 ₽", image: ph },
      { name: "Яичница с беконом", desc: "Из фермерских яиц, с томатами и зеленью", price: "450 ₽", image: ph },
      { name: "Блины со сгущенкой", desc: "Тонкие блинчики, как у бабушки", price: "350 ₽", image: ph },
    ],
  },
  {
    id: "salads",
    title: "Салаты",
    items: [
      { name: "Цезарь с курицей", desc: "Классический рецепт, сыр пармезан, домашний соус", price: "520 ₽", image: ph },
      { name: "Греческий", desc: "Свежие овощи, сыр фета, оливковое масло", price: "490 ₽", image: ph },
      { name: "Тёплый салат с говядиной", desc: "Обжаренная вырезка, микс-салат, томат черри, авторский соус", price: "590 ₽", image: ph },
      { name: "Салат с печёной свёклой", desc: "Козий сыр, орехи, руккола", price: "480 ₽", image: ph },
    ],
  },
  {
    id: "hot",
    title: "Горячие блюда",
    items: [
      { name: "Куриная грудка в сливочном соусе", desc: "С грибами и картофельным пюре", price: "580 ₽", image: ph },
      { name: "Бефстроганов", desc: "С нежной говядиной и пюре", price: "650 ₽", image: ph },
      { name: "Лосось на гриле", desc: "С овощами и лимонным соусом", price: "790 ₽", image: ph },
      { name: "Домашние котлеты", desc: "Из говядины и свинины, с картофельным пюре и солеными огурчиками", price: "540 ₽", image: ph },
    ],
  },
  {
    id: "pasta",
    title: "Паста",
    items: [
      { name: "Карбонара", desc: "Классическая паста с беконом, сливочным соусом и пармезаном", price: "560 ₽", image: ph },
      { name: "Паста с морепродуктами", desc: "Креветки, кальмары, томаты, сливочный соус", price: "680 ₽", image: ph },
      { name: "Паста с белыми грибами", desc: "В сливочном соусе с зеленью", price: "620 ₽", image: ph },
      { name: "Паста Болоньезе", desc: "С итальянским томатным соусом и пармезаном", price: "590 ₽", image: ph },
    ],
  },
  {
    id: "desserts",
    title: "Десерты",
    items: [
      { name: "Наполеон", desc: "Классический, с заварным кремом", price: "340 ₽", image: ph },
      { name: "Чизкейк", desc: "Нежный, с ягодным соусом", price: "380 ₽", image: ph },
      { name: "Тирамису", desc: "Воздушный итальянский десерт", price: "420 ₽", image: ph },
      { name: "Мороженое", desc: "Ванильное, шоколадное, с ягодами", price: "280 ₽", image: ph },
    ],
  },
  {
    id: "drinks",
    title: "Напитки",
    items: [
      { name: "Авторский чай", desc: "Облепиховый, имбирный, травяной", price: "300 ₽", image: ph },
      { name: "Классический чай", desc: "Чёрный, зелёный, с добавками", price: "220 ₽", image: ph },
      { name: "Кофе", desc: "Эспрессо / Американо / Капучино / Латте", price: "от 180 ₽", image: ph },
      { name: "Домашние лимонады", desc: "Цитрусовый, ягодный, мятный", price: "350 ₽", image: ph },
      { name: "Свежевыжатые соки", desc: "Апельсин / Грейпфрут / Яблоко", price: "320 ₽", image: ph },
    ],
  },
];

export const chefPick = {
  title: "Тёплый салат с говядиной",
  desc: "Сочная говядина, свежие овощи, микс-салат и авторский соус",
  price: "590 ₽",
};
