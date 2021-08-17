import React from "react"
import {Button, ListItem} from "@material-ui/core";
import storeFilterProjects from "../../../store/storeFilterProjects";
import List from "@material-ui/core/List";
import {useHistory} from "react-router-dom";

const SortingElements = () => {
    const history = useHistory()

    const selectSorting = (sortByReleaseDate, sortByRating) => {
        const showProjectsWithTechnologiesUrl = storeFilterProjects.showProjectsWithTechnologies.length > 0 ? `&showProjectsWithTechnologies=${storeFilterProjects.showProjectsWithTechnologies}` : ""
        if (sortByReleaseDate) {
            history.push(`?sortByReleaseDate=${sortByReleaseDate}${showProjectsWithTechnologiesUrl}`)
            storeFilterProjects.selectSorting("sortByReleaseDate", sortByReleaseDate)
        } else if (sortByRating) {
            history.push(`?sortByRating=${sortByRating}${showProjectsWithTechnologiesUrl}`)
            storeFilterProjects.selectSorting("sortByRating", sortByRating)
        } else {
            history.push(`?${showProjectsWithTechnologiesUrl}`)
            storeFilterProjects.selectSorting(null, null)
        }
    }

    return <List>
        <ListItem>
            <Button onClick={() => selectSorting("true", null)}>
                Дата (по возрастанию)
            </Button>
        </ListItem>
        <ListItem>
            <Button onClick={() => selectSorting("false", null)}>
                Дата (по убыванию)
            </Button>
        </ListItem>
        <ListItem>
            <Button onClick={() => selectSorting(null, "true")}>
                рейтинг (по возрастанию)
            </Button>
        </ListItem>
        <ListItem>
            <Button onClick={() => selectSorting(null, "false")}>
                рейтинг (по убыванию)
            </Button>
        </ListItem>
    </List>
}

export default SortingElements