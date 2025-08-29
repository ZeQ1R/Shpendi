import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import al from "./locales/al.json";
import mk from "./locales/mk.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    al: { translation: al },
    mk: { translation: mk }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
