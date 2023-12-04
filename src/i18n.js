import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    lang: 'English',
    hello: 'Hello!',
    welcome: 'Welcome!',
    flag: './Flag_of_the_United_Kingdom.png',
    author: 'Vadym Chervoniak',
    toggleLangTip: 'Change language',
    toggleThemeTip: '☀️ Change theme 🌑',
    city: 'Place',
    autocomplete: 'Find location...',
    weather: 'Weather',
    cities: 'Places',
    temperature: 'Temperature',
    loading: 'Loading...',
    pinCityTip: 'Pin this place',
    alreadyPinnedTip: 'Already pinned place',
    cityUnpinTip: 'Unpin this place',
    removeCityTip: 'Remove this place from list',
    addCityTip: 'Add place to list',
    chartLabelHours: 'Hourly temperature for today',
    chartLabelDays: 'Average temperatures for each of __ days',
    chartHourlyTip: 'Show today hourly temperature chart',
    chartDailyTip: 'Show t°C for __ days',
    daysButtonHourly: 'Today',
    daysButtonDaily: 'days',
    yes: 'Yes',
    no: 'No',
    ok: 'Ok',
    unpinWarn: 'Are you sure you want to unpin this place?',
    removeWarn: 'Are you sure you want to remove this place from the list?',
    maxPinnedErr: 'You have reached the maximum number of pinned places (5).',
    maxListedErr: 'You have reached the maximum number of listed places (5).',
    inListErr: 'You have already added this place to list.'
  },
  uk: {
    lang: 'Ukrainian',
    hello: 'Привіт!',
    welcome: 'Ласкаво просимо!',
    flag: './Flag_of_Ukraine.png',
    author: 'Вадим Червоняк',
    toggleLangTip: 'Змінити мову',
    toggleThemeTip: '☀️ Змінити тему 🌑',
    city: 'Місце',
    autocomplete: 'Знайти місце...',
    weather: 'Погода',
    cities: 'Місця',
    temperature: 'Температура',
    loading: 'Завантаження...',
    pinCityTip: 'До збережених',
    alreadyPinnedTip: 'Наразі у збережених',
    cityUnpinTip: 'Видалити зі збережених',
    removeCityTip: 'Видалити зі списку',
    addCityTip: 'Додати до списку',
    chartLabelHours: 'Погодинний графік температур на сьогодні',
    chartLabelDays: 'Середні температури для кожного з __ днів',
    chartHourlyTip: 'Показати сьогоднішні температури погодинно',
    chartDailyTip: 'Показати t°C на __ днів',
    daysButtonHourly: 'Сьогодні',
    daysButtonDaily: 'днів',
    yes: 'Так',
    no: 'Ні',
    ok: 'Добре',
    unpinWarn: 'Ви впевнені, що хочете видалити зі збережених це місце?',
    removeWarn: 'Ви впевнені, що хочете видалити місце з цього списку?',
    maxPinnedErr: 'Ви досягли максимальної кількості збережених місць (5).',
    maxListedErr: 'Ви досягли максимальної кількості місць у списку (5).',
    inListErr: 'Ви вже додали це місце до списку.'
  },
}

const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n
