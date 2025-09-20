# NEXUS Event Space — T3 Stack

Веб-сайт NEXUS создан на базе [create-t3-app](https://create.t3.gg) с адаптацией под брендбук 2025. Интерфейс полностью на русском языке и поддерживает брутальную монохромную эстетику с child selectors в Tailwind.

## Запуск

```bash
pnpm install   # или npm install / yarn install
pnpm dev       # старт dev-сервера на http://localhost:3000
```

## Скрипты

- `pnpm dev` — режим разработки
- `pnpm build` — production-сборка
- `pnpm start` — запуск оптимизированной сборки
- `pnpm lint` — проверки линтера

## Структура

- `src/app` — страницы Next.js (App Router)
- `src/components` — UI-библиотека бренда (карточки, секции, навигация)
- `src/server` — конфигурация tRPC
- `src/trpc` — клиентские провайдеры
- `public/nexus_logo.svg` — фирменный знак

## Фишки

- Child selectors (`[&_li]`, `[&_a]`) для единых правил в блоках
- Бегущая строка, сеточные карточки, массивная типографика
- tRPC баннер с приветствием (пример API-слоя)
- Формы и таблицы оформлены под брутальный стиль

Перед деплоем заполните `.env` на основе `.env.example` (NextAuth секрет, если потребуется).
