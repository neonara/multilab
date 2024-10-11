import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translations for different languages
const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      home: "Home",
      about: "About",
      contact: "Contact",
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue",
      home: "Accueil",
      about: "À propos",
      contact: "Contact",
    },
  },
  // Add more languages here
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  keySeparator: false, // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
