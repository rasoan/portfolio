export const convertStringToDate = (date) => {
    if (String(date).split(".").length < 2) return Infinity
    date = String(date).split(".")
    const day = Number(date[0])
    const month = Number(date[1])
    const year = Number(date[2])
    date = new Date(year, month, day)
    return date
}

export const filterProjects = (projects, showProjectsWithTechnologies, allProjectsWithTechnologies) => {
    let result = []
    if (showProjectsWithTechnologies.length === allProjectsWithTechnologies.length) return projects
    result = projects.filter(project => {
        let flag = false
        showProjectsWithTechnologies.forEach(technology => {
            if (project.technologiesUsed.find(projectTechnology => projectTechnology.toUpperCase() === technology.toUpperCase())) {
                flag = true
            }
        })
        return flag
    })
    return result
}

export const sortProjects = (projects, sorting) => {
    let result = []
    const parameters = sorting.find(parameters => parameters.switched)

    if (!parameters) {
        return projects.sort((previousProject, nextProject) => {
            return nextProject.rating - previousProject.rating;
        });
    }

    switch (parameters.name) {
        case 'sortByReleaseDate':
            result = projects.sort((previousProject, nextProject) => {
                if (parameters.ascending) {
                    if (!previousProject.releaseDate.done) {
                        return 1
                    } else if (!nextProject.releaseDate.done) {
                        return -1
                    }

                    return Date.parse(new Date(previousProject.releaseDate.date)) - Date.parse(new Date(nextProject.releaseDate.date))
                } else {
                    if (!previousProject.releaseDate.done) {
                        return -1
                    } else if (!nextProject.releaseDate.done) {
                        return 1
                    }
                    return Date.parse(new Date(nextProject.releaseDate.date)) - Date.parse(new Date(previousProject.releaseDate.date))
                }
            })
            return result
        case 'sortByRating':
            result = projects.sort((previousProject, nextProject) => {
                if (parameters.ascending) {
                    return previousProject.rating - nextProject.rating
                } else {
                    return nextProject.rating - previousProject.rating
                }
            })
            return result
    }
    return projects
}

export function getFullYears() {
    return new Date().getFullYear() - new Date('1993-03-21').getFullYear();
}