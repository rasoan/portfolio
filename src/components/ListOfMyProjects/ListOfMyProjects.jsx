import React from "react";
import {useTranslation} from "react-i18next";
import {Grid} from "@material-ui/core";
import storeFilterProjects from "../../store/storeFilterProjects";
import {observer} from "mobx-react";
import {filterProjects, sortProjects} from "../../additionalFunctions/additionalFunctions"
import ProjectDescriptionCard from "../ProjectDescriptionCard";
import {makeStyles} from "@material-ui/core/styles";
import MyModal from "../MyModal";

const useStyles = makeStyles(theme => ({
    list: {
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
}))

const ListOfMyProjects = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    let projects = t('projects', {returnObjects: true});
    projects = filterProjects(projects, storeFilterProjects.showProjectsWithTechnologies, storeFilterProjects.allProjectsWithTechnologies)
    projects = sortProjects(projects, storeFilterProjects.sorting)

    return <>
        <MyModal/>
        <Grid container
              xs={12}>
            {projects.map((project, index) => {
                return <React.Fragment key={`project-${index}`}>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        xl={4}
                        classes={{root: classes.list}}
                    >
                        <ProjectDescriptionCard project={project} />
                    </Grid>
                </React.Fragment>
            })}
        </Grid>
    </>
}

export default observer(ListOfMyProjects);