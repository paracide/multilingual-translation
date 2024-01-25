import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {resources} from "./resource.ts";

i18n
    .use(LanguageDetector) // 自动检测浏览器语言
    .use(initReactI18next) // 与React集成
    .init({
        resources,
        fallbackLng: 'en', // 默认语言
        debug: true,
        interpolation: {
            escapeValue: false, // 不需要对翻译值进行XSS保护
        }
    });

export default i18n;
