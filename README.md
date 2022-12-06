Clone the repo
Run npm i to install dependencies
Run commands in terminal:

Development Server

```
npm start
```

Production Build

```
npm run build
```

Development mode

```
npm run dev
```

Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore

@vincapto
rolling-scopes-school
/
tasks
Public
Code
Issues
40
Pull requests
2
Discussions
Projects
Wiki
Security
Insights
tasks/tasks/migration-newip-to-ts.md
Newer Older
Ignore revisions
You can now hide commits e.g. from automated formatters. Learn more.
100644 127 lines (94 sloc) 8.69 KB

# News API

**[News API](https://newsapi.org/)** - это простой HTTP REST API для поиска и извлечения новостей со всего Интернета.

## Ключевые навыки:

- JavaScript Classes
- Modules in JavaScript
- Webpack
- TypeScript

## Источник

[Исходное приложение](https://github.com/Pulya10c/news-JS)

## Требования к заданию

- Скопировать себе приложение и создать свою копию приложения
- Добавить [TypeScript](https://www.typescriptlang.org/) в проект
- Настроить ESLint для работы с TypeScript
- Настроить Webpack для работы с Typescript
- Смигрировать приложение с JavaScript на TypeScript, обязательно использовать:
  - Enum
  - interface
  - type
  - Generics
  - Union
  - Private, public
  - Partial, pick, readonly
  - Тип `any` использовать **ЗАПРЕЩАЕТСЯ!**
- Сделать верстку адаптивной с дизайном на свое усмотрение

## Требования к вёрстке и оформлению приложения

- внешний вид приложения соответствует предложенному образцу или является его улучшенной версией
- вёрстка адаптивная. Минимальная ширина страницы, при которой проверяется корректность отображения приложения - 320рх, максимальная ширина страницы, при которой проверяется корректность отображения приложения - 1920рх
- в футере приложения есть ссылка на гитхаб автора, год создания приложения, [логотип курса](https://rs.school/images/rs_school_js.svg) со [ссылкой на курс](https://rs.school/js/)

## Технические требования

- работа приложения проверяется в браузере Google Chrome последней версии

## Последовательность выполнения задания:

### Этап 1. Bootstrap приложения

Результатом выполнения этого этапа является:

- `TypeScript` добавлен в проект
  - добавлен npm пакет `TypeScript`
  - создан `tsconfig.json` файл
- `ESLint` и `Webpack` настроены для работы с `TypeScript`
- В `ESLint` используется плагин [typescript-eslint/recommended](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- Ваша копия приложения запускается

### Этап 2. Подготовка к миграция кода на TypeScript

Результатом выполнения этого этапа является:

- Файлы с расширением `*.js` переименованы в файлы с расширением `*.ts`
- Созданы необходимые интерфейсы для обмена данными c [News API](https://newsapi.org/)

### Этап 3. Миграция кода на TypeScript

Результатом выполнения этого этапа является:

- Код строго типизирован. А именно:
  - объявленны типы для всех переменных
  - типизированны параметры функций и методов, а так же для возвращаемые значения (и если значения не возвращаются)
  - типизированны используемые классы
  - созданные ранее интерфейсы используются в коде
  - созданы и используются enums, generics, partial и т.д.
- В конфигурационном файле TypeScript стоят флаги:
  - `"noImplicitAny": true`
  - `"strict": true`
- ESLint включено правило `no-explicit-any`

### Этап 4. Адаптивная верстка

Результатом выполнения этого этапа является:

- При масштабировании верстка не плывет, элементы не выпадают, часть контента не скрывается

## Проверка задания ментором

**Максимальный балл за задание +170**

1. Репозиторий +20
   - pull request выполнен в соответствии с [требованиями](https://docs.rs.school/#/pull-request-review-process?id=Требования-к-pull-request-pr) +10
   - ведётся история коммитов, названия коммитов даются согласно [гайдлайну](https://docs.rs.school/#/git-convention) +10
2. Качество кода +100
   - приложение полностью смигрированно на TypeScript +50:
     - используется Everyday Types + 10
     - используются Generics +10
     - использование Object Types +10
     - использование Classes +10
     - использование Function +10
   - ESLinter настроен на TypeScript, включено правило `no-explicit-any` и отсутствуют ошибки +10
   - нигде не используется тип Any +10
   - В конфигурационном файле TypeScript стоят флаги `"noImplicitAny": true` и `"strict": true` + 20
   - webpack настроен и работает с TypeScript +10
3. Оформление и функционал приложения +50
   - выполнена адаптивная верстка +10
   - добавлен свой собственный дизайн или улучшения (в ПР должно быть описано что именно) +20
   - у ментора нет замечаний к оформлению +20

## Штрафы

1. Используется тип Any -20
2. Код не полностью покрыт типами -20
3. В конфигурационном файле TypeScript не стоят обязательные флаги `"noImplicitAny": true` и `"strict": true` -20
4. В конфигурационном файле ESLint не включено правило `no-explicit-any` -10

## Требования к репозиторию

- задание выполняется в **приватном репозитории школы** [Как работать с приватным репозиторием](https://docs.rs.school/#/private-repository?id=Как-работать-с-приватным-репозиторием)
- в приватном репозитории школы от ветки `main` создайте ветку с названием задания, в ней создайте папку с названием задания, в папке разместите файлы проекта
- для деплоя используйте gh-pages [Как сделать деплой задания из приватного репозитория школы](https://docs.rs.school/#/private-repository?id=Как-сделать-деплой-задания-из-приватного-репозитория-школы)
- при невозможности использовать gh-pages, используйте для деплоя https://app.netlify.com/drop. Название страницы дайте по схеме: имя гитхаб аккаунта - название таска
- история коммитов должна отображать процесс разработки приложения. [Требования к коммитам](https://docs.rs.school/#/git-convention?id=Требования-к-именам-коммитов)
- после окончания разработки необходимо сделать Pull Request из ветки приложения в ветку `main` [Требования к Pull Request](https://docs.rs.school/#/pull-request-review-process?id=Требования-к-pull-request-pr). **Мержить Pull Request из ветки разработки в ветку `main` не нужно**

## Материалы которые могут помочь:

- [tsconfig](https://habr.com/ru/post/557738/)
- [no-explicit-any](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md)
- [responsive and adaptive](https://css-tricks.com/the-difference-between-responsive-and-adaptive-design/)
  Footer
  © 2022 GitHub, Inc.
  Footer navigation
  Terms
  Privacy
  Security
  Status
  Docs
  Contact GitHub
  Pricing
  API
  Training
  Blog
  About
  tasks/tasks/migration-newip-to-ts.md at master · rolling-scopes-school/tasks
