import React, {useState} from "react"
import {Button} from "@material-ui/core";
import storeFilterProjects from "../../../store/storeFilterProjects";
import {useHistory} from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ClearIcon from '@material-ui/icons/Clear';
import {Sort} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles(theme => ({
    sortIcon: {
        margin: theme.spacing(0, 1),
        color: theme.palette.primary.main
    },
    buttonShowModal: {
        minWidth: 100,
        justifyContent: "left",
        padding: "6px 2px 4px 2px",
    },
    buttonShowModalText: {
        marginLeft: "auto",
        marginRight: "14px",
        [theme.breakpoints.down('xs')]: {
          fontSize: 12,
        },
    },
    buttonShowModalIcon: {
        margin: theme.spacing(0, 1),
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
    },
    menuSortItem: {
        [theme.breakpoints.down('xs')]: {
            minHeight: "unset",
        },
    },
    menuSortItemText: {
        fontSize: 16,
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
    },
}))

const SortingElements = () => {
    const {t} = useTranslation()
    const classes = useStyles()
    const history = useHistory()

    const selectSorting = (sortByReleaseDate, sortByRating) => {
        const showProjectsWithTechnologiesUrl = storeFilterProjects.showProjectsWithTechnologies.length > 0 &&
            storeFilterProjects.showProjectsWithTechnologies.length !== storeFilterProjects.allProjectsWithTechnologies.length ?
            `&showProjectsWithTechnologies=${storeFilterProjects.showProjectsWithTechnologies}` : ""
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

        setAnchorEl(null)
    }

    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl);

    return <>
            <Button startIcon={<Sort className={classes.buttonShowModalIcon} />}
                className={classes.buttonShowModal}
                    aria-controls="fade-menu"
                    aria-haspopup="true"
                    variant="outlined"
                    color="primary"
                    onClick={(event) => setAnchorEl(event.currentTarget)}
            >

                <Typography color={"textPrimary"}
                            className={classes.buttonShowModalText}>
                    {t('projectsPage.controlPanel.sort.buttonShowModal')}
                </Typography>
            </Button>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={() => setAnchorEl(null)}
                TransitionComponent={Fade}
            >
                <MenuItem className={classes.menuSortItem}
                    onClick={() => selectSorting("true", null)}>
                    <ExpandMoreIcon className={classes.sortIcon}/>
                    <Typography className={classes.menuSortItemText}>
                        {t('projectsPage.controlPanel.sort.sortingCategories.date')}
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem className={classes.menuSortItem}
                          onClick={() => selectSorting("false", null)}>
                    <ExpandLessIcon className={classes.sortIcon}/>
                    <Typography className={classes.menuSortItemText}>
                        {t('projectsPage.controlPanel.sort.sortingCategories.date')}
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem className={classes.menuSortItem}
                          onClick={() => selectSorting(null, "true")}>
                    <ExpandMoreIcon className={classes.sortIcon}/>
                    <Typography className={classes.menuSortItemText}>
                        {t('projectsPage.controlPanel.sort.sortingCategories.rating')}
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem className={classes.menuSortItem}
                    onClick={() => selectSorting(null, "false")}>
                    <ExpandLessIcon className={classes.sortIcon}/>
                    <Typography className={classes.menuSortItemText}>
                        {t('projectsPage.controlPanel.sort.sortingCategories.rating')}
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem className={classes.menuSortItem}
                    onClick={() => selectSorting(null, null)}>
                    <ClearIcon className={classes.sortIcon}/>
                    <Typography className={classes.menuSortItemText}>
                        {t('projectsPage.controlPanel.sort.sortingCategories.reset')}
                    </Typography>
                </MenuItem>
            </Menu>
    </>
}

export default SortingElements