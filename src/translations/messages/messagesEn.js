import projectsEn from "./projects/projectsEn.json";

const messagesEn = {
    header: "Portfolio",
    navigation: {
        profile: "Profile",
        projects: "Projects"
    },
    date: '{{date}}',
    projects: projectsEn,
    profilePage: {
        socialMedia: {
            vkontakte: "vkontakte",
            instagram: "instagram",
            telegram: "telegram",
        },
        briefInformationAboutMe: {
            fullName: "Rasoyan Arayik Jasmovich",
            years: "28 years old",
        },
        essentialInformationAboutMe: [
            {
                header: "Gender:",
                description: "male",
            },
            {
                header: "Date of birth:",
                description: "03/21/1993",
            },
            {
                header: "Phone:",
                description: "+375 25 664 60 70",
            },
            {
                header: "Address of residence",
                description: "Minsk, Plekhanov st. 52",
            },
            {
                header: "Smoking habits:",
                description: "neutral (do not smoke)",
            },
            {
                header: "Ready to get started:",
                description: "I'm ready right away, it is advisable to start with the remote version, as I am afraid of losing this job if you are not satisfied with my skills and abilities, but I will consider all the options",
            },
            {
                header: "Desired salary level:",
                description: "You can start with $ 300",
            },
            {
                header: "I speak the following languages:",
                columnDirection: false,
                description: ["Russian"],
            },
            {
                header: "Citizenship:",
                description: "Belarus",
            },
            {
                header: "Work permit:",
                description: "Belarus",
            },
            {
                header: "Desired travel time to work:",
                description: "30 minutes, but in general I live in a rented apartment," +
                    "which means that I can take pictures and get closer to work," +
                    "but my priority is a place of work near the metro," +
                    "but I will consider all the options.",
            },
            {
                header: "Education:",
                columnDirectionList: true,
                description: [
                    'BSUFK (in absentia) - specialty "Management in Tourism" from 2011 to 2016',
                    `BNTU (in absentia) - specialty -" Information technology software "from 2018 to 2023`,
                    'Rolling-scopes-school - "Frontend developer" from 01.02.2019 to 01.08.2019',
                ],
            },
            {
                header: "Work experience:",
                columnDirectionList: true,
                description: [
                    "Amateur sports (boxing) from 2009 to 2015",
                    "tourism manager from 2015 to 2016",
                    "physical education teacher from 2016 to 2019",
                    `system administrator at the institute from 2019 to $ {new Date (). getFullYear ()}`,
                ],
            },
            {
                header: "About me:",
                description: "A hardworking guy, I spend my free time on portfolio projects," +
                    "a month before the session, 2 times a year I deviate from the course and immerse myself in studies," +
                    "to pass the session)" +
                    "I love sports (basketball," +
                    "volleyball, sometimes table tennis).",
            },
        ],
        keySkills: [
            {
                header: "Programming languages",
                description: ["HTML", "CSS / SCSS", "JavaScript"],
            },
            {
                header: "Libraries and frameworks:",
                description: ["Material ui", "Bootstrap", "Redux",
                    "Mobx", "Clsx", "Classes",
                    "React-hook-form", "Yup", "Jquery",
                    "i18next", "TypeScript"],
            },
            {
                header: "Graphic Editors",
                description: ["Adobe Photoshop", "Figma"],
            }
        ],
    },
    projectsPage: {
        controlPanel: {
            sort: {
                buttonShowModal: "Sort",
                sortingCategories: {
                    date: "Date",
                    rating: "Rating",
                    reset: "Disable sorting"
                },
            },
            filter: {
                buttonShowModal: "Filter",
                buttonReset: "Reset All",
                buttonSelectAll: "Select All",
            },
        },
        cardProject: {
            linkDemo: "Demo",
            linkCode: "Code",
        },
    }
}

export default messagesEn;