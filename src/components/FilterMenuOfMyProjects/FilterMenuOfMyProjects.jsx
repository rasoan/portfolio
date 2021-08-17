import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {useLocation} from "react-router-dom";
import storeFilterProjects from "../../store/storeFilterProjects";
import FilterByTechnology from "./FilterByTechnology";
import SortingElements from "./SortingElements";


const FilterMenuOfMyProjects = () => {
    const search = useLocation().search
    const query = new URLSearchParams(search)

    useEffect(() => {
        const sortByReleaseDate = query.get("sortByReleaseDate")
        const sortByRating = query.get("sortByRating")
        const showProjectsWithTechnologies = query.get("showProjectsWithTechnologies")
        const defaultShowProjectsWithTechnologies = ["HTML", "SCSS", "JavaScript", "React", "Material-ui", "i18next", "TypeScript", "Bootstrap"].join()

        if (sortByReleaseDate) {
            storeFilterProjects.selectSorting("sortByReleaseDate", sortByReleaseDate)
        } else if (sortByRating) {
            storeFilterProjects.selectSorting("sortByRating", sortByRating)
        } else {
            storeFilterProjects.selectSorting()
        }

        if (showProjectsWithTechnologies) {
            storeFilterProjects.manageShowProjectsWithTechnologies(showProjectsWithTechnologies)
        } else {
            storeFilterProjects.manageShowProjectsWithTechnologies(defaultShowProjectsWithTechnologies)
        }
    }, [])

    return <div>
        <SortingElements/>
        <FilterByTechnology/>
    </div>
}

export default observer(FilterMenuOfMyProjects);