# EPUTS-MONO

Пример моно-репозитория для ЕПУТС, с использованием `yarn-workspace` с микро-фронтендами на `module-federation`

node 22.18.0

run `yarn install`

run root-app
`yarn workspace root-app start`

run cool-module
`yarn workspace cool-module start`

## Фичи

- **Единая установка зависимостей** — `yarn install` в корне ставит все пакеты для всех workspace сразу, без дублирования.
- **Общие конфиги в виде генерируемых библиотек** — вынесенные в `shared-configs` настройки webpack, loaders и plugins подключаются как npm-пакет и синхронизируются между приложениями через version bump.
- **Автогенерация типов для Module Federation** — при сборке remote-приложения автоматически создаются `.d.ts` файлы, которые host-приложение потребляет для полной типизации remote-компонентов с автодополнением в IDE.
