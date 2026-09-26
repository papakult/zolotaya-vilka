/**
 * Меню ресторана. Позиции и цены взяты из утверждённого макета меню.
 * Категории без позиций (items: []) показываются с фото категории
 * и предложением уточнить ассортимент по телефону. Чтобы заполнить,
 * просто добавьте блюда в items.
 * Фото блюд лежат в public/images/dishes/.
 */
export type Dish = { name: string; desc: string; price: string; image: string };
export type Category = {
  id: string;
  title: string;
  note?: string;
  /** фото категории: обложка вкладки и заглушка для пустой категории */
  cover: string;
  items: Dish[];
};

const d = (slug: string) => `/images/dishes/${slug}.jpg`;

export const menu: Category[] = [
  {
    id: "breakfast",
    title: "Завтраки",
    note: "с 8:00 до 12:00",
    cover: d("breakfast-syrniki"),
    items: [
      { name: "Овсяная каша", desc: "На молоке или воде, с сезонными ягодами", price: "320 ₽", image: d("breakfast-oatmeal") },
      { name: "Домашние сырники", desc: "Со сметаной и ягодным соусом", price: "420 ₽", image: d("breakfast-syrniki") },
      { name: "Яичница с беконом", desc: "Из фермерских яиц, с томатами и зеленью", price: "450 ₽", image: d("breakfast-eggs-bacon") },
      { name: "Блины со сгущенкой", desc: "Тонкие блинчики, как у бабушки", price: "350 ₽", image: d("breakfast-blini") },
      { name: "Омлет с овощами", desc: "Пышный омлет с сезонными овощами", price: "320 ₽", image: d("breakfast-omelette") },
      { name: "Английский завтрак", desc: "Яйцо, бекон, овощи, тосты", price: "450 ₽", image: d("breakfast-english") },
    ],
  },
  { id: "khinkali", title: "Хинкали", cover: d("cat-khinkali"), items: [] },
  {
    id: "salads",
    title: "Салаты",
    cover: d("salad-caesar"),
    items: [
      { name: "Цезарь с курицей", desc: "Классический рецепт, сыр пармезан, домашний соус", price: "520 ₽", image: d("salad-caesar") },
      { name: "Греческий", desc: "Свежие овощи, сыр фета, оливковое масло", price: "490 ₽", image: d("salad-greek") },
      { name: "Тёплый салат с говядиной", desc: "Обжаренная вырезка, микс-салат, томат черри, авторский соус", price: "590 ₽", image: d("salad-warm-beef") },
      { name: "Салат с печёной свёклой", desc: "Козий сыр, орехи, руккола", price: "480 ₽", image: d("salad-beetroot") },
      { name: "Салат из свежих овощей", desc: "С ароматной заправкой", price: "290 ₽", image: d("salad-fresh") },
      { name: "Тёплый салат с куриной печенью", desc: "Нежная печень, микс-салат, тёплая заправка", price: "360 ₽", image: d("salad-liver") },
      { name: "Салат с тунцом", desc: "С перепелиными яйцами", price: "380 ₽", image: d("salad-tuna") },
    ],
  },
  { id: "soups", title: "Первые блюда", cover: d("cat-soups"), items: [] },
  {
    id: "pasta",
    title: "Паста",
    cover: d("pasta-carbonara"),
    items: [
      { name: "Карбонара", desc: "Классическая паста с беконом, сливочным соусом и пармезаном", price: "560 ₽", image: d("pasta-carbonara") },
      { name: "Паста с морепродуктами", desc: "Креветки, кальмары, томаты, сливочный соус", price: "680 ₽", image: d("pasta-seafood") },
      { name: "Паста с белыми грибами", desc: "В сливочном соусе с зеленью", price: "620 ₽", image: d("pasta-porcini") },
      { name: "Паста Болоньезе", desc: "С итальянским томатным соусом и пармезаном", price: "590 ₽", image: d("pasta-bolognese") },
    ],
  },
  {
    id: "hot",
    title: "Горячие блюда",
    cover: d("hot-salmon"),
    items: [
      { name: "Куриная грудка в сливочном соусе", desc: "С грибами и картофельным пюре", price: "580 ₽", image: d("hot-chicken-cream") },
      { name: "Бефстроганов", desc: "С нежной говядиной и пюре", price: "650 ₽", image: d("hot-stroganoff") },
      { name: "Лосось на гриле", desc: "С овощами и лимонным соусом", price: "790 ₽", image: d("hot-salmon") },
      { name: "Домашние котлеты", desc: "Из говядины и свинины, с картофельным пюре и солеными огурчиками", price: "540 ₽", image: d("hot-cutlets") },
      { name: "Свинина по-домашнему", desc: "С овощами", price: "480 ₽", image: d("hot-pork") },
      { name: "Рыба дня", desc: "С сезонными овощами", price: "490 ₽", image: d("hot-fish") },
      { name: "Пельмени домашние", desc: "Лепим сами, подаём со сметаной", price: "360 ₽", image: d("hot-pelmeni") },
    ],
  },
  { id: "grill", title: "Мангал", cover: d("cat-grill"), items: [] },
  { id: "starters", title: "Закуски", cover: d("cat-starters"), items: [] },
  { id: "snacks", title: "Снеки", cover: d("cat-snacks"), items: [] },
  { id: "burgers", title: "Бургеры", cover: d("cat-burgers"), items: [] },
  { id: "shawarma", title: "Шаурма", cover: d("cat-shawarma"), items: [] },
  {
    id: "desserts",
    title: "Десерты",
    cover: d("dessert-cheesecake"),
    items: [
      { name: "Наполеон", desc: "Классический, с заварным кремом", price: "340 ₽", image: d("dessert-napoleon") },
      { name: "Чизкейк", desc: "Нежный, с ягодным соусом", price: "380 ₽", image: d("dessert-cheesecake") },
      { name: "Тирамису", desc: "Воздушный итальянский десерт", price: "420 ₽", image: d("dessert-tiramisu") },
      { name: "Мороженое", desc: "Ванильное, шоколадное, с ягодами", price: "280 ₽", image: d("dessert-icecream") },
      { name: "Шоколадный фондан", desc: "Горячий шоколадный кекс с жидкой серединой", price: "350 ₽", image: d("dessert-fondant") },
    ],
  },
  {
    id: "drinks",
    title: "Бар и напитки",
    cover: d("drink-lemonade"),
    items: [
      { name: "Авторский чай", desc: "Облепиховый, имбирный, травяной", price: "300 ₽", image: d("drink-author-tea") },
      { name: "Классический чай", desc: "Чёрный, зелёный, с добавками", price: "220 ₽", image: d("drink-classic-tea") },
      { name: "Кофе", desc: "Эспрессо / Американо / Капучино / Латте", price: "от 180 ₽", image: d("drink-coffee") },
      { name: "Домашние лимонады", desc: "Цитрусовый, ягодный, мятный", price: "350 ₽", image: d("drink-lemonade") },
      { name: "Свежевыжатые соки", desc: "Апельсин / Грейпфрут / Яблоко", price: "320 ₽", image: d("drink-juice") },
    ],
  },
  { id: "sauces", title: "Соусы", cover: d("cat-sauces"), items: [] },
];

export const chefPick = {
  title: "Тёплый салат с говядиной",
  desc: "Сочная говядина, свежие овощи, микс-салат и авторский соус",
  price: "590 ₽",
  image: d("salad-warm-beef"),
};

/** минимальная цена категории: «от 480 ₽» */
export function fromPrice(cat: Category) {
  const nums = cat.items.map((i) => parseInt(i.price.replace(/\D/g, ""), 10)).filter(Boolean);
  return nums.length ? `от ${Math.min(...nums)} ₽` : "";
}

/** карточки светлого блока меню на главной */
const pick = (id: string, desc: string) => {
  const c = menu.find((m) => m.id === id)!;
  return { title: c.title, desc, from: fromPrice(c), image: c.cover, href: `/menu#${id}` };
};
export const featured = [
  pick("salads", "Свежие и сытные"),
  pick("hot", "Классика и авторские рецепты"),
  pick("pasta", "Сливочная, томатная, с морепродуктами"),
  pick("desserts", "Сладкие моменты"),
];
