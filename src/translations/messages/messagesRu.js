'use strict';

import projectsRu from "./projects/projectsRu.json";
import {getFullYears} from "../../additionalFunctions/additionalFunctions";

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
            telegram: "telegram",
        },
        briefInformationAboutMe: {
            fullName: "Расоян Араик Джасмович",
            years: `${getFullYears()} лет`,
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
                description: "г. Минск, Беларусь",
            },
            {
                header: "Отношение к курению:",
                description: "нейтральное (не курю)",
            },
            {
                header: "Готов приступить к работе:",
                description: "интересует вариант удалённой работы, релокация возможна",
            },
            {
                header: "Владею следующими языками:",
                columnDirection: false,
                description: ["Русский", "Английский - А1"],
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
                header: "Опыт работы программистом",
                description: "5 лет",
            },
            {
                header: "Образование:",
                columnDirectionList: true,
                description: [
                    'БГУФК - специальность "Менеджмент в туризме" c 2011 по 2016',
                    `БНТУ - специальность - "Программное обеспечение информационных технологий" c 2018 по 2023`,
                ],
            },
            {
                header: "Обо мне:",
                description: 'Программист',
            },
        ],
        keySkills: {
            header: "Библиотеки и фреймворки:",
            description: [
                "JavaScript",
                "TypeScript",
                "React",
                "Redux",
                "Mobx",
                "Zustand",
            ],
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