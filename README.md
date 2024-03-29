<div align="center">
  <h3 align="center">React Native App Subjects</h3>
</div>

## Developer

Колезнев Алексей Владимирович, КИ20-16/1Б

## About The Project

Приложение разработано на React-Native, TypeScript, SQLite.

Данное приложение предстовляет собой список заданий, с возможностью:

- фильтрации;
- создания;
- отмечать выполненое задание;
- удалять задание.

Так же в приложении предусмотренно отображение погоды в городе Красноярск, и отображение карты с метками.

### V3.0

- Подключена Open Api Weather (api.openweathermap.org/data/2.5/weathe), для отображения текущей погоды.
- Подключена Yandex map, и созданы метки с описанием.
- В текущем документе добавлен план монетизации и публикации приложения.
- Добавлено руководство пользователя приложения.

### App monetization and publishing plan

#### Monetization

Приложение будет публиковаться в Google Play и App Store.

#### Publishing

Приложение будет бесплатным, но будет иметь рекламу.
Приложение будет иметь платную версию, в которой будет отсутствовать реклама.

### User manual

[User manual](https://disk.yandex.ru/i/81PaLqo10ljQgg).

### Database (SQLite)

Запросы и функционал для работы с SQLite находятся в файле: ./src/lib/sqlite/db-service.ts

### Application build (APK)

Скачайте на Android устройство [APK файл](https://disk.yandex.ru/d/gVmU5Vr6G_eXhA) и установите его.

### Run project in development

1. Clone the repo
   ```sh
   git clone https://github.com/Koleznev96/mobileAppDevelopmentSubjects.git
   ```
2. Install dependencies
   ```sh
   yarn install
   ```
3. Start the app

- Run on Android: `yarn android` (or `react-native run-android`).

- Run on iOS: `yarn ios` (or `react-native run-ios`).
