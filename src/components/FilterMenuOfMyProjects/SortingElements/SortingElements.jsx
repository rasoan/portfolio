import React, {useState} from "react"
import {Button, ListItem} from "@material-ui/core";
import storeFilterProjects from "../../../store/storeFilterProjects";
import List from "@material-ui/core/List";
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

const useStyles = makeStyles(theme => ({
    sortIcon: {
        margin: theme.spacing(0, 1),
        color: theme.palette.primary.main
    },
    buttonMenuSort: {
        minWidth: 100,
        justifyContent: "left",
        padding: "6px 2px 4px 2px",
    },
    textButtonModal: {
        marginLeft: "auto",
        marginRight: "14px",
    }
}))

const SortingElements = () => {
    const classes = useStyles()
    const history = useHistory()
    const [textButtonModal, setTextButtonModal] = useState({text: "Включить сортировку", icon: Sort})

    const selectSorting = (sortByReleaseDate, sortByRating, content) => {
        setTextButtonModal(content)
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

        setAnchorEl(null)
    }

    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl);

    return <>
            <Button className={classes.buttonMenuSort}
                    aria-controls="fade-menu"
                    aria-haspopup="true"
                    variant="outlined"
                    color="primary"
                    onClick={(event) => setAnchorEl(event.currentTarget)}
            >
                <textButtonModal.icon className={classes.sortIcon} />
                <Typography color={"textPrimary"}
                            className={classes.textButtonModal}>
                    {textButtonModal.text}
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
                <MenuItem onClick={() => selectSorting("true", null, {text: "Дата", icon: ExpandMoreIcon})}>
                    <ExpandMoreIcon className={classes.sortIcon}/> Дата
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => selectSorting("false", null, {text: "Дата", icon: ExpandLessIcon})}>
                    <ExpandLessIcon className={classes.sortIcon}/> Дата
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => selectSorting(null, "true", {text: "Рейтинг", icon: ExpandMoreIcon})}>
                    <ExpandMoreIcon className={classes.sortIcon}/> Рейтинг
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => selectSorting(null, "false", {text: "Рейтинг", icon: ExpandLessIcon})}>
                    <ExpandLessIcon className={classes.sortIcon}/> Рейтинг
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => selectSorting(null, null, {text: "Включить сортировку", icon: Sort})}>
                    <ClearIcon className={classes.sortIcon}/> Выключить сортировку
                </MenuItem>
            </Menu>
    </>
}

export default SortingElements