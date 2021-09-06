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
                description: "03.21.1993",
            },
            {
                header: "Phone:",
                description: "+375 25 664 60 70",
            },
            {
                header: "Address of residence",
                description: "Bobruisk, Uritskogo street 7",
            },
            {
                header: "Smoking habits:",
                description: "neutral (do not smoke)",
            },
            {
                header: "Ready to get started:",
                description: "ready right away, preferably starting with the remote version, but I will consider all the options",
            },
            {
                header: "Desired salary level:",
                description: "I am ready to work for free the first time",
            },
            {
                header: "I speak these languages:",
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
                description: "currently looking for a remote job",
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
                    "I worked in a team on commercial projects for 2 months",
                    `system administrator at the institute from 2019 to ${new Date().getFullYear()}`,
                ],
            },
            {
                header: "About me:",
                description: "Programming day and night," +
                    "I love sports and enjoy the results of my work"
            },
        ],
        keySkills: {
            header: "Libraries and frameworks:",
            description: ["Material ui", "Bootstrap", "Redux",
                "Mobx", "Clsx", "Classes",
                "React-hook-form", "Yup", "Jquery",
                "i18next", "TypeScript"],
        },
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
            moreDetails: "more details",
        },
    }
}

export default messagesEn;