import React from "react"
import {action, makeObservable, observable} from "mobx"


class storeFilterProjects {
    sorting = [
        {
            name: "sortByReleaseDate",
            switched: false,
            ascending: false,
        },
        {
            name: "sortByRating",
            switched: false,
            ascending: false,
        },
    ]
    showProjectsWithTechnologies = []

    selectSorting = (name, ascending) => {
        this.sorting = this.sorting.map(element => {
            if (element.name === name) {
                return {
                    name: name,
                    switched: String(ascending).includes("true") || String(ascending).includes("false"),
                    ascending: String(ascending).includes("true"),
                }
            }

            return {
                ...element,
                switched: false,
                ascending: false,
            }
        })
    }

    manageShowProjectsWithTechnologies = (showProjectsWithTechnologies = []) => {
      this.showProjectsWithTechnologies = showProjectsWithTechnologies
    }

    constructor() {
        makeObservable(this, {
            sorting: observable,
            showProjectsWithTechnologies: observable,
            selectSorting: action,
            manageShowProjectsWithTechnologies: action,
        })
    }
}

export default new storeFilterProjects();