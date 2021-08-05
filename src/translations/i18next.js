import languages from "./languages/languages";
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import messagesEn from "./messages/messagesEn.js";
import messagesRu from "./messages/messagesRu.js";
import {format} from 'date-fns'
import {ru, enUS, be} from 'date-fns/locale'
import messagesBe from "./messages/messagesBe";

i18next.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: languages.en.value,
        interpolation: {
            alwaysFormat: true,
            escapeValue: false,
            format: function (value, _, lng) {
                if (value instanceof Date) {
                    switch (lng) {
                        case languages.en.value:
                            return format(value, 'dd MMMM yyyy', {locale: enUS});
                        case languages.ru.value:
                            return format(value, 'dd MMMM yyyy', {locale: ru});
                        case languages.be.value:
                        default:
                            return format(value, 'dd MMMM yyyy', {locale: be});
                    }
                }
                return value;
            }
        },
        resources: {
            [languages.en.value]: {
                translation: {
                    ...messagesEn,
                },
            },
            [languages.ru.value]: {
                translation: {
                    ...messagesRu,
                },
            },
            [languages.be.value]: {
                translation: {
                    ...messagesBe,
                },
            },
        }
    });


export default i18next;