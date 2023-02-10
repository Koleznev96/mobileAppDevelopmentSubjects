/**
 * О проекте
 * Данное приложение предстовляет собой список заданий, с возможностью:
 *
 * фильтрации;
 * создания;
 * отмечать выполненое задание;
 * удалять задание.
 *
 * Разработчик: Колезнев Алексей Владимирович, КИ20-16/1Б
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

// Главный компонент, который рендерит приложение
AppRegistry.registerComponent(appName, () => App);
