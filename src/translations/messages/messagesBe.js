import projectsBe from "../messages/projects/projectsBe.json";

const messagesRu = {
    header: "Партфоліо",
    navigation: {
        profile: "Прафайл",
        projects: "Праекты"
    },
    date: '{{date}}',
    projects: projectsBe,
    socialMedia: {
        vkontakte: "вконтакте",
        instagram: "instagram",
        telegram: "telegram",
    },
    briefInformationAboutMe: {
        fullName: "Расоян Араик Джасмович",
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
            description: "г. Мінск, вул Пляханава 52",
        },
        {
            header: "Стаўленне да курэння:",
            description: "нейтральнае (не палю)",
        },
        {
            header: "Гатава прыступіць ды Працы:",
            description: "Пажадана пачаць з выдаленага варыянту, так як баюся страціць гэтую працу калі вас не задаволяць мае уменні і навыкі",
        },
        {
            header: "Жаданы ўзровень з.п .:",
            description: "Можна пачаць з 300$",
        },
        {
            header: "Валодаю наступнымі мовамі:",
            columnDirection: false,
            description: ["Рускі"],
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
                'Rolling-scopes-school - "Frontend распрацоўшчык" з 01.02.2019 па 08.01.2019',
            ],
        },
        {
            header: "Вопыт працы:",
            columnDirectionList: true,
            description: [
                "Аматарскі спорт (бокс) з 2009 па 2015",
                "Менеджэр па турызме з 2015 па 2016",
                "Настаўнік фізкультуры з 2016 па 2019",
                `Сістэмны адміністратар у інстытуце з 2019 па ${new Date().getFullYear()}`,
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
            description: ["HTML", "CSS/SCSS", "JavaScript"],
        },
        {
            header: "Бібліятэкі і фреймворка:",
            description: ["Material ui", "Bootstrap", "Redux",
                "Mobx", "Clsx", "Classes",
                "React-hook-form", "Yup", "Jquery",
                "i18next", "TypeScript"],
        },
        {
            header: "Графічныя рэдактары",
            description: ["Adobe Photoshop", "Figma"],
        }
    ],
}

export default messagesRu;