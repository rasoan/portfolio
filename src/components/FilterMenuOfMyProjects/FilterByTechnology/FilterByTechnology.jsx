import React from "react";
import {
    Button,
    Checkbox,
    FormControlLabel,
    ListItem,
    Menu,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import storeFilterProjects from "../../../store/storeFilterProjects";
import {observer} from "mobx-react";
import {useHistory} from "react-router-dom";
import {FilterList} from "@material-ui/icons";
import clsx from "clsx";
import {BiReset, BsCheckAll} from "react-icons/all";
import {useTranslation} from "react-i18next";
import storeApp from "../../../store/storeApp";

const useStyles = makeStyles((theme) => ({
    darkMode: {
        color: props => props.darkMode ? theme.palette.common.white : theme.palette.primary.main
    },
    iconReset: {
        color: props => props.darkMode ? theme.palette.common.white : theme.palette.secondary.main
    },
    showModal: {
        justifyContent: "left",
        padding: "4px 2px",
        display: "flex",
    },
    showModalLabel: {
        marginLeft: "auto",
        marginRight: "14px",
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
    },
    showModalIcon: {
        margin: theme.spacing(0, 1),
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
    },
    menu: {
        paddingBottom: 8,
    },
    menuInteriorContainer: {
        maxWidth: 360,
        maxHeight: 450,
        display: "flex",
        flexWrap: "wrap",
        [theme.breakpoints.down('md')]: {
            maxWidth: 250,
            display: "block",
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: 200,
            maxHeight: 350,
        },
    },
    menuItem: {
        width: "50%",
        [theme.breakpoints.down('md')]: {
            width: "100%",
        },
    },
    menuItemBefore: {
        width: "100%",
        justifyContent: "center",
        [theme.breakpoints.down('md')]: {
            display: "block",
        },
    },
    option: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
    },
    checkBoxContainer: {
        width: "100%",
        margin: 0,
    },
    checkBoxLabel: {
        width: "100%",
        margin: 0,
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
    },
    checkBox: {
        color: theme.palette.success.light,
        '&$checked': {
            color: theme.palette.success.dark,
        },
    },
}))

const FilterByTechnology = () => {
    const {t} = useTranslation()
    const classes = useStyles({darkMode: storeApp.darkMode});
    const [anchorEl, setAnchorEl] = React.useState(null);
    const history = useHistory()
    const selectTechnologiesTest = (event) => {
        const newSet = new Set(storeFilterProjects.showProjectsWithTechnologies)

        if (event.target.checked) {
            newSet.add(event.target.name)
        } else {
            newSet.delete(event.target.name)
        }

        addTechnologies(Array.from(newSet))
    }
    const addTechnologies = (technologies) => {
        storeFilterProjects.manageShowProjectsWithTechnologies(technologies)
        const showProjectsWithTechnologiesUrl = storeFilterProjects.showProjectsWithTechnologies.length > 0 &&
        storeFilterProjects.showProjectsWithTechnologies.length !== storeFilterProjects.allProjectsWithTechnologies.length ?
            `&showProjectsWithTechnologies=${storeFilterProjects.showProjectsWithTechnologies}` : ""

        const sorting = storeFilterProjects.sorting.find(project => project.switched)

        if (sorting) {
            history.push(`?${sorting.name}=${sorting.ascending}${showProjectsWithTechnologiesUrl}`)
        } else {
            history.push(`?${showProjectsWithTechnologiesUrl}`)
        }
    }

    return <>
        <Button startIcon={<FilterList/>}
                variant="outlined"
                onClick={(event) => setAnchorEl(event.currentTarget)}
                classes={{
                    root: classes.showModal,
                    label: clsx(classes.showModalLabel, classes.darkMode),
                    startIcon: clsx(classes.showModalIcon, classes.darkMode),
                }}
        >
            {t('projectsPage.controlPanel.filter.buttonShowModal')}
        </Button>
        <Menu id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              classes={{
                  paper: classes.menu,
                  list: classes.menuInteriorContainer
              }}
        >
            <ListItem className={clsx(classes.menuItem, classes.menuItemBefore)}>
                <Button fullWidth
                        startIcon={<BiReset/>}
                        onClick={() => addTechnologies([])}
                        classes={{
                            root: classes.option,
                            startIcon: classes.iconReset,
                            label: classes.iconReset,
                        }}
                >
                    {t('projectsPage.controlPanel.filter.buttonReset')}
                </Button>
                <Button fullWidth
                        startIcon={<BsCheckAll/>}
                        onClick={() => addTechnologies(storeFilterProjects.allProjectsWithTechnologies)}
                        classes={{
                            root: classes.option,
                            startIcon: classes.darkMode,
                            label: classes.darkMode,
                        }}
                >
                    {t('projectsPage.controlPanel.filter.buttonSelectAll')}
                </Button>
            </ListItem>
            {storeFilterProjects.allProjectsWithTechnologies.map((technology, index) => {
                return <React.Fragment key={`technologyFilterCheckbox-${index}`}>
                    <ListItem className={classes.menuItem}>
                        <FormControlLabel
                            classes={{
                                root: classes.checkBoxContainer,
                                label: classes.checkBoxLabel
                            }}
                            checked={(new Set(storeFilterProjects.showProjectsWithTechnologies)).has(technology)}
                            control={<Checkbox color="default"
                                               classes={{root: classes.checkBox}}
                                               onChange={selectTechnologiesTest}
                                               name={technology}/>}
                            label={technology}
                        />
                    </ListItem>
                </React.Fragment>
            })}
        </Menu>
    </>
}

export default observer(FilterByTechnology)