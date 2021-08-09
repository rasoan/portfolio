import projectsRu from "./projects/projectsRu.json";

const messagesRu = {
    header: "Портфолио",
    navigation: {
        profile: "Профайл",
        projects: "Проекты"
    },
    date: '{{date}}',
    projects: projectsRu,
    socialMedia: {
        vkontakte: "вконтакте",
        instagram: "instagram",
        telegram: "telegram",
    },
    briefInformationAboutMe: [
        {
            header: "ФИО:",
            description: "Расоян Араик Джасмович"
        },
        {
            header: "Пол:",
            description: "мужчина",
        },
        {
            header: "Дата рождеия:",
            description: "21.03.1992",
        },
        {
            header: "Возраст:",
            description: `${((new Date()).getFullYear() - 1993)} лет, ${(new Date()).getMonth() - 2} месяцев`,
        },
        {
            header: "Телефон:",
            description: "+375 25 664 60 70",
        },
    ],
    essentialInformationAboutMe: [
        {
            header: "Владею следующими языками:",
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
            header: "Опыт работы:",
            description: [
                "любительский спорт (бокс) - 5 лет",
                "Менеджер по туризму - 1 год",
                "учитель физкультуры - 3 года",
                `системный администратор в институте - ${((new Date()).getFullYear() - 2019)} лет, ${(new Date()).getMonth() - 9} месяцев`,
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
    keySkills: [
        {
            header: "Языки программирования",
            description: ["HTML", "CSS/SCSS", "JavaScript"],
        },
        {
            header: "Библиотеки и фреймворки:",
            description: ["Material ui", "Bootstrap", "Redux", "Mobx", "Clsx", "Classes", "React-hook-form", "Yup", "Jquery",],
        },
        {
            header: "Графические редакторы",
            description: ["Adobe Photoshop", "Figma"],
        }
    ],
}

export default messagesRu;