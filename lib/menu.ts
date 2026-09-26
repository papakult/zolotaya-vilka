/**
 * Меню ресторана.
 * Цены: завтраки, салаты, паста, горячее, десерты и напитки из утверждённых макетов.
 * Хинкали, первые блюда, мангал, закуски, снеки, бургеры, шаурма и соусы из ТЗ этапа 3,
 * цены для них ещё не переданы: пустая строка price показывает «Цену уточните по телефону».
 * Чтобы добавить цену, впишите её в price, например "450 ₽".
 * Фото блюд лежат в public/images/dishes/.
 */
export type Dish = { name: string; desc: string; price: string; image: string };
export type Category = {
  id: string;
  title: string;
  note?: string;
  /** фото категории: обложка для компактного списка */
  cover: string;
  /** компактный список без фото у каждой позиции (соусы) */
  compact?: boolean;
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
  {
    id: "khinkali",
    title: "Хинкали",
    cover: d("cat-khinkali"),
    items: [
      { name: "Хинкали с бараниной", desc: "Сочная рубленая баранина, пряный бульон внутри", price: "", image: d("khinkali-lamb") },
      { name: "Хинкали с говядиной", desc: "Классическая начинка из говядины с зеленью и перцем", price: "", image: d("cat-khinkali") },
    ],
  },
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
  {
    id: "soups",
    title: "Первые блюда",
    cover: d("cat-soups"),
    items: [
      { name: "Суп-лапша", desc: "Куриный бульон, домашняя лапша, зелень", price: "", image: d("soup-noodle") },
      { name: "Грибной крем-суп", desc: "Нежный суп-пюре из шампиньонов со сливками", price: "", image: d("cat-soups") },
      { name: "Тыквенный крем-суп", desc: "Бархатная тыква, сливки, тыквенные семечки", price: "", image: d("soup-pumpkin") },
      { name: "Борщ", desc: "Со сметаной, чесноком и чёрным хлебом", price: "", image: d("soup-borscht") },
      { name: "Мисо-суп", desc: "Японский суп с тофу, водорослями и зелёным луком", price: "", image: d("soup-miso") },
      { name: "Том Ям", desc: "Острый тайский суп с креветками и грибами", price: "", image: d("soup-tomyum") },
      { name: "Сырный суп с креветками", desc: "Сливочный сырный суп, креветки, гренки", price: "", image: d("soup-cheese-shrimp") },
    ],
  },
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
  {
    id: "grill",
    title: "Мангал",
    cover: d("cat-grill"),
    items: [
      { name: "Шампиньоны", desc: "Шампиньоны на углях с травами", price: "", image: d("grill-mushrooms") },
      { name: "Овощи", desc: "Кабачок, перец, баклажан и томаты на мангале", price: "", image: d("grill-vegetables") },
      { name: "Куриное филе", desc: "Нежное филе в маринаде, приготовленное на углях", price: "", image: d("grill-chicken") },
      { name: "Крылья", desc: "Куриные крылья с хрустящей корочкой", price: "", image: d("grill-wings") },
      { name: "Свиная шея", desc: "Сочный шашлык из свиной шеи с маринованным луком", price: "", image: d("grill-pork") },
      { name: "Люля курица", desc: "Люля-кебаб из курицы на лаваше с зеленью", price: "", image: d("grill-lula-chicken") },
      { name: "Люля говядина", desc: "Люля-кебаб из говядины с луком и сумахом", price: "", image: d("grill-lula-beef") },
      { name: "Люля баранина", desc: "Люля-кебаб из баранины с зеленью", price: "", image: d("grill-lula-lamb") },
      { name: "Форель", desc: "Форель целиком на углях с лимоном", price: "", image: d("grill-trout") },
      { name: "Сёмга", desc: "Стейк сёмги на мангале с лимоном", price: "", image: d("hot-salmon") },
      { name: "Каре баранины", desc: "Каре на косточке с розмарином", price: "", image: d("grill-lamb-rack") },
      { name: "Мякоть баранины", desc: "Шашлык из мякоти баранины", price: "", image: d("cat-grill") },
    ],
  },
  {
    id: "starters",
    title: "Закуски",
    cover: d("cat-starters"), compact: true,
    items: [
      { name: "Сёмга", desc: "Слабосолёная сёмга с лимоном и укропом", price: "", image: d("cat-starters") },
      { name: "Овощная тарелка", desc: "Свежие огурцы, томаты, перец, редис, зелень", price: "", image: d("cat-starters") },
      { name: "Сырная тарелка", desc: "Ассорти сыров к вину и к столу", price: "", image: d("cat-starters") },
      { name: "Тигровые креветки", desc: "Крупные креветки с чесночным маслом", price: "", image: d("cat-starters") },
      { name: "Креветки отварные", desc: "С лимоном и соусом", price: "", image: d("cat-starters") },
      { name: "Креветки жареные", desc: "Обжаренные с чесноком и зеленью", price: "", image: d("cat-starters") },
      { name: "Соленья", desc: "Домашние огурцы, томаты и капуста", price: "", image: d("cat-starters") },
      { name: "Маслины/оливки", desc: "К вину и к закускам", price: "", image: d("cat-starters") },
    ],
  },
  {
    id: "snacks",
    title: "Снеки",
    cover: d("cat-snacks"), compact: true,
    items: [
      { name: "Сырные палочки", desc: "Хрустящие палочки с тянущимся сыром", price: "", image: d("cat-snacks") },
      { name: "Наггетсы", desc: "Куриные наггетсы с соусом", price: "", image: d("cat-snacks") },
      { name: "Чесночные гренки", desc: "Хрустящие гренки с чесноком", price: "", image: d("cat-snacks") },
      { name: "Картофельные дольки", desc: "Запечённые дольки со специями", price: "", image: d("cat-snacks") },
      { name: "Луковые кольца", desc: "Золотистые кольца в хрустящем кляре", price: "", image: d("cat-snacks") },
      { name: "Жареные пельмени", desc: "Обжаренные до хруста, со сметаной", price: "", image: d("cat-snacks") },
      { name: "Креветка темпура", desc: "Креветки в лёгком кляре темпура", price: "", image: d("cat-snacks") },
      { name: "Батат фри", desc: "Сладкий картофель фри", price: "", image: d("cat-snacks") },
      { name: "Картофель фри", desc: "Классический картофель фри", price: "", image: d("cat-snacks") },
    ],
  },
  {
    id: "burgers",
    title: "Бургеры",
    cover: d("cat-burgers"),
    items: [
      { name: "Бургер с говядиной", desc: "Говяжья котлета, сыр, овощи, соус", price: "", image: d("cat-burgers") },
      { name: "Бургер с курицей", desc: "Хрустящая курица, салат, томат, соус", price: "", image: d("burger-chicken") },
      { name: "Бургер с тигровой креветкой", desc: "Креветки в хрустящей панировке, салат, соус", price: "", image: d("burger-shrimp") },
    ],
  },
  {
    id: "shawarma",
    title: "Шаурма",
    cover: d("cat-shawarma"),
    items: [
      { name: "Шаурма с говядиной", desc: "Говядина, свежие овощи, соус в лаваше", price: "", image: d("shawarma-beef") },
      { name: "Шаурма с курицей", desc: "Курица, овощи, соус в лаваше", price: "", image: d("cat-shawarma") },
      { name: "Шаурма с лососем", desc: "Лосось, огурец, зелень в лаваше", price: "", image: d("shawarma-salmon") },
      { name: "Вегетарианская шаурма", desc: "Овощи на гриле, свежий салат, соус", price: "", image: d("shawarma-veg") },
    ],
  },
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
  {
    id: "sauces",
    title: "Соусы",
    cover: d("cat-sauces"), compact: true,
    items: [
      { name: "Сметанно-чесночный", desc: "", price: "", image: d("cat-sauces") },
      { name: "Грузинский", desc: "", price: "", image: d("cat-sauces") },
      { name: "Кисло-сладкий", desc: "", price: "", image: d("cat-sauces") },
      { name: "Цезарь", desc: "", price: "", image: d("cat-sauces") },
      { name: "Сырный", desc: "", price: "", image: d("cat-sauces") },
      { name: "Спайси", desc: "", price: "", image: d("cat-sauces") },
      { name: "Барбекю", desc: "", price: "", image: d("cat-sauces") },
      { name: "Сметана", desc: "", price: "", image: d("cat-sauces") },
      { name: "Майонез", desc: "", price: "", image: d("cat-sauces") },
      { name: "Кетчуп", desc: "", price: "", image: d("cat-sauces") },
      { name: "Ореховый", desc: "", price: "", image: d("cat-sauces") },
      { name: "Хрен", desc: "", price: "", image: d("cat-sauces") },
      { name: "Горчица", desc: "", price: "", image: d("cat-sauces") },
    ],
  },
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
