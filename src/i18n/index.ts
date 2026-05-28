import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import nl from "./locales/nl.json";
import en from "./locales/en.json";

export const SUPPORTED_LANGUAGES = ["nl", "en"] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      nl: { translation: nl },
      en: { translation: en },
    },
    fallbackLng: "nl",
    supportedLngs: SUPPORTED_LANGUAGES as unknown as string[],
    // Map regional codes (e.g. "en-US", "nl-NL") to the base language.
    nonExplicitSupportedLngs: true,
    load: "languageOnly",
    detection: {
      // Use a remembered choice first, otherwise fall back to the browser language.
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "lang",
    },
    interpolation: { escapeValue: false },
  });

// Keep <html lang> in sync for accessibility and SEO.
const applyHtmlLang = (lng: string) => {
  document.documentElement.lang = lng.split("-")[0];
};
applyHtmlLang(i18n.resolvedLanguage ?? "nl");
i18n.on("languageChanged", applyHtmlLang);

export default i18n;
