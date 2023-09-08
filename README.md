## MusicApp
MusicApp - это приложение, цель которого стать много-функциональным. В приложении можно будет смотреть видео и слушать музыку.
В планах разработать возможность установки приложения на телевизоры с OS Android-TV или на TV-приставку. Проект создается для повышения собственных знаний и навыков.  

## Получение данных с сервера MySQL.
Данные будут приходить с сервера MySQL.
В папке backend уже реализован базовый функционал, при написании которого я использовал следующие библиотеки:

### Express
Минималистичный и гибкий веб-фреймворк для Node.js. Он предоставляет набор инструментов и функций для создания веб-приложений и API, упрощая обработку маршрутов, запросов и ответов.

### mysql2
Модуль Node.js, который обеспечивает доступ к базе данных MySQL из приложений, написанных на Node.js.

### CORS
Механизм безопасности в веб-браузерах, который контролирует доступ к ресурсам на разных доменах (origin). Модуль cors для Node.js предоставляет промежуточное ПО для Express, которое упрощает настройку политики CORS и позволяет веб-приложению обмениваться данными с разными доменами.
 
## Использование JSON-Server для тестирования и разработки.
В данный момент я использую JSON-Server для разработки приложения

## Текущее состояние приложения:
Приложение находится в стадии разработки

## Завершено
<ul>
  <li>Перемотка аудио по нажатию на прогресс бар</li>
  <li>Перемотка аудио перетаскиванием прогресс бара</li>
  <li>Переключение треков</li>
  <li>Манипулированием громкостью аудио через input</li>
</ul>
Реализован функционал плеера (на процентов 70%) который имеет такое же поведение как плеер Яндекс.Музыки, YouTube и т.д.
Я долго работал над возможностью перемотки, как у вышепречисленных сервисов, в том числе и перетаскивание полоски прогресса

## Планы на будущее
В будущем я планирую поработать с бэкендом, переписать с JSX на TSX и добавить такие возможности:
<ul>
  <li>Создавать профиль;</li>
  <li>Добавление любимых треков, альбомов в профиль;</li>
  <li>Использование ИИ для определения любимых жанров пользователя;</li>
  <li>Возможность установки приложения на телевизоры с OS Android-TV или на TV-приставку.</li>
</ul>
Наверное это самые крупные планы на будущее, более мелкие я не буду описывать.

## Технологии
<ul>
  <li>@reduxjs/toolkit: ^1.9.5</li>
  <li>@testing-library/jest-dom: ^5.16.5</li>
  <li>@testing-library/react: ^13.4.0</li>
  <li>@testing-library/user-event: ^13.5.0</li>
  <li>axios: ^1.4.0</li>
  <li>json-server: ^0.17.3</li>
  <li>mysql2: ^3.3.0</li>
  <li>react: ^18.2.0</li>
  <li>react-dom: ^18.2.0</li>
  <li>react-icons: ^4.8.0</li>
  <li>react-redux: ^8.0.5</li>
  <li>react-router-dom: ^6.11.1</li>
  <li>react-scripts: 5.0.1</li>
  <li>redux: ^4.2.1</li>
  <li>styled-components: ^6.0.0-rc.1</li>
</ul>

## Запуск проекта
Клонируйте репозиторий:
### `git clone https://github.com/Kon10t/MusicApp.git`
Перейдите в папку проекта:
### `cd ваш-репозиторий`
Установите зависимости:
### `npm install`
Запустите JSON-Server для имитации сервера MySQL:
### `npx json-server --watch db.json`
Запустите приложение:
### `npm start`

## Будьте внимательнее со звуком, проверьте звук в системе прежде чем включать песню

## Фотографии приложения
<br>

![image](https://github.com/Kon10t/MusicApp/assets/101184174/3254f8ac-2b17-46e0-909f-4f8723aec99a)
<br>

![image](https://github.com/Kon10t/MusicApp/assets/101184174/a5f91db9-2952-4c9b-bfd5-22032b578119)

## Лицензия
MIT License

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
