import React from "react"
import {action, makeObservable, observable} from "mobx"


class storeModalWindow {
    isOpen
    content

    constructor() {
        this.isOpen = false
        this.content = null
        makeObservable(this, {
            isOpen: observable,
            content: observable,
            toggle: action,
            setContent: action,
        })
    }

    toggle = (flag = false) => {
        this.isOpen = flag
    }

    setContent = (content) => {
        this.content = content
    }
}

export default new storeModalWindow();