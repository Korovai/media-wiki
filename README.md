# MediaWiki

Приложение MEDIAWIKI — это простой лист статей википедии. Приложение состоит из двух частей. Первая — это поиск элементов. По строке поиска (инпут с дропдауном и автокомплитом) ведется поиск. Поиск возвращает лист статей википедии. При клике по статье она выгружается по API. Под инпутом — спинер для загрузки статьи. После загрузки отображаем информацию про статью (филды: title, word count, snippet) и кнопка добавить. При клике добавить, сохраняем статью в лист из второй части. Вторая часть — лист сохраненных статей, показывается только title, при клике появляется так же snippet для активного элемента.  

## Основные этапы создания приложения

- Инициализировать React приложение.

`$ npx create-react-app media-wiki`

- Инициализировать инструментов Material Design. Сверстать базову структуру страницы.

`$ npm install @material-ui/core`

`$ npm install @material-ui/lab`

`$ npm install @material-ui/icon`

- Инициализировать Redux.

`$ npm install redux react-redux`

- Реализовать сервис для получения статей по API. 

Руководство по использованию API для действий MediaWiki. Форматы запросов, простые запросы, примерs проектов использующих [Action API](https://www.mediawiki.org/wiki/API:Tutorial), [API:Cross-site requests](https://www.mediawiki.org/wiki/API:Cross-site_requests).

##

Приложение выполнено в рамках практического задания для собеседования на должность Front-end Developer.
