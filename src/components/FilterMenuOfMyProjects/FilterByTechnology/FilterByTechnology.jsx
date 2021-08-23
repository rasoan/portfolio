import React, {useEffect} from "react";
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Menu, MenuItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import storeFilterProjects from "../../../store/storeFilterProjects";
import {observer} from "mobx-react";
import {useHistory} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {DoneAll, FilterList} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    menu: {
        paddingBottom: 8,
    },
    formControl: {
        margin: theme.spacing(3),
    },
    filterListIcon: {
        margin: theme.spacing(0, 1),
        color: theme.palette.success.main
    },
    iconButtonModal: {
        margin: theme.spacing(0, 1),
        color: theme.palette.primary.main,
    },
    buttonMenuSort: {
        width: "90%",
        justifyContent: "left",
        padding: "6px 2px 4px 2px",
        margin: "0 auto",
        display: "flex",
    },
    buttonMenuModal: {
        justifyContent: "left",
        padding: "4px 2px",
        display: "flex",
    },
    textButtonModal: {
        marginLeft: "auto",
        marginRight: "14px",
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
    const classes = useStyles();
    // const [listTechnologies, setListTechnologies] = React.useState(new Set(storeFilterProjects.showProjectsWithTechnologies));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const history = useHistory()

    // useEffect(() => {
    //     setListTechnologies(new Set(storeFilterProjects.showProjectsWithTechnologies))
    // }, [storeFilterProjects.showProjectsWithTechnologies])

    // const handleChange = (event) => { // выбрал чекбокс
    //     if (event.target.checked) {
    //         setListTechnologies(prevState => {
    //             const newState = new Set(prevState)
    //             newState.add(event.target.name)
    //             return newState
    //         });
    //     }
    //
    //     if (!event.target.checked) {
    //         setListTechnologies(prevState => {
    //             const newState = new Set(prevState)
    //             newState.delete(event.target.name)
    //             return newState
    //         });
    //     }
    // };

    // const selectTechnologies = () => {// клик по кнопке
    //     storeFilterProjects.manageShowProjectsWithTechnologies(Array.from(listTechnologies))
    //     const showProjectsWithTechnologiesUrl = storeFilterProjects.showProjectsWithTechnologies.length > 0 ?
    //         `&showProjectsWithTechnologies=${storeFilterProjects.showProjectsWithTechnologies}` : ""
    //     const sorting = storeFilterProjects.sorting.find(project => project.switched)
    //     if (sorting) {
    //         history.push(`?${sorting.name}=${sorting.ascending}${showProjectsWithTechnologiesUrl}`)
    //     } else {
    //         history.push(`?${showProjectsWithTechnologiesUrl}`)
    //     }
    //
    //     setAnchorEl(null)
    // }

    const selectTechnologiesTest = (event) => {
        const newSet = new Set(storeFilterProjects.showProjectsWithTechnologies)

        if (event.target.checked) {
            newSet.add(event.target.name)
        } else {
            newSet.delete(event.target.name)
        }

        addTechnologies(Array.from(newSet))


        // storeFilterProjects.showProjectsWithTechnologies
        // storeFilterProjects.manageShowProjectsWithTechnologies(Array.from())
        // event.target.checked
        // event.target.name
    }

    const addTechnologies = (technologies) => {
        storeFilterProjects.manageShowProjectsWithTechnologies(technologies)
        const showProjectsWithTechnologiesUrl = storeFilterProjects.showProjectsWithTechnologies.length > 0 ?
            `&showProjectsWithTechnologies=${storeFilterProjects.showProjectsWithTechnologies}` : ""

        const sorting = storeFilterProjects.sorting.find(project => project.switched)

        if (sorting) {
            history.push(`?${sorting.name}=${sorting.ascending}${showProjectsWithTechnologiesUrl}`)
        } else {
            history.push(`?${showProjectsWithTechnologiesUrl}`)
        }


    }

    return <>


        <Button variant="outlined"
                color="primary"
                className={classes.buttonMenuModal}
                onClick={(event) => setAnchorEl(event.currentTarget)}>
            <FilterList className={classes.iconButtonModal}/>
            <Typography color={"textPrimary"} className={classes.textButtonModal}>Фильтр</Typography>
        </Button>
        <Menu
            classes={{paper: classes.menu}}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Используемые технологии</FormLabel>
                <FormGroup>
                    {["HTML", "SCSS", "JavaScript", "React", "Material-ui", "i18next", "TypeScript", "Bootstrap"].map((technology, index) => {
                        return <FormControlLabel
                            key={`${technology}-${index}`}
                            checked={(new Set(storeFilterProjects.showProjectsWithTechnologies)).has(technology)}
                            control={<Checkbox color="default" classes={{root: classes.checkBox}}
                                               onChange={selectTechnologiesTest} name={technology}/>}
                            label={technology}
                        />
                    })}
                </FormGroup>
                <Button color="secondary" onClick={() => addTechnologies([])}>
                    Сброс
                </Button>
                <Button color="primary"
                        onClick={() => addTechnologies(["HTML", "SCSS", "JavaScript", "React", "Material-ui", "i18next", "TypeScript", "Bootstrap"])}>
                    Выбрать всё
                </Button>
            </FormControl>
        </Menu>

    </>
}

export default observer(FilterByTechnology)