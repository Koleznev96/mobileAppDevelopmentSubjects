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

Так же в приложении предусмотренно отображение погоды в городе Красноярск, и отображение карты.

### V2.0

- Добавлено подключение к БД SQLite, и соответствующий функционал для работы приложения.

### DateBase (SQLite)

Запросы и функционал для работы с SQLite находятся в файле: ./src/lib/sqlite/db-service.ts

### Application build (APK)

Скачайте на Android устройство [APK файл](https://disk.yandex.ru/d/OEPW-yJRg102GA) и установите его.

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
