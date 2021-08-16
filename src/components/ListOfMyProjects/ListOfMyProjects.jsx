import React, {useEffect} from "react";
import style from "./style.module.scss"
import {useTranslation} from "react-i18next";
import {Box, Link, ListItem, Paper, Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import storeFilterProjects from "../../store/storeFilterProjects";
import {observer} from "mobx-react";

const convertStringToDate = (date) => {
    if (String(date).split(".").length < 2) return Infinity
    date = String(date).split(".")
    const day = Number(date[0])
    const month = Number(date[1])
    const year = Number(date[2])
    date = new Date(year, month, day)
    return date
}


const sortProjects= (projects, sorting) => {
    let result = []
    const parameters = sorting.find(parameters => parameters.switched)
    if (!parameters) return projects
    console.log(parameters.name, parameters.switched, parameters.ascending)
    switch(parameters.name) {
        case 'sortByReleaseDate':
            result = projects.sort((previousProject, nextProject) => {
                if (parameters.ascending) {
                   return convertStringToDate(previousProject.releaseDate) - convertStringToDate(nextProject.releaseDate)
                }
                else {
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


const ListOfMyProjects = () => {
    const {t} = useTranslation();
    let projects = t('projects', {returnObjects: true});
    projects = sortProjects(projects, storeFilterProjects.sorting)

    // projects.forEach(project => {
    //     console.log(project.releaseDate)
    // })

    projects = projects.map((project, index) => {
        return <Box m={10} key={`project-${index}`} className={style.projectWrapper}>
            <Paper>
                <Typography>{project.title}</Typography>
                <Typography>{project.description}</Typography>
                <Typography>{project.releaseDate}</Typography>
                <List>
                    {project.technologiesUsed.map(technology => {
                        return <ListItem>
                            <Typography>
                                {technology}
                            </Typography>
                        </ListItem>
                    })}
                </List>
                <List>
                    <ListItem>
                        <Link href={project.demoLink} target={"_blank"}>Ссылка на демо</Link>
                    </ListItem>
                    <ListItem>
                        <Link href={project.projectLink} target={"_blank"}>Исходный код</Link>
                    </ListItem>
                </List>
                <List>
                    {project.screenshots.map(srcImg => {
                        <img src={srcImg} width={100} height={100}/>
                    })}
                </List>
                <Typography>{project.rating}</Typography>
            </Paper>
        </Box>
    })


    // projects.forEach(project => {
    // })
    return <Box display={"flex"} flexWrap={"wrap"}>

        {projects}
    </Box>
}

export default observer(ListOfMyProjects);