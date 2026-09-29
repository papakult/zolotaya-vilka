/**
 * Единый файл с контактами и данными ресторана.
 * Всё, что нужно поменять (телефон, адрес, часы), меняется здесь.
 */
export const SITE_URL = "https://zolotaya-vilka.ru";

export const site = {
  name: "Золотая Вилка",
  tagline: "домашний ресторан",
  phone: "+7 999 653-49-83",
  phoneHref: "tel:+79996534983",
  phoneE164: "+79996534983",
  address: "Сочи, Аллея Челтенхэма, 8/5",
  addressShort: "Аллея Челтенхэма, 8/5",
  addressNote: "Верхняя Мацеста, Сочи",
  /** Часы работы не подтверждены: время не указываем, пока не пришлют */
  hours: "Часы работы уточняйте по телефону",
  gis: "https://2gis.ru/sochi/geo/70000001116665161",
  mapQuery: "Сочи, Аллея Челтенхэма, 8/5",
  /** координаты из карточки 2ГИС */
  lat: 43.557344,
  lon: 39.794918,
  postalCode: "354024",
  /** владелец сайта и оператор персональных данных */
  owner: "ИП Аль-Зрейки Абдел Кадер",
  ogrnip: "313236734500032",
  /** ИНН ИП: вписать, когда пришлют */
  inn: "",
};

export const routeHref = site.gis;
export const mapEmbed = `https://yandex.ru/map-widget/v1/?ll=${site.lon},${site.lat}&z=16&pt=${site.lon},${site.lat},pm2rdm`;

export const nav = [
  { label: "Меню", href: "/menu" },
  { label: "О ресторане", href: "/#about" },
  { label: "Доставка", href: "/#delivery" },
  { label: "Бронь", href: "/#booking" },
  { label: "Контакты", href: "/#contacts" },
];

export const img = {
  terrace: "/images/interior/terrace.jpg",
  /** фасад и терраса: без машины, тёплая обработка, затемнённая улица */
  facade: "/images/interior/facade.jpg",
  hallChandelier: "/images/interior/hall-chandelier.jpg",
  bar: "/images/interior/bar.jpg",
  tableShelves: "/images/interior/table-shelves.jpg",
  hallWide: "/images/interior/hall-wide.jpg",
  /** Hero: столик у окна с золотыми шторами, тёплая вечерняя обработка */
  hero: "/images/interior/hero-atmosphere.jpg",
  /** Hero на телефонах: вертикальный кадр столика у окна */
  heroMobile: "/images/interior/hero-mobile.jpg",
  windowBooth: "/images/interior/window-booth.jpg",
  hallTables: "/images/interior/hall-tables.jpg",
  tapestryCabinet: "/images/interior/tapestry-cabinet.jpg",
  tapestryTable: "/images/interior/tapestry-table.jpg",
  barBull: "/images/interior/bar-bull.jpg",
};

/** Временное фото блюда. Позже заменить путь в каждой карточке на реальное фото. */
export const DISH_PLACEHOLDER = "/images/dishes/placeholder.svg";
