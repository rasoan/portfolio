import React from "react"
import {action, makeObservable, observable} from "mobx"
import projects from "../translations/messages/projects/projectsRu.json"

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

    allProjectsWithTechnologies = Array.from(new Set(projects.map(project => project.technologiesUsed).reduce((prev, next) => {
      return [...prev, ...next]
    }, [])))

    showProjectsWithTechnologies = this.allProjectsWithTechnologies

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

    manageShowProjectsWithTechnologies = (showProjectsWithTechnologies) => {
        if (typeof showProjectsWithTechnologies === "string") {
            this.showProjectsWithTechnologies = showProjectsWithTechnologies.split(",")
        } else {
            this.showProjectsWithTechnologies = showProjectsWithTechnologies || []
        }
    }

    resetFilterProjectsWithTechnologies = () => {
        this.showProjectsWithTechnologies = this.allProjectsWithTechnologies
    }

    clearFilterProjectsWithTechnologies = () => {
        this.showProjectsWithTechnologies.length = 0
    }




    constructor() {
        makeObservable(this, {
            allProjectsWithTechnologies: observable,
            sorting: observable,
            showProjectsWithTechnologies: observable,
            selectSorting: action,
            manageShowProjectsWithTechnologies: action,
            resetFilterProjectsWithTechnologies: action,
            clearFilterProjectsWithTechnologies: action,
        })
    }
}

export default new storeFilterProjects();