import projectsEn from "./projects/projectsEn.json";

const messagesEn = {
    header: "Portfolio",
    navigation: {
        profile: "Profile",
        projects: "Projects"
    },
    date: '{{date}}',
    projects: projectsEn,
    socialMedia: {
        vkontakte: "vkontakte",
        instagram: "instagram",
        telegram: "telegram",
    },
    briefInformationAboutMe: {
        fullName: "Rasoyan Arayik Jasmovich",
        years: "28 years",
    },
    essentialInformationAboutMe: [
        {
            header: "Male:",
            description: "man",
        },
        {
            header: "Date of Birth:",
            description: "21.03.1993",
        },
        {
            header: "Phone number:",
            description: "+375 25 664 60 70",
        },
        {
            header: "Residence address",
            description: "Minsk, Plekhanov str. 52",
        },
        {
            header: "Attitude towards smoking:",
            description: "neutral (do not smoke)",
        },
        {
            header: "Ready to get started:",
            description: "it is advisable to start with a remote version, as I am afraid of losing this job if you are not satisfied with my skills and abilities",
        },
        {
            header: "Желаемый уровень з.п.:",
            description: "You can start with 300$",
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
            description: "A hardworking guy, I spend my free time on projects for a portfolio," +
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
            description: ["Material ui", "Bootstrap", "Redux", "Mobx", "Clsx", "Classes", "React-hook-form", "Yup", "Jquery"],
        },
        {
            header: "Graphic editor",
            description: ["Adobe Photoshop", "Figma"],
        }
    ],
}

export default messagesEn;