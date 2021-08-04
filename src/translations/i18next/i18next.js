import storeApp from "../../store/storeApp";
import languages from "../languages/languages";

import Backend from "i18next-http-backend";
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: languages.en.value,



        resources: {
            en: {
                translation: {
                    key: [
                        {
                            a: 1,
                            b: 2,
                        },
                        {
                            a: 3,
                            b: 4,
                        },
                    ],
                    test: "test",
                },
            },
            ru: {
                translation: {
                    key: [
                        {
                            a: 10,
                            b: 20,
                        },
                        {
                            a: 30,
                            b: 40,
                        },
                    ],
                    test: "тест"
                },
            },
        }
    });

export default i18n;