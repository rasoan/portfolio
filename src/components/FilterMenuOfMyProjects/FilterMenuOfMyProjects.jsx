import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {useLocation} from "react-router-dom";
import storeFilterProjects from "../../store/storeFilterProjects";
import FilterByTechnology from "./FilterByTechnology";
import SortingElements from "./SortingElements";
import {ListItem} from "@material-ui/core";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    list: {
        display: "flex",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center"
        },
    },
    listItem: {
        width: "max-content",
        padding: 0,
        marginRight: 20,
        [theme.breakpoints.down('xs')]: {
            marginRight: 5,
            paddingBottom: 0,
        }
    }
}))

const FilterMenuOfMyProjects = () => {
    const classes = useStyles()
    const search = useLocation().search
    const query = new URLSearchParams(search)

    useEffect(() => {
        const sortByReleaseDate = query.get("sortByReleaseDate")
        const sortByRating = query.get("sortByRating")
        const showProjectsWithTechnologies = query.get("showProjectsWithTechnologies")

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
            storeFilterProjects.resetFilterProjectsWithTechnologies()
        }
    }, [])

    return <>
            <List classes={{root: classes.list}}>
                <ListItem classes={{root: classes.listItem}}>
                    <SortingElements/>
                </ListItem>
                <ListItem classes={{root: classes.listItem}}>
                    <FilterByTechnology/>
                </ListItem>
            </List>
    </>
}

export default observer(FilterMenuOfMyProjects)