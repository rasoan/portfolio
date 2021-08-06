import React from "react"
import {makeAutoObservable} from "mobx"
import i18next from "../translations/i18next";
import languages from "../translations/languages/languages";

// Model the application state.
class storeApp {
    navBar = false;
    // language = window.localStorage.i18nextLng ? languages[window.localStorage.i18nextLng]: languages.be;
    language = i18next.language;

    constructor() {
        makeAutoObservable(this)
    }

    getNavBar() {
        return this.navBar;
    }

    toggle = (flag) => {
        if (typeof flag !== "undefined") {
            this.navBar = flag;
            console.log(this.navBar)
        }
        else {
            this.navBar = !this.navBar;
            console.log(this.navBar)
        }
    }

    getLanguage = () => {
        return this.language;
    }

    changeLanguage = (language) => {
        i18next.changeLanguage(language.value, (err) => {
            if (err) return console.log("Ошибка");
            this.language = language;
        });
    }
}

export default new storeApp();

/*
const myTimer = new Timer();

// Build a "user interface" that uses the observable state.


ReactDOM.render(<TimerView timer={myTimer} />, document.body)

// Update the 'Seconds passed: X' text every second.
setInterval(() => {
    myTimer.increase()
}, 1000)

 */