# Золотая вилка | сайт домашнего ресторана

Next.js 15 (App Router) · React 19 · Tailwind CSS 3 · Framer Motion.

## Структура

- `/` главная: Hero, О ресторане, цитата с террасой, светлый блок меню, бронирование + доставка по звонку, контакты, footer
- `/menu` полное меню (макет «Меню»)
- `/api/booking` приём заявок на бронь (отправка в Telegram)

## Что где менять

| Что | Где |
| --- | --- |
| Телефон, адрес, часы, соцсети, карта | `lib/site.ts` |
| Блюда, цены, категории | `lib/menu.ts` |
| Фото блюд | положить файлы в `public/images/dishes/` и заменить `image` в `lib/menu.ts` (сейчас везде `placeholder.svg`) |
| Фото интерьера | `public/images/interior/` |

## Заявки на бронь

В Vercel → Settings → Environment Variables добавить:

- `TELEGRAM_BOT_TOKEN` токен бота от @BotFather
- `TELEGRAM_CHAT_ID` id чата, куда приходят заявки

Пока переменные не заданы, форма предлагает гостю позвонить.

## Запуск

```bash
npm install
npm run dev
```
