import React from "react";
import {useTranslation} from "react-i18next";
import {Box, Link, ListItem, Paper, Typography} from "@material-ui/core";
import List from "@material-ui/core/List";

const ListOfMyProjects = () => {
    const {t} = useTranslation();
    let projects = t('projects', {returnObjects: true});
    projects = projects.map(project => {
        return <Box m={10}>
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
    return <Box>
        {projects}
    </Box>
}

export default ListOfMyProjects;