import React, {useEffect} from "react";
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    ListItem,
    Menu,
    MenuItem
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import storeFilterProjects from "../../../store/storeFilterProjects";
import {observer} from "mobx-react";
import {useHistory} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {FilterList} from "@material-ui/icons";
import clsx from "clsx";
import {BiReset, BsCheckAll} from "react-icons/all";
import {useTranslation} from "react-i18next";
import storeApp from "../../../store/storeApp";

const useStyles = makeStyles((theme) => ({
    menuTechnologiesPaper: {
        paddingBottom: 8,
    },
    icon: {
        color: props => props.darkMode ? theme.palette.common.white: theme.palette.primary.main
    },
    iconReset: {
        color: props => props.darkMode ? theme.palette.common.white: theme.palette.secondary.main
    },
    menuTechnologies: {
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
        // [theme.breakpoints.down('sm')]: {},
        // [theme.breakpoints.down('xs')]: {},
    },
    menuTechnologiesItem: {
        width: "50%",
        [theme.breakpoints.down('md')]: {
            width: "100%",
        },
    },
    menuTechnologiesLastItem: {
        width: "100%",
        justifyContent: "center",
        [theme.breakpoints.down('md')]: {
            display: "block",
        },
    },
    menuTechnologiesItemButton: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
    },
    menuTechnologiesItemLabelText: {
        width: "100%",
        margin: 0,
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
    },
    menuTechnologiesItemLabel: {
        width: "100%",
        margin: 0,
    },

    formControl: {
        margin: theme.spacing(3),
    },
    filterListIcon: {
        margin: theme.spacing(0, 1),
        color: theme.palette.success.main
    },
    filterByTechnologyButtonShowModalIcon: {
        margin: theme.spacing(0, 1),
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
    },
    buttonMenuSort: {
        width: "90%",
        justifyContent: "left",
        padding: "6px 2px 4px 2px",
        margin: "0 auto",
        display: "flex",
    },
    filterByTechnologyButtonShowModal: {
        justifyContent: "left",
        padding: "4px 2px",
        display: "flex",
    },
    filterByTechnologyButtonShowModalText: {
        marginLeft: "auto",
        marginRight: "14px",
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
    },
    textButtonFilter: {
        margin: "0 auto",
    },
    checkBox: {
        color: theme.palette.success.light,
        '&$checked': {
            color: theme.palette.success.dark,
        },
    }
}));

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
        <Button startIcon={<FilterList />}
            variant="outlined"
                classes={{
                    root: classes.filterByTechnologyButtonShowModal,
                    label: clsx(classes.filterByTechnologyButtonShowModalText, classes.icon),
                    startIcon: clsx(classes.filterByTechnologyButtonShowModalIcon, classes.icon),
                }}
                onClick={(event) => setAnchorEl(event.currentTarget)}>
                {t('projectsPage.controlPanel.filter.buttonShowModal')}
        </Button>
        <Menu
            classes={{
                paper: classes.menuTechnologiesPaper,
                list: classes.menuTechnologies
            }}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
        >
            <ListItem className={clsx(classes.menuTechnologiesItem, classes.menuTechnologiesLastItem)}>
                <Button classes={{
                    root: classes.menuTechnologiesItemButton,
                    startIcon: classes.iconReset,
                    label: classes.iconReset,
                }}
                        fullWidth
                        startIcon={<BiReset/>}
                        onClick={() => addTechnologies([])}>
                    {t('projectsPage.controlPanel.filter.buttonReset')}
                </Button>
                <Button classes={{
                            root: classes.menuTechnologiesItemButton,
                            startIcon: classes.icon,
                            label: classes.icon,
                        }}
                        fullWidth
                        startIcon={<BsCheckAll/>}
                        onClick={() => addTechnologies(storeFilterProjects.allProjectsWithTechnologies)}>
                    {t('projectsPage.controlPanel.filter.buttonSelectAll')}
                </Button>

            </ListItem>
            {storeFilterProjects.allProjectsWithTechnologies.map((technology, index) => {
                return <React.Fragment key={`technologyFilterCheckbox-${index}`}>
                    <ListItem className={classes.menuTechnologiesItem}>
                        <FormControlLabel
                            classes={{
                                root: classes.menuTechnologiesItemLabel,
                                label: classes.menuTechnologiesItemLabelText
                            }}
                            key={`${technology}-${index}`}
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