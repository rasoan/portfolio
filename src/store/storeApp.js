import React from "react"
import {action, makeAutoObservable, makeObservable, observable} from "mobx"
import i18next from "../translations/i18next";

class storeApp {
    navBar = false;
    language = i18next.language;

    constructor() {
        makeObservable(this, {
            navBar: observable,
            language: observable,
            toggleNavbar: action,
            changeLanguage: action,
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
}

export default new storeApp();