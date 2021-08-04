import languages from "./languages/languages";
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import messagesEn from "./messages/messagesEn.js";
import messagesRu from "./messages/messagesRu.js";



i18next.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: languages["ru-RU"].value,
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
        }
    });

export default i18next;