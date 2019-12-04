import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const dictionary = {
  en: {},
  ch: {},
};

i18n.use(initReactI18next).init({
  resources: dictionary,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default dictionary;
