import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationFR from './locales/fr.json';
import translationEN from './locales/en.json';
import destinationsFR from './locales/fr-destinations.json';
import destinationsEN from './locales/en-destinations.json';

const resources = {
  fr: {
    translation: translationFR,
    destinations: destinationsFR
  },
  en: {
    translation: translationEN,
    destinations: destinationsEN
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    lng: 'fr',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
