/**
 * Единый файл с контактами и данными ресторана.
 * Всё, что нужно поменять (телефон, адрес, часы, соцсети), меняется здесь.
 */
export const site = {
  name: "Золотая вилка",
  tagline: "домашний ресторан",
  phone: "+7 (918) 123-45-67",
  phoneHref: "tel:+79181234567",
  address: "Сочи, ул. Лесная, 12",
  addressShort: "ул. Лесная, 12",
  addressNote: "Удобное расположение в центре Сочи",
  hours: "Ежедневно с 12:00 до 23:00",
  hoursLines: ["Ежедневно", "с 12:00 до 23:00"],
  mapQuery: "Сочи, улица Лесная, 12",
  whatsapp: "https://wa.me/79181234567",
  telegram: "https://t.me/",
  instagram: "https://instagram.com/",
};

export const routeHref = `https://yandex.ru/maps/?rtext=~${encodeURIComponent(site.mapQuery)}&rtt=auto`;
export const mapEmbed = `https://yandex.ru/map-widget/v1/?text=${encodeURIComponent(site.mapQuery)}&z=16`;

export const nav = [
  { label: "Меню", href: "/menu" },
  { label: "О ресторане", href: "/#about" },
  { label: "Доставка", href: "/#delivery" },
  { label: "Бронь", href: "/#booking" },
  { label: "Контакты", href: "/#contacts" },
];

export const img = {
  terrace: "/images/interior/terrace.jpg",
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
