import React from "react";
import style from "./style.module.scss"
import {useTranslation} from "react-i18next";
import {Box, Button, Grid, Link, ListItem, Paper, Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import storeFilterProjects from "../../store/storeFilterProjects";
import {observer} from "mobx-react";
import {convertStringToDate} from "../../additionalFunctions/additionalFunctions"
import ProjectDescriptionCard from "../ProjectDescriptionCard";
import {makeStyles} from "@material-ui/core/styles";
import MyModal from "../MyModal";
import storeModalWindow from "../../store/storeModalWindow";

const useStyles = makeStyles(theme => ({
    listOfMyProjects: {
        margin: 0,
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1),
        },
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(1),
        },
        [theme.breakpoints.up('lg')]: {
            padding: theme.spacing(2),
        }
    },
    listOfMyProjectsItem: {}
}))

const sortProjects = (projects, sorting) => {
    let result = []
    const parameters = sorting.find(parameters => parameters.switched)
    if (!parameters) return projects
    switch (parameters.name) {
        case 'sortByReleaseDate':
            result = projects.sort((previousProject, nextProject) => {
                if (parameters.ascending) {
                    return convertStringToDate(previousProject.releaseDate) - convertStringToDate(nextProject.releaseDate)
                } else {
                    return convertStringToDate(nextProject.releaseDate) - convertStringToDate(previousProject.releaseDate)
                }
            })
            return result
        case 'sortByRating':
            result = projects.sort((previousProject, nextProject) => {
                if (parameters.ascending) {
                    return previousProject.rating - nextProject.rating
                } else {
                    return nextProject.rating - previousProject.rating
                }
            })
            return result
    }
    return projects
}

const filterProjects = (projects, showProjectsWithTechnologies) => {
    let result = []
    result = projects.filter(project => {
        let flag = false
        showProjectsWithTechnologies.forEach(technology => {
            if (project.technologiesUsed.find(projectTechnology => projectTechnology.toUpperCase() === technology.toUpperCase())) {
                flag = true
            }
        })
        return flag
    })
    return result
}

const ListOfMyProjects = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    let projects = t('projects', {returnObjects: true});
    projects = filterProjects(projects, storeFilterProjects.showProjectsWithTechnologies)
    projects = sortProjects(projects, storeFilterProjects.sorting)

    return <>
        <MyModal/>
        <Grid
            container
            xs={12}
        >
            {projects.map((project, index) => {
                return <React.Fragment key={`project-${index}`}>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        xl={4}
                        classes={{root: classes.listOfMyProjects}}
                    >
                        <ProjectDescriptionCard project={project}/>
                    </Grid>
                </React.Fragment>
            })}
        </Grid>
    </>
}

export default observer(ListOfMyProjects);