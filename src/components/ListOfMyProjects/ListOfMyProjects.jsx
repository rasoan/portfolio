import React from "react";
import style from "./style.module.scss"
import {useTranslation} from "react-i18next";
import {Box, Link, ListItem, Paper, Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import storeFilterProjects from "../../store/storeFilterProjects";
import {observer} from "mobx-react";
import {convertStringToDate} from "../../additionalFunctions/additionalFunctions"
// const convertStringToDate = (date) => {
//     if (String(date).split(".").length < 2) return Infinity
//     date = String(date).split(".")
//     const day = Number(date[0])
//     const month = Number(date[1])
//     const year = Number(date[2])
//     date = new Date(year, month, day)
//     return date
// }

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

    const {t} = useTranslation();
    let projects = t('projects', {returnObjects: true});
    projects = filterProjects(projects, storeFilterProjects.showProjectsWithTechnologies)
    projects = sortProjects(projects, storeFilterProjects.sorting)

    console.log("--------------------------------------")
    console.log("--------------------------------------")
    console.log("--------------------------------------")
    projects = projects.map((project, index) => {
        console.log("Дата выпуска ", project.releaseDate, ", рейтинг ", project.rating)
        return <React.Fragment key={`project-${index}`}>
            <Box m={10} className={style.projectWrapper}>
                <Paper>
                    <Typography>{project.title}</Typography>
                    <Typography>{project.description}</Typography>
                    <Typography variant={"h5"}>{project.releaseDate || "приложение в разработке"}</Typography>
                    <List>
                        {project.technologiesUsed.map((technology, index) => {
                            return <React.Fragment key={`${technology}-${index}`}>
                                <ListItem>
                                    <Typography>
                                        {technology}
                                    </Typography>
                                </ListItem>
                            </React.Fragment>
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
                        {project.screenshots.map((srcImg, index) => {
                            return <React.Fragment key={`srcImg-${index}`}>
                                <img alt={"project"} src={srcImg} width={100} height={100}/>
                            </React.Fragment>
                        })}
                    </List>
                    <Typography variant={"h5"}>{project.rating}</Typography>
                </Paper>
            </Box>
        </React.Fragment>
    })

    return <Box display={"flex"} flexWrap={"wrap"}>
        {projects}
    </Box>
}

export default observer(ListOfMyProjects);