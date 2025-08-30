# Stream-Vibe - стриминговый сервис

Практика по верстке по макету Figma

## 🔗 Макет Figma

```url
https://www.figma.com/design/uIo0pJQqAJCvSyyPQonMZQ/StreamVibe?node-id=34-919&t=N8N5beztNciCJGw9-0
```

## 📦 Стэк технологий

- Minista (JSX + Vite)
- SCSS

Также в проекте используются линтеры(ESLint и Stylelint) и форматер Prettier.
Остальные зависимости для постобработки CSS, работы с масками полей ввода, созданием кастомных слйдеров и т.д. можно
посмотреть в package.json

## 🚀 Скрипты

```bash
npm run dev        # Запуск в dev-режиме
npm run build         # Сборка
npm run preview       # Локальный просмотр сборки

npm run lint:js       # Проверка JS-кода
npm run lint:js:fix   # Автоисправление JS-кода
npm run lint:css      # Проверка CSS-кода
npm run lint:css:fix  # Автоисправление CSS-кода
npm run format        # Проверка форматирования
npm run format:fix    # Форматирование
npm run lint          # Полная проверка кода и форматирования без исправлений
npm run lint:fix      # Полная проверка с автоисправлением и форматированием
```

## ⚙️ Структура проекта

```csharp
├── public/               # Статичные файлы, не обрабатываемые сборщиком
├── src/
│   ├── assets/           # Изображения, иконки и шрифты
│   │   ├── fonts/        # Подключаемые шрифты (woff2 и пр.)
│   │   ├── icons/        # SVG-иконки (для спрайта)
│   │   └── images/       # Остальные изображения
│   │
│   ├── components/       # Мелкие переиспользуемые компоненты (Button, Input и т.п.)
│   ├── constants/        # Константы, enum’ы, конфиги, словари и пр.
│   ├── layouts/          # Структурные компоненты страницы (Header, Content, Section, Footer)
│   ├── modules/          # JavaScript-модули
│   ├── pages/            # Файлы страниц
│   ├── sections/         # Переиспользуемые секции страниц
│   ├── styles/           # Общие стили проекта (переменные, миксины, сбросы)
│   ├── utils/            # Утилитарные функции
│   ├── global.jsx        # Общий layout для всех страниц (Minista Feature)
│   └── main.js           # Точка входа JavaScript-логики, запускающейся в браузере
│
├── .gitignore             # Список файлов и папок, игнорируемых Git
├── .prettierignore        # Список файлов и папок, игнорируемых Prettier
├── eslint.config.js       # Конфигурация ESLint (проверка JS/JSX-кода)
├── jsconfig.json          # Настройки путей и автодополнения для JS (используется IDE и сборщиком)
├── minista.config.js      # Конфигурация Minista
├── package.json           # Зависимости проекта, скрипты, метаинформация
├── package-lock.json      # Зафиксированные версии всех установленных пакетов
├── postcss.config.js      # Конфигурация PostCSS (preset-env, pxtorem и пр.)
├── prettier.config.js     # Настройки автоформатирования кода (Prettier)
├── README.md              # Документация по проекту (вы сейчас её читаете)
└── stylelint.config.js    # Конфигурация Stylelint (проверка CSS/SCSS)
```

