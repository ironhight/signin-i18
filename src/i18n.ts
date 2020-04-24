import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


import english from "./assets/locales/en/translation.json"
import vietnamese from "./assets/locales/vi/translation.json"

const fallbackLng = ['en']; 
const availableLanguages = ['en', 'vi'];
const resources:any = {
    en: {
        translation: english            
    },
    vi: {
        translation: vietnamese
    },
};
i18n
  // load translation using xhr -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-xhr-backend
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
   
    fallbackLng,
    resources,
    whitelist: availableLanguages,
    
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    
  });


export default i18n;