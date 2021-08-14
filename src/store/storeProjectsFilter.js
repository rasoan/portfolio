import React from "react"
import {action, makeObservable, observable} from "mobx"

class storeProjectsFilter {
    sortByReleaseDate = {
        flag: false,
        sortAscending: false,
    }

    setSortByReleaseDate = (flag, sortAscending) => {
        this.sortByReleaseDate = {
            flag,
            sortAscending,
        }
    }

    sortByRating = {
        flag: false,
        sortAscending: false,
    }

    setSortByRating = (flag, sortByRating) => {
        this.sortByRating = {
            flag,
            sortByRating,
        }
    }

    showProjectsWithTechnologies = {
        flag: false,
        listOfSelectedTechnologies: [],
    }

    setShowProjectsWithTechnologies = (flag, listOfSelectedTechnologies) => {
        this.showProjectsWithTechnologies = {
            flag,
            listOfSelectedTechnologies,
        }
    }

    constructor() {
        makeObservable(this, {
            sortByReleaseDate: observable,
            setSortByReleaseDate: action,
            sortByRating: observable,
            setSortByRating: action,
            showProjectsWithTechnologies: observable,
            setShowProjectsWithTechnologies: action,
        })
    }
}

export default new storeProjectsFilter();