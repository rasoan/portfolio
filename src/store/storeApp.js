import React from "react"
import {action, makeAutoObservable, makeObservable, observable} from "mobx"
import i18next from "../translations/i18next";

class storeApp {
    navBar = false
    language = i18next.language
    darkMode = false

    constructor() {
        makeObservable(this, {
            navBar: observable,
            language: observable,
            darkMode: observable,
            toggleNavbar: action,
            changeLanguage: action,
            toggleDarkMode: action,
        })
    }

    toggleNavbar = (flag) => {
        if (typeof flag !== "undefined") {
            this.navBar = flag;
        }
        else {
            this.navBar = !this.navBar;
        }
    }

    changeLanguage = (language) => {
        i18next.changeLanguage(language.value, (err) => {
            if (err) return console.log("Ошибка, язык не переведён!");
            this.language = language;
        });
    }

    toggleDarkMode = () => {
        this.darkMode = !this.darkMode
        console.log(this.darkMode)
    }
}

export default new storeApp();