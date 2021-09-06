import projectsBe from "./projects/projectsBe.json";

const messagesBe = {
    header: "Партфоліа",
    navigation: {
        profile: "Прафайл",
        projects: "Праекты"
    },
    date: '{{date}}',
    projects: projectsBe,
    profilePage: {
        socialMedia: {
            vkontakte: "вконтакте",
            instagram: "instagram",
            telegram: "telegram",
        },
        briefInformationAboutMe: {
            fullName: "Расаян Араик Джасмавiч",
            years: "28 гадоў",
        },
        essentialInformationAboutMe: [
            {
                header: "Пол:",
                description: "мужчынскі",
            },
            {
                header: "Дата нараджэння:",
                description: "21.03.1993",
            },
            {
                header: "Тэлефон:",
                description: "+375 25 664 60 70",
            },
            {
                header: "Адрас пражывання",
                description: "г Бабруйск, вул Урыцкага 7",
            },
            {
                header: "Стаўленне да палення:",
                description: "нейтральнае (не палю)",
            },
            {
                header: "Ці гатовы прыступіць да працы:",
                description: "адразу гатовы, пажадана пачаць з выдаленага варыянту, але разгледжу усе варыянты",
            },
            {
                header: "Жаданы ўзровень з.п .:",
                description: "Ці гатовы працаваць першы час бясплатна",
            },
            {
                header: "Валодаю наступнымі мовамі:",
                columnDirection: false,
                description: [ "Рускі"],
            },
            {
                header: "Грамадзянства:",
                description: "Беларусь",
            },
            {
                header: "Дазвол на працу:",
                description: "Беларусь",
            },
            {
                header: "Пажадана час шляху да працы:",
                description: "на бягучы момант шукаю адна сцёртая працу",
            },
            {
                header: "Адукацыя:",
                columnDirectionList: true,
                description: [
                    'БДУФК (завочна) - спецыяльнасць "Менеджмент ў турызме" c 2011 г. па 2016',
                    `БНТУ (завочна) - спецыяльнасць -" Праграмнае забеспячэнне інфармацыйных тэхналогій "c 2018 па 2023`,
                    'Rolling-scopes-school - "Frontend распрацоўшчык" з 2019/02/01 па 2019/08/01',
                ],
            },
            {
                header: "Вопыт працы:",
                columnDirectionList: true,
                description: [
                    "2 месяцы працаваў у Коммандо над камерцыйнымі праектамі",
                    `Сістэмны адміністратар у інстытуце з 2019 па $ {new Date (). GetFullYear ()}`,
                ],
            },
            {
                header: "Пра мяне:",
                description: "праграмуюць дзень і ноч," +
                    "Люблю спорт і атрымліваю кайф ад вынікаў сваёй працы"
            },
        ],
        keySkills: {
            header: "Бібліятэкі і фреймворка:",
            description: ["Material ui", "Bootstrap", "Redux",
                "Mobx", "Clsx", "Classes",
                "React-hook-form", "Yup", "Jquery",
                "I18next", "TypeScript"],
        },
    },
    projectsPage: {
        controlPanel: {
            sort: {
                buttonShowModal: "Сартаванне",
                sortingCategories: {
                    date: "Дата",
                    rating: "Рэйтынг",
                    reset: "Выключыць сартыроўку"
                },
            },
            filter: {
                buttonShowModal: "Фільтр",
                buttonReset: "Скінуць ўсё",
                buttonSelectAll: "Выбраць усё",
            },
        },
        cardProject: {
            linkDemo: "Дэма",
            linkCode: "Код",
            moreDetails: "падрабязней",
        },
    }
}

export default messagesBe;