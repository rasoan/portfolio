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
                description: "+375 29 684 90 05",
            },
            {
                header: "Адрес проживания",
                description: "г Бобруйск, ул Урицкого 7",
            },
            {
                header: "Отношение к курению:",
                description: "нейтральное (не курю)",
            },
            {
                header: "Готов приступить к работе:",
                description: "интересует вариант удалённой работы",
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
                description: "Беларусь",
            },
            {
                header: "Желательное время пути до работы:",
                description: "на текущий момент ищу удалённую работу",
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
                header: "Обо мне:",
                description: "программирую день и ночь, " +
                    "люблю спорт и получаю кайф от результатов своей работы"
            },
        ],
        keySkills: {
            header: "Библиотеки и фреймворки:",
            description: ["Material ui", "Bootstrap", "Redux",
                "Mobx", "Clsx", "Classes",
                "React-hook-form", "Yup", "Jquery",
                "i18next", "TypeScript", "next.js"],
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