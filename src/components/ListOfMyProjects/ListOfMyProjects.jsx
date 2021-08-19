import React from "react";
import style from "./style.module.scss"
import {useTranslation} from "react-i18next";
import {Box, Grid, Link, ListItem, Paper, Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import storeFilterProjects from "../../store/storeFilterProjects";
import {observer} from "mobx-react";
import {convertStringToDate} from "../../additionalFunctions/additionalFunctions"
import ProjectDescriptionCard from "../ProjectDescriptionCard";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    listOfMyProjects: {
        margin: 0,
        padding: theme.spacing(3, 0, 25, 0),
        "& $Item": {
            maxWidth: 330,
        },
    },
    listOfMyProjectsItem: {
        position: "relative",
        overflow: "visible",
        marginBottom: theme.spacing(4),
        "&:hover": {
            zIndex: 1,
        },
        [theme.breakpoints.down('xs')]: {
            height: 460,
        },
        [theme.breakpoints.up('sm')]: {
            height: 460,
        },
        [theme.breakpoints.up('md')]: {
            height: 380,
        },
        [theme.breakpoints.up('lg')]: {
            height: 380,
        },
        [theme.breakpoints.up('xl')]: {
            height: 400,
        },
    }
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
        <Grid classes={{root: classes.listOfMyProjects}}
              container
              xs={12}
              spacing={2}
        >
            {projects.map((project, index) => {
                return <React.Fragment key={`project-${index}`}>
                    <Grid classes={{root: classes.listOfMyProjectsItem}}
                          item
                          xs={12}
                          sm={12}
                          md={6}
                          lg={4}
                          xl={4}
                    >
                        <ProjectDescriptionCard project={project}/>
                    </Grid>
                </React.Fragment>
            })}
        </Grid>
    </>
}

export default observer(ListOfMyProjects);