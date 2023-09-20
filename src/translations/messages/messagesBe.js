'use strict';

import {getFullYears} from "../../additionalFunctions/additionalFunctions";
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
            telegram: "telegram",
        },
        briefInformationAboutMe: {
            fullName: "Расаян Араик Джасмавiч",
            years: `${getFullYears()} гадоў`,
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
                description: "+375 29 684 90 05",
            },
            {
                header: "Адрас пражывання",
                description: "г. Мінск, Беларусь",
            },
            {
                header: "Стаўленне да палення:",
                description: "нейтральнае (не палю)",
            },
            {
                header: "Ці гатовы прыступіць да працы:",
                description: "цікавіць варыянт выдаленай працы",
            },
            {
                header: "Валодаю наступнымі мовамі:",
                columnDirection: false,
                description: [ "Рускі", 'Англійская - А1' ],
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
                description: "на бягучы момант шукаю адна сцёртая працу, рэлакацыя магчыма",
            },
            {
                header: "Вопыт працы праграмістам",
                description: "5 гадоў",
            },
            {
                header: "Адукацыя:",
                columnDirectionList: true,
                description: [
                    'БДУФК - спецыяльнасць "Менеджмент ў турызме" c 2011 г. па 2016',
                    `БНТУ - спецыяльнасць -" Праграмнае забеспячэнне інфармацыйных тэхналогій "c 2018 па 2023`,
                ],
            },
            {
                header: "Пра мяне:",
                description: 'Праграміст'
            },
        ],
        keySkills: {
            header: "Бібліятэкі і фреймворка:",
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