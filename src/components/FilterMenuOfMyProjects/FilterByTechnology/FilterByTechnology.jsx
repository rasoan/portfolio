import React, {useEffect} from "react";
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import storeFilterProjects from "../../../store/storeFilterProjects";
import {observer} from "mobx-react";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
    },
}));

const FilterByTechnology = () => {
    const classes = useStyles();
    const [listTechnologies, setListTechnologies] = React.useState(new Set(storeFilterProjects.showProjectsWithTechnologies));
    const history = useHistory()

    useEffect(() => {
        setListTechnologies(new Set(storeFilterProjects.showProjectsWithTechnologies))
    },[storeFilterProjects.showProjectsWithTechnologies])

    const handleChange = (event) => {
        if (event.target.checked) {
            setListTechnologies(prevState => {
                const newState = new Set(prevState)
                newState.add(event.target.name)
                return newState
            });
        }

        if (!event.target.checked) {
            setListTechnologies(prevState => {
                const newState = new Set(prevState)
                newState.delete(event.target.name)
                return newState
            });
        }
    };

    const selectTechnologies = () => {
        storeFilterProjects.manageShowProjectsWithTechnologies(Array.from(listTechnologies))
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
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Используемые технологии</FormLabel>
            <FormGroup>
                {["HTML", "SCSS", "JavaScript", "React", "Material-ui", "i18next", "TypeScript", "Bootstrap"].map((technology, index) => {
                    return <FormControlLabel
                        key={`${technology}-${index}`}
                        checked={listTechnologies.has(technology)}
                        control={<Checkbox onChange={handleChange} name={technology}/>}
                        label={technology}
                    />
                })}
            </FormGroup>
        </FormControl>
        <Button onClick={selectTechnologies}>Отфильтровать</Button>
    </>
}

export default observer(FilterByTechnology)