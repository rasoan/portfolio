import projectsRu from "./projects/projectsRu.json";

const messagesRu = {
    header: "Портфолио",
    navigation: {
        profile: "Профайл",
        projects: "Проекты"
    },
    date: '{{date}}',
    projects: projectsRu,
    profilePage: {
        socialMedia: {
            vkontakte: "вконтакте",
            instagram: "instagram",
            telegram: "telegram",
        },
        briefInformationAboutMe: {
            fullName: "Расоян Араик Джасмович",
            years: "28 лет",
        },
        essentialInformationAboutMe: [
            {
                header: "Пол:",
                description: "мужской",
            },
            {
                header: "Дата рождения:",
                description: "21.03.1993",
            },
            {
                header: "Телефон:",
                description: "+375 25 664 60 70",
            },
            {
                header: "Адрес проживания",
                description: "г Минск, ул Плеханова 52",
            },
            {
                header: "Отношение к курению:",
                description: "нейтральное (не курю)",
            },
            {
                header: "Готов приступить к работе:",
                description: "сразу готов, желательно начать с удалённого варианта, но рассмотрю все варианты",
            },
            {
                header: "Желаемый уровень з.п.:",
                description: "Можно начать с 300$",
            },
            {
                header: "Владею следующими языками:",
                columnDirection: false,
                description: ["Русский"],
            },
            {
                header: "Гражданство:",
                description: "Беларусь",
            },
            {
                header: "Разрешение на работу:",
                description: " Беларусь",
            },
            {
                header: "Желательное время пути до работы:",
                description: "30 минут, а вообще я живу на сьёмной квартире, " +
                    "что означает, что снять могу и поближе к работе, " +
                    "но в приоритете у меня место работы рядом с метро, " +
                    "но рассмотрю все варианнты.",
            },
            {
                header: "Образование:",
                columnDirectionList: true,
                description: [
                    'БГУФК (заочно) - специальность "Менеджмент в туризме" c 2011 по 2016',
                    `БНТУ (заочно) - специальность - "Программное обеспечение информационных технологий" c 2018 по 2023`,
                    'Rolling-scopes-school - "Frontend разработчик" с 01.02.2019 по 01.08.2019',
                ],
            },
            {
                header: "Опыт работы:",
                columnDirectionList: true,
                description: [
                    "Любительский спорт (бокс) с 2009 по 2015",
                    "менеджер по туризму с 2015 по 2016",
                    "учитель физкультуры с 2016 по 2019",
                    `системный администратор в институте с 2019 по ${new Date().getFullYear()}`,
                ],
            },
            {
                header: "Обо мне:",
                description: "Трудолюбивый парень, свободное время провожу за проектами для портфолио, " +
                    "за месяц до сессии 2 раза в год отклоняюсь от курса и погружаюсь в учёбу, " +
                    "что бы сессию сдать) " +
                    "Люблю спорт (баскетбол, " +
                    "волейбол, иногда настольный теннис).",
            },
        ],
        keySkills: {
            header: "Библиотеки и фреймворки:",
            description: ["Material ui", "Bootstrap", "Redux",
                "Mobx", "Clsx", "Classes",
                "React-hook-form", "Yup", "Jquery",
                "i18next", "TypeScript"],
        },

    },
    projectsPage: {
        controlPanel: {
            sort: {
                buttonShowModal: "Сортировка",
                sortingCategories: {
                    date: "Дата",
                    rating: "Рейтинг",
                    reset: "Выключить сортировку"
                },
            },
            filter: {
                buttonShowModal: "Фильтр",
                buttonReset: "Сбросить всё",
                buttonSelectAll: "Выбрать всё",
            },
        },
        cardProject: {
            linkDemo: "Демо",
            linkCode: "Код",
            moreDetails: "подробнее",
        },
    }
}

export default messagesRu;