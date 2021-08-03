import i18next from 'i18next';
import storeApp from "../../store/storeApp";
import languages from "../languages/languages";
import LanguageDetector from "i18next-browser-languagedetector";

i18next.use(LanguageDetector).init({
    lng: storeApp.language, // if you're using a language detector, do not define the lng option
    debug: true,
    ns: ["translation"],
    defaultNS: "translation",


    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    },
    resources: {
        [languages.en.value]: {
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
                ]
            },
        },
        [languages.ru.value]: {
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
                ]
            },
        },
    }
});

export default i18next;