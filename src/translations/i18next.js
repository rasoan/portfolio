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
        supportedLngs: Object.keys(languages),
        interpolation: {
            alwaysFormat: true,
            escapeValue: false,
            format: function (value, _, lng) {
                if (value instanceof Date) {
                    switch (lng) {
                        case languages["en-EN"].value:
                            return format(value, 'dd MMMM yyyy', {locale: enUS});
                        case languages["ru-RU"].value:
                            return format(value, 'dd MMMM yyyy', {locale: ru});
                        case languages["be-BE"].value:
                            return format(value, 'dd MMMM yyyy', {locale: be});
                        default:
                            return format(value, 'dd MMMM yyyy', {locale: be});
                    }
                }
                return value;
            }
        },
        resources: {
            [languages["en-EN"].value]: {
                translation: {
                    ...messagesEn,
                },
            },
            [languages["ru-RU"].value]: {
                translation: {
                    ...messagesRu,
                },
            },
            [languages["be-BE"].value]: {
                translation: {
                    ...messagesBe,
                },
            },
        }
    });


export default i18next;