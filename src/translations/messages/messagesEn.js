'use strict';

import {getFullYears} from "../../additionalFunctions/additionalFunctions";
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
            telegram: "telegram",
        },
        briefInformationAboutMe: {
            fullName: "Rasoyan Arayik Jasmovich",
            years: `${getFullYears()} years old`,
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
                description: "+375 29 684 90 05",
            },
            {
                header: "Address of residence",
                description: "Minsk, Belarus",
            },
            {
                header: "Smoking habits:",
                description: "neutral (do not smoke)",
            },
            {
                header: "Ready to get started:",
                description: "interested in remote work option?",
            },
            {
                header: "I speak these languages:",
                columnDirection: false,
                description: ["Russian", 'English - A1', ],
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
                description: "currently looking for a remote job, relocation possible",
            },
            {
                header: "Experience as a programmer",
                description: "5 years",
            },
            {
                header: "Education:",
                columnDirectionList: true,
                description: [
                    'BSUFK - specialty "Management in Tourism" from 2011 to 2016',
                    `BNTU - specialty -" Information technology software "from 2018 to 2023`,
                ],
            },
            {
                header: "About me:",
                description: 'Programmer'
            },
        ],
        keySkills: {
            header: "Libraries and frameworks:",
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