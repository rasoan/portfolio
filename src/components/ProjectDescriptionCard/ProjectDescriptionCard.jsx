import React from "react";
import {
    Avatar,
    Box,
    Card, CardActions,
    CardContent,
    CardHeader,
    CardMedia, Collapse,
    Link,
    ListItem,
    Paper,
    Typography
} from "@material-ui/core";
import style from "../ListOfMyProjects/style.module.scss";
import List from "@material-ui/core/List";
import Rating from '@material-ui/lab/Rating';
import {makeStyles} from "@material-ui/core/styles";
import {green, red} from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {GiCheckMark, GiTimeTrap} from "react-icons/all";

const useStyles = makeStyles(theme => ({
    projectLinks: {
        display: "flex",
        width: "100%",
        height: "100%",
    },
    card: {
        zIndex: -1,
        overflow: "hidden",
        maxHeight: "100%",
        transition: theme.transitions.create('max-height', {
            duration: theme.transitions.duration.standard,
        }),
        "&:hover": {
            maxHeight: 800,
            cursor: "pointer",
            zIndex: 2,

        },
        "&:hover $projectDescription": {

        },
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    completedProjectAvatar: {
        backgroundColor: green[500],
    },
    unfinishedProjectAvatar: {
        backgroundColor: red[500],
    },
    greedyCardContent: {
        minHeight: 200,
    },
    collapseWrapper: {},
    collapse: {},
    projectDescription: {
        marginTop: 20,
    }
}))


function MoreVertIcon() {
    return null;
}

function FavoriteIcon() {
    return null;
}

function ShareIcon() {
    return null;
}


const ProjectDescriptionCard = (props) => {
    const classes = useStyles()
    const {project} = props


    const [expanded, setExpanded] = React.useState(false);


    return <>
        {/*<Box m={10} classes={{root: classes.wrapper}}>*/}
        {/*    <Paper>*/}
        {/*        <img*/}
        {/*            src={"https://www.accenture.com/t00010101T000000Z__w__/de-de/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/Hero/9/Accenture-Industry-Best-in-Class-Project-Marquee.jpeg"}*/}
        {/*            alt={"project"}*/}
        {/*            width="300"*/}
        {/*            height="200"*/}
        {/*            style={{objectFit: "contain"}}*/}
        {/*        />*/}
        {/*        <Typography>{project.title}</Typography>*/}
        {/*        <Typography variant={"h5"}>{project.releaseDate || "приложение в разработке"}</Typography>*/}

        {/*        */}
        {/*    </Paper>*/}
        {/*</Box>*/}


        <Card className={classes.card}
              onMouseOver={() => setExpanded(true)}
              onMouseLeave={() => setExpanded(false)}
        >
            <CardHeader
                avatar={
                    <Avatar
                        aria-label="recipe"
                        className={clsx({[classes.completedProjectAvatar]: !!project.releaseDate},
                            {[classes.unfinishedProjectAvatar]: !project.releaseDate})}>
                        {!!project.releaseDate ? <GiCheckMark/> : <GiTimeTrap/>}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={project.title}
                subheader={project.releaseDate || 'В разработке'}
            />
            <CardMedia
                className={classes.media}
                image="https://www.accenture.com/t00010101T000000Z__w__/de-de/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/Hero/9/Accenture-Industry-Best-in-Class-Project-Marquee.jpeg"
                title="Paella dish"
            />
            <CardContent classes={{root: classes.greedyCardContent}}>
                <Typography component="legend">Технологии</Typography>
                <Typography>
                    {project.technologiesUsed.join(", ")}
                </Typography>
                {/*<List>*/}
                {/*    {project.screenshots.map((srcImg, index) => {*/}
                {/*        return <React.Fragment key={`srcImg-${index}`}>*/}
                {/*            <img alt={"project"} src={srcImg} width={100} height={100}/>*/}
                {/*        </React.Fragment>*/}
                {/*    })}*/}
                {/*</List>*/}
                <Box borderColor="transparent">
                    <Typography component="legend">Рейтинг</Typography>
                    <Rating name="read-only" value={project.rating} readOnly/>
                </Box>
                <List classes={{root: classes.projectLinks}}>
                    <ListItem>
                        <Link href={project.demoLink} target={"_blank"}>Ссылка на демо</Link>
                    </ListItem>
                    <ListItem>
                        <Link href={project.projectLink} target={"_blank"}>Исходный код</Link>
                    </ListItem>
                </List>
                <Typography classes={{root: classes.projectDescription}}>{project.description}</Typography>
            </CardContent>

        </Card>
    </>
}


export default ProjectDescriptionCard;