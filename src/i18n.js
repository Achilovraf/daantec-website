import { createI18n } from 'vue-i18n'
import ru from './locales/ru'
import uz from './locales/uz'
import en from './locales/en'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('language') || 'ru', // язык по умолчанию
  fallbackLocale: 'ru',
  messages: {
    ru,
    uz,
    en
  }
})

export default i18n