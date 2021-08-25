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
                description: "1993/03/21",
            },
            {
                header: "Тэлефон:",
                description: "+375 25 664 60 70",
            },
            {
                header: "Адрас пражывання",
                description: "г Мінск, вул Пляханава 52",
            },
            {
                header: "Стаўленне да палення:",
                description: "нейтральнае (не палю)",
            },
            {
                header: "Ці гатовы прыступіць да працы:",
                description: "адразу гатовы, пажадана пачаць з выдаленага варыянту, так як баюся страціць гэтую працу калі вас не задаволяць мае ўменні і навыкі, але разгледжу усе варыянты",
            },
            {
                header: "Жаданы ўзровень з.п .:",
                description: "Можна пачаць з 300 $",
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
                description: "30 хвілін, а наогул я жыву на сьёмной кватэры," +
                    "Што азначае, што зняць магу і бліжэй да працы," +
                    "Але ў прыярытэце у мяне месца працы побач з метро," +
                    "Але разгледжу ўсе варианнты.",
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
                    "Аматарскі спорт (бокс) з 2009 па 2015",
                    "Менеджэр па турызме з 2015 па 2016",
                    "Настаўнік фізкультуры з 2016 па 2019",
                    `Сістэмны адміністратар у інстытуце з 2019 па $ {new Date (). GetFullYear ()}`,
                ],
            },
            {
                header: "Пра мяне:",
                description: "Працавіты хлопец, вольны час праводжу за праектамі для партфоліо," +
                    "За месяц да сесіі 2 разы на год адхіляюся ад курсу і апускаюся ў вучобу," +
                    "Што б сесію здаць)" +
                    "Люблю спорт (баскетбол," +
                    "Валейбол, часам настольны тэніс).",
            },
        ],
        keySkills: [
            {
                header: "Мовы праграмавання",
                description: [ "HTML", "CSS / SCSS", "JavaScript"],
            },
            {
                header: "Бібліятэкі і фреймворка:",
                description: [ "Material ui", "Bootstrap", "Redux",
                    "Mobx", "Clsx", "Classes",
                    "React-hook-form", "Yup", "Jquery",
                    "I18next", "TypeScript"],
            },
            {
                header: "Графічныя рэдактары",
                description: [ "Adobe Photoshop", "Figma"],
            }
        ],
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
        },
    }
}

export default messagesBe;