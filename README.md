# Сибтрансавто

> Многостраничный сайт транспортной компании  
> Лендинг + форма заявки на перевозку крупногабаритных и тяжеловесных грузов

**Сайт:** [https://sibtransavto-omsk.ru](https://sibtransavto-omsk.ru)

## Страницы

- Главная
- Наши перевозки
- Перечень техники
- Контакты
- Политика конфиденциальности

## Функционал

- Полностью адаптивная вёрстка
- Анимации появления элементов при скролле (Intersection Observer)
- Боковое мобильное меню
- Форма заявки с валидацией и отправкой на backend
- Кастомные range-инпуты с динамическим отображением значений
- Яндекс.Метрика
- SEO-оптимизация (мета-теги, Open Graph)

## Стек

| Категория       | Технологии                  |
|-----------------|-----------------------------|
| Markup          | HTML5                       |
| Styles          | CSS3                        |
| Logic           | Vanilla JavaScript          |
| Build           | Vite                        |
| Backend         | Express + Nodemailer        |

## Структура
```text
├── index.html
├── transportation.html
├── technics.html
├── contacts.html
├── policy.html
├── src/
│   ├── styles/
│   └── scripts/          # menu, form, animations
└── public/
```

## Запуск

```bash
npm install
npm run dev
```
## Backend
Форма отправляется на эндпоинт /submit
