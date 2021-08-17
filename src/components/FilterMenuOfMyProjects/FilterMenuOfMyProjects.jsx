import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {useLocation} from "react-router-dom";
import storeFilterProjects from "../../store/storeFilterProjects";
import FilterByTechnology from "./FilterByTechnology";
import SortingElements from "./SortingElements";
import {Box, ListItem, ListSubheader, Paper} from "@material-ui/core";
import List from "@material-ui/core/List";
import style from "./style.module.scss";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    filtersContainer: {
        padding: 10
    },
    filtersAndSortingList: {
        display: "flex",
    },
    filtersAndSortingListItem: {
        width: "max-content",
        padding: 0,
        marginRight: 10,
    }
})

const FilterMenuOfMyProjects = () => {
    const classes = useStyles()
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

    return <>
        <Paper classes={{root: classes.filtersContainer}}>
            <Typography>Панель управления</Typography>
            <List className={classes.filtersAndSortingList}>
                <ListItem classes={{root: classes.filtersAndSortingListItem}}>
                    <SortingElements/>
                </ListItem>
                <ListItem classes={{root: classes.filtersAndSortingListItem}}>
                    <FilterByTechnology/>
                </ListItem>
            </List>
        </Paper>
    </>
}

export default observer(FilterMenuOfMyProjects);