import React from "react"
import ReactDOM from "react-dom"
import {action, makeAutoObservable, observable, makeObservable} from "mobx"
import { observer } from "mobx-react";

// Model the application state.
class storeApp {
    navBar = false;

    constructor() {
        makeAutoObservable(this)
    }

    getNavBar() {
        return this.navBar;
    }

    toggle = (flag) => {
        console.log(flag);
        if (typeof flag !== "undefined") {
            this.navBar = flag;
        }
        else {
            this.navBar = !this.navBar;
        }
    }
}

export default new storeApp();

/*
const myTimer = new Timer();

// Build a "user interface" that uses the observable state.
const TimerView = observer(({ timer }) => (
    <button onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
))

ReactDOM.render(<TimerView timer={myTimer} />, document.body)

// Update the 'Seconds passed: X' text every second.
setInterval(() => {
    myTimer.increase()
}, 1000)

 */