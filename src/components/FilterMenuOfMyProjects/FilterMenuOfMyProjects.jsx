import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {useHistory, useLocation} from "react-router-dom";
import storeFilterProjects from "../../store/storeFilterProjects";

const FilterMenuOfMyProjects = () => {
    const search = useLocation().search
    const history = useHistory()
    const query = new URLSearchParams(search)


    const selectSorting = (sortByReleaseDate, sortByRating, showProjectsWithTechnologies=[]) => {
        const showProjectsWithTechnologiesUrl = showProjectsWithTechnologies.length > 0 ? `&showProjectsWithTechnologies=${showProjectsWithTechnologies}`: ""
        if (sortByReleaseDate) {
            history
                .push(
                    `?sortByReleaseDate=${sortByReleaseDate}${showProjectsWithTechnologiesUrl}`
                )
            storeFilterProjects.selectSorting("sortByReleaseDate", sortByReleaseDate, showProjectsWithTechnologies)
        } else if (sortByRating) {
            history
                .push(
                    `?sortByRating=${sortByRating}${showProjectsWithTechnologiesUrl}`
                )
            storeFilterProjects.selectSorting("sortByRating", sortByRating, showProjectsWithTechnologies)
        }
        else  {
            history
                .push(
                    `?${showProjectsWithTechnologiesUrl}`
                )
            storeFilterProjects.selectSorting(null, null, showProjectsWithTechnologies)
        }
    }

    useEffect(() => {
        if (query.get("sortByReleaseDate")) {
            storeFilterProjects.selectSorting("sortByReleaseDate", query.get("sortByReleaseDate"))
        } else if (query.get("sortByRating")) {
            storeFilterProjects.selectSorting("sortByRating", query.get("sortByRating"))
        }
        else {
            storeFilterProjects.selectSorting()
        }

        storeFilterProjects.manageShowProjectsWithTechnologies(query.get("showProjectsWithTechnologies"))
    }, [])


    return <div>
        <ul>
            <li>
                <button onClick={() => selectSorting("true", null)}>
                    Включить сортировку по дате (по возрастанию)
                </button>
            </li>
            <li>
                <button onClick={() => selectSorting("false", null)}>
                    Включить сортировку по дате (по убыванию)
                </button>
            </li>
            <li>
                <button onClick={() => selectSorting(null, "true")}>
                    Включить сортировку по рейтингу (по возрастанию)
                </button>
            </li>
            <li>
                <button onClick={() => selectSorting(null, "false")}>
                    Включить сортировку по рейтингу (по убыванию)
                </button>
            </li>
        </ul>
        фильтр
    </div>
}

export default observer(FilterMenuOfMyProjects);