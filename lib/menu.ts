/**
 * Меню ресторана «Золотая вилка».
 * Источник: Золотая_вилка_меню.txt (расшифровка бумажного меню ресторана).
 *
 * Как устроено:
 * - image есть → блюдо показывается карточкой с фото;
 * - image нет → блюдо стоит в списке «Ещё в разделе» под карточками;
 * - compact: true → весь раздел списком рядом с одной фотографией (закуски, снеки, бар, соусы);
 * - пустой price → «цена по телефону» (позиции, где цена в бумажном меню не читается).
 *
 * Чтобы добавить фото блюду: положите файл в public/images/dishes/ и впишите image: d("имя-файла").
 */
export type Dish = { name: string; desc?: string; price: string; image?: string };
export type Category = {
  id: string;
  title: string;
  note?: string;
  /** фото раздела для компактного списка */
  cover: string;
  /** весь раздел списком без карточек */
  compact?: boolean;
  items: Dish[];
  /** строка под разделом, например добавки к мороженому */
  footnote?: string;
};

const d = (slug: string) => `/images/dishes/${slug}.jpg`;

export const menu: Category[] = [
  {
    id: "breakfast",
    title: "Завтраки",
    cover: d("breakfast-syrniki"),
    items: [
      { name: "Сырники с вареньем, сгущёнкой и фруктами", desc: "Домашние сырники из творога", price: "530 ₽", image: d("breakfast-syrniki") },
      { name: "Шакшука", desc: "Яйца, томлённые в пряном томатном соусе с перцем", price: "450 ₽", image: d("breakfast-shakshuka") },
      { name: "Омлет из двух яиц со шпинатом и сладким перцем", desc: "Пышный омлет с овощами", price: "450 ₽", image: d("breakfast-omelette") },
      { name: "Каша овсяная с фруктами", desc: "На молоке, со свежими фруктами", price: "190 ₽", image: d("breakfast-oatmeal") },
      { name: "Яичница из трёх яиц с сыром и зеленью", price: "150 ₽", image: d("breakfast-fried-eggs") },
      { name: "Омлет с сыром и зеленью", price: "230 ₽", image: d("breakfast-omelet-cheese") },
      { name: "Скрембл с креветками и брокколи", price: "470 ₽" },
      { name: "Скрембл с креветками и авокадо", price: "900 ₽", image: d("breakfast-scramble-avocado") },
      { name: "Драники картофельные со сметаной и зелёным луком", price: "400 ₽", image: d("breakfast-draniki") },
      { name: "Сырники с карамелью и фруктами", price: "530 ₽", image: d("breakfast-syrniki-caramel") },
      { name: "Каша рисовая с фруктами", price: "190 ₽", image: d("breakfast-rice-porridge") },
      { name: "Каша овсяная с чёрной смородиной и мороженым", price: "300 ₽", image: d("breakfast-oatmeal-currant") },
      { name: "Завтрак «Золотая Вилка» №1", desc: "Омлет из 3 яиц, мини-цезарь, черри, куриное филе, пармезан, сухарики", price: "800 ₽", image: d("breakfast-set-1") },
      { name: "Завтрак «Золотая Вилка» №2", desc: "Омлет из 3 яиц, помидор, огурец, перец, фета, маслины, мини-фокачча, заправка на зелени", price: "750 ₽", image: d("breakfast-set-2") },
      { name: "Завтрак «Золотая Вилка» №3", desc: "Яйцо пашот 2 шт., драники, баварские сосиски, бекон, сырный соус, крутоны, помидор", price: "1100 ₽", image: d("breakfast-set-3") },
    ],
  },
  {
    id: "khinkali",
    title: "Хинкали",
    cover: d("cat-khinkali"),
    items: [
      { name: "Хинкали с бараниной", desc: "Сочная рубленая баранина, пряный бульон внутри", price: "100 ₽", image: d("khinkali-lamb") },
      { name: "Хинкали с говядиной", desc: "Классическая начинка из говядины с зеленью и перцем", price: "100 ₽", image: d("cat-khinkali") },
    ],
    footnote: "Цена за 1 шт.",
  },
  {
    id: "salads",
    title: "Салаты",
    cover: d("salad-caesar"),
    items: [
      { name: "Цезарь с курицей", desc: "Романо, курица, пармезан, гренки, соус цезарь", price: "430 ₽", image: d("salad-caesar") },
      { name: "Салат греческий", desc: "Свежие овощи, фета, маслины, оливковое масло", price: "420 ₽", image: d("salad-greek") },
      { name: "Цезарь с лососем", price: "670 ₽", image: d("salad-caesar-salmon") },
      { name: "Цезарь с креветками", price: "650 ₽", image: d("salad-caesar-shrimp") },
      { name: "Салат из баклажанов", price: "390 ₽", image: d("salad-eggplant") },
      { name: "Салат «Чука» с ореховым соусом", price: "400 ₽", image: d("salad-chuka") },
      { name: "Коул слоу", price: "360 ₽", image: d("salad-coleslaw") },
    ],
  },
  {
    id: "soups",
    title: "Первые блюда",
    cover: d("cat-soups"),
    items: [
      { name: "Суп-лапша с домашней курицей", desc: "Куриный бульон, домашняя лапша, зелень", price: "300 ₽", image: d("soup-noodle") },
      { name: "Грибной крем-суп", desc: "Нежный суп-пюре из шампиньонов со сливками", price: "320 ₽", image: d("cat-soups") },
      { name: "Тыквенный крем-суп с сыром пармезан", desc: "Бархатная тыква, сливки, пармезан", price: "410 ₽", image: d("soup-pumpkin") },
      { name: "Борщ", desc: "Со сметаной, чесноком и чёрным хлебом", price: "350 ₽", image: d("soup-borscht") },
      { name: "Мисо-суп", desc: "Японский суп с тофу, водорослями и зелёным луком", price: "450 ₽", image: d("soup-miso") },
      { name: "Том ям", desc: "Острый тайский суп с креветками и грибами", price: "940 ₽", image: d("soup-tomyum") },
      { name: "Сырный суп с креветками", desc: "Сливочный сырный суп, креветки, гренки", price: "520 ₽", image: d("soup-cheese-shrimp") },
    ],
  },
  {
    id: "pasta",
    title: "Паста",
    cover: d("pasta-carbonara"),
    items: [
      { name: "Карбонара с беконом", desc: "Сливочный соус, бекон, пармезан", price: "400 ₽", image: d("pasta-carbonara") },
      { name: "Фетучини с курицей и грибами", desc: "В сливочном соусе", price: "430 ₽", image: d("pasta-porcini") },
      { name: "Фетучини с креветками", desc: "Креветки, томаты, сливочный соус", price: "580 ₽", image: d("pasta-seafood") },
      { name: "Карбонара с копчёной индейкой", price: "400 ₽", image: d("pasta-carbonara-turkey") },
    ],
  },
  {
    id: "hot",
    title: "Горячие блюда",
    cover: d("hot-beef-cheeks"),
    items: [
      { name: "Говяжьи щёчки с картофельным пюре", desc: "Томлёные до мягкости, в густом соусе", price: "740 ₽", image: d("hot-beef-cheeks") },
      { name: "Стейк рибай", desc: "Мраморная говядина на гриле", price: "1200 ₽ / 100 г", image: d("hot-ribeye") },
      { name: "Мидии в сливочно-чесночном соусе", desc: "Подаём с хлебом", price: "800 ₽", image: d("hot-mussels") },
      { name: "Бефстроганов с пюре", desc: "Нежная говядина в сливочном соусе", price: "600 ₽", image: d("hot-stroganoff") },
      { name: "Стейк из сёмги", desc: "На гриле, с лимоном", price: "550 ₽ / 100 г", image: d("hot-salmon") },
      { name: "Форель на гриле", desc: "Целиком, с лимоном и травами", price: "280 ₽ / 100 г", image: d("grill-trout") },
      { name: "Судак в сливочном соусе с брокколи", price: "580 ₽", image: d("hot-fish") },
      { name: "Шницель куриный с салатом", price: "690 ₽", image: d("hot-schnitzel") },
      { name: "Мидии в соусе том ям", price: "830 ₽", image: d("hot-mussels-tomyam") },
      { name: "Мидии в соусе дор блю", price: "850 ₽", image: d("hot-mussels-dorblu") },
      { name: "Стейк куриный с беконом и сыром", price: "240 ₽ / 100 г", image: d("hot-chicken-steak") },
      { name: "Бриошь с креветкой и соусом", price: "690 ₽", image: d("hot-brioche-shrimp") },
      { name: "Свиные рёбрышки с соусом барбекю", price: "650 ₽", image: d("hot-pork-ribs") },
      { name: "Сибас на гриле", desc: "Цена за 100 г", price: "", image: d("hot-seabass-grill") },
      { name: "Дорадо на гриле", desc: "Цена за 100 г", price: "", image: d("hot-dorado-grill") },
      { name: "Филе сибаса, запечённое с овощами", price: "", image: d("hot-seabass-fillet") },
      { name: "Филе дорадо, запечённое с овощами", price: "", image: d("hot-dorado-fillet") },
      { name: "Кесадилья с курицей и томатами", price: "740 ₽", image: d("hot-quesadilla") },
      { name: "Удон с курицей", price: "480 ₽", image: d("hot-udon-chicken") },
      { name: "Удон с морепродуктами", price: "580 ₽", image: d("hot-udon-seafood") },
      { name: "Шурпа", desc: "Порция от 250 г", price: "230 ₽ / 100 г", image: d("hot-shurpa") },
    ],
  },
  {
    id: "sides",
    title: "Гарниры",
    cover: d("grill-vegetables"),
    items: [
      { name: "Овощи гриль", desc: "Кабачок, перец, баклажан, томаты", price: "390 ₽", image: d("grill-vegetables") },
      { name: "Картофельное пюре", price: "200 ₽", image: d("side-mashed-potato") },
      { name: "Рис отварной с овощами", price: "180 ₽", image: d("side-rice-vegetables") },
      { name: "Брокколи в панировке с соусом", price: "320 ₽" },
    ],
  },
  {
    id: "grill",
    title: "Мангал",
    cover: d("cat-grill"),
    items: [
      { name: "Свиная шея", desc: "Сочный шашлык с маринованным луком", price: "260 ₽ / 100 г", image: d("grill-pork") },
      { name: "Каре баранины", desc: "На косточке, с розмарином", price: "600 ₽ / 100 г", image: d("grill-lamb-rack") },
      { name: "Мякоть баранины", desc: "Шашлык из мякоти баранины", price: "450 ₽ / 100 г", image: d("cat-grill") },
      { name: "Куриное филе", desc: "Нежное филе в маринаде на углях", price: "230 ₽ / 100 г", image: d("grill-chicken") },
      { name: "Куриные крылья", desc: "С хрустящей корочкой", price: "230 ₽ / 100 г", image: d("grill-wings") },
      { name: "Люля-кебаб из курицы", desc: "На лаваше с зеленью", price: "230 ₽ / 100 г", image: d("grill-lula-chicken") },
      { name: "Люля-кебаб из говядины", desc: "С луком и сумахом", price: "250 ₽ / 100 г", image: d("grill-lula-beef") },
      { name: "Люля-кебаб из баранины", desc: "С зеленью и гранатом", price: "390 ₽ / 100 г", image: d("grill-lula-lamb") },
      { name: "Форель", desc: "Целиком на углях", price: "270 ₽ / 100 г", image: d("grill-trout") },
      { name: "Сёмга", desc: "Стейк на углях с лимоном", price: "570 ₽ / 100 г", image: d("hot-salmon") },
      { name: "Шампиньоны", desc: "На углях с травами", price: "160 ₽ / 100 г", image: d("grill-mushrooms") },
      { name: "Овощи на мангале ассорти", desc: "Кабачок, перец, баклажан, томаты", price: "600 ₽", image: d("grill-vegetables") },
    ],
  },
  {
    id: "starters",
    title: "Закуски",
    cover: d("cat-starters"),
    compact: true,
    items: [
      { name: "Сёмга слабосолёная", desc: "70 г", price: "400 ₽" },
      { name: "Овощная тарелка", price: "380 ₽" },
      { name: "Сырная тарелка", price: "580 ₽" },
      { name: "Креветки тигровые на гриле", price: "580 ₽" },
      { name: "Креветки отварные", price: "550 ₽" },
      { name: "Креветки жареные", price: "600 ₽" },
      { name: "Соленья", price: "390 ₽" },
      { name: "Маслины / оливки", desc: "100 г", price: "290 ₽" },
      { name: "Хлебная корзина", price: "165 ₽" },
    ],
  },
  {
    id: "snacks",
    title: "Снеки",
    cover: d("cat-snacks"),
    compact: true,
    items: [
      { name: "Пивной сет", desc: "Наггетсы, чесночные гренки, фри, луковые кольца, сырные палочки; соусы сырный, кетчуп, сладкий чили", price: "1600 ₽" },
      { name: "Сырные палочки", price: "250 ₽" },
      { name: "Наггетсы", price: "220 ₽" },
      { name: "Чесночные гренки", price: "320 ₽" },
      { name: "Картофельные дольки", price: "250 ₽" },
      { name: "Луковые кольца", price: "220 ₽" },
      { name: "Пельмени жареные с чесночным соусом", price: "320 ₽" },
      { name: "Креветка темпура с соусом сладкий чили", price: "800 ₽" },
      { name: "Батат фри", price: "270 ₽" },
      { name: "Картофель фри", price: "220 ₽" },
    ],
  },
  {
    id: "burgers",
    title: "Бургеры",
    cover: d("cat-burgers"),
    items: [
      { name: "Бургер с говядиной", desc: "Говяжья котлета, сыр, овощи, соус", price: "630 ₽", image: d("cat-burgers") },
      { name: "Бургер с курицей", desc: "Хрустящая курица, салат, томат, соус", price: "500 ₽", image: d("burger-chicken") },
      { name: "Бургер с тигровой креветкой", desc: "Креветки в хрустящей панировке, салат, соус", price: "730 ₽", image: d("burger-shrimp") },
    ],
  },
  {
    id: "shawarma",
    title: "Шаурма",
    cover: d("cat-shawarma"),
    items: [
      { name: "Шаурма с говядиной", desc: "Говядина, свежие овощи, соус в лаваше", price: "450 ₽", image: d("shawarma-beef") },
      { name: "Шаурма с курицей", desc: "Курица, овощи, соус в лаваше", price: "420 ₽", image: d("cat-shawarma") },
      { name: "Шаурма с лососем", desc: "Лосось, огурец, зелень в лаваше", price: "700 ₽", image: d("shawarma-salmon") },
      { name: "Вегетарианская шаурма", desc: "Овощи на гриле, свежий салат, соус", price: "400 ₽", image: d("shawarma-veg") },
    ],
  },
  {
    id: "desserts",
    title: "Десерты",
    cover: d("dessert-cheesecake"),
    items: [
      { name: "Чизкейк «Нью-Йорк»", desc: "Классический сливочный чизкейк", price: "270 ₽", image: d("dessert-cheesecake") },
      { name: "Мороженое", desc: "С добавками на выбор", price: "", image: d("dessert-icecream") },
      { name: "Чизкейк шоколадный", price: "270 ₽" },
      { name: "Торт-мусс «Три шоколада»", price: "320 ₽" },
      { name: "Торт «Эстерхази» ореховый", price: "330 ₽" },
      { name: "Торт бисквитный молочный", price: "310 ₽" },
    ],
    footnote: "Добавки к мороженому: топинг шоколад +50 ₽, карамель +50 ₽, грецкий орех +50 ₽, фрукты +70 ₽",
  },
  {
    id: "drinks",
    title: "Бар и напитки",
    cover: d("drink-coffee"),
    compact: true,
    items: [
      { name: "Безалкогольный коктейль «Классический»", price: "350 ₽" },
      { name: "Коктейль клубнично-малиновый", price: "350 ₽" },
      { name: "Коктейль «Пина колада»", price: "400 ₽" },
      { name: "Коктейль «Голубая лагуна»", price: "350 ₽" },
      { name: "Кофе по-восточному", price: "150 ₽" },
      { name: "Эспрессо", desc: "30 мл", price: "200 ₽" },
      { name: "Американо", price: "200 ₽" },
      { name: "Капучино", price: "230 ₽" },
      { name: "Латте", price: "270 ₽" },
      { name: "Морс", desc: "1 л", price: "850 ₽" },
      { name: "Сок в ассортименте", desc: "0,2 л", price: "150 ₽" },
      { name: "Боржоми газированная", desc: "0,5 л", price: "250 ₽" },
      { name: "Боржоми без газа", desc: "0,5 л", price: "250 ₽" },
      { name: "Pepsi-Cola", price: "150 ₽" },
      { name: "7UP", price: "150 ₽" },
    ],
  },
  {
    id: "sauces",
    title: "Соусы",
    cover: d("cat-sauces"),
    compact: true,
    items: [
      { name: "Сметанно-чесночный", price: "100 ₽" },
      { name: "Грузинский", price: "100 ₽" },
      { name: "Кисло-сладкий чили", price: "100 ₽" },
      { name: "Цезарь", price: "100 ₽" },
      { name: "Сырный", price: "100 ₽" },
      { name: "Спайси", price: "100 ₽" },
      { name: "Барбекю", price: "100 ₽" },
      { name: "Ореховый", price: "100 ₽" },
      { name: "Кетчуп", price: "100 ₽" },
      { name: "Хрен", price: "100 ₽" },
      { name: "Горчица", price: "100 ₽" },
      { name: "Сметана", price: "80 ₽" },
      { name: "Майонез", price: "80 ₽" },
    ],
  },
];

export const chefPick = {
  title: "Говяжьи щёчки с картофельным пюре",
  desc: "Томлёные до мягкости, в густом соусе, с нежным пюре",
  price: "740 ₽",
  image: d("hot-beef-cheeks"),
};

/** минимальная цена за порцию (цены за 100 г не учитываем) */
export function fromPrice(cat: Category) {
  const nums = cat.items
    .filter((i) => i.price && !i.price.includes("/"))
    .map((i) => parseInt(i.price.replace(/\D/g, ""), 10))
    .filter(Boolean);
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
  pick("grill", "Шашлык и люля на углях"),
  pick("desserts", "Сладкие моменты"),
];
