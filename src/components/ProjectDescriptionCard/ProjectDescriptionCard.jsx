import React from "react";
import {
    Avatar,
    Box,
    Card, CardActions,
    CardContent,
    CardHeader,
    CardMedia, Collapse,
    Link,
    ListItem, ListSubheader,
    Paper,
    Typography
} from "@material-ui/core";
import style from "./style.module.scss";
import List from "@material-ui/core/List";
import Rating from '@material-ui/lab/Rating';
import {makeStyles} from "@material-ui/core/styles";
import {green, red} from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
    BsDot,
    BsInfoCircle,
    FiSettings,
    GiAchievement,
    GiCheckMark,
    GiTimeTrap,
    IoEyeOutline,
    MdErrorOutline, TiInputCheckedOutline
} from "react-icons/all";

const useStyles = makeStyles(theme => ({
    projectLinks: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
    },
    projectLink: {
        width: "max-content",
        display: "flex",
        alignItems: "center",
    },
    projectLinkIcon: {
        marginRight: 6,
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
        "&:hover $visibleAndHiddenBlock": {
            visibility: "visible",
        },
    },
    visibleAndHiddenBlock: {
        visibility: "hidden",
        transition: "visibility 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        transitionDelay: "150ms",
    },
    projectTechnlologiesWrapper: {
        marginBottom: 10,
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
    projectDescriptionWrapper: {},
    characteristicsHeaderIcon: {
        fontSize: 20,
        marginRight: 10,
    },
    projectDescriptionTitleIcon: {
        fontSize: 20,
        marginRight: 10,
    },
    projectDescriptionTitle: {},
    projectDescription: {
        paddingLeft: 10,
    },
    characteristicsList: {
        margin: 0,
    },

    characteristicsHeaderText: {},
    characteristicsItem: {
        padding: 0,
    },

    characteristicsItemText: {},
}))


const ProjectDescriptionCard = (props) => {
    const classes = useStyles()
    const {project} = props


    return <>
        <Card className={classes.card}

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
                title={project.title}
                subheader={project.releaseDate || 'В разработке'}
            />
            <CardMedia
                className={classes.media}
                image="https://www.accenture.com/t00010101T000000Z__w__/de-de/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/Hero/9/Accenture-Industry-Best-in-Class-Project-Marquee.jpeg"
                title="Paella dish"
            />
            <CardContent classes={{root: classes.greedyCardContent}}>
                <Box classes={{root: classes.projectLinks}}>
                    <Link classes={{root: classes.projectLink}}>
                        <IoEyeOutline className={classes.projectLinkIcon}/>
                        <Typography href={project.demoLink} target={"_blank"}>демо</Typography>
                    </Link>
                    <Link classes={{root: classes.projectLink}}>
                        <FiSettings className={classes.projectLinkIcon}/>
                        <Typography href={project.projectLink} target={"_blank"}>код</Typography>
                    </Link>
                </Box>
                <Box borderColor="transparent">
                    <Rating name="read-only" value={project.rating} readOnly/>
                </Box>
                <Box classes={{root: classes.projectTechnlologiesWrapper}}>
                    <Typography>
                        {project.technologiesUsed.join(", ")}
                    </Typography>
                </Box>
                <Box className={classes.visibleAndHiddenBlock}>
                    <Box classes={{root: classes.projectDescriptionWrapper}}>
                        <Box display={"flex"} alignItems={"center"}>
                            <BsInfoCircle className={classes.projectDescriptionTitleIcon}/>
                            <Typography className={classes.projectDescriptionTitle}>Описание проекта</Typography>
                        </Box>
                        <Typography className={classes.projectDescription}>{project.description}</Typography>
                    </Box>
                    <Box>
                        <Box display={"flex"} alignItems={"center"}>
                            <GiAchievement className={classes.characteristicsHeaderIcon}/>
                            <Typography classes={{root: classes.characteristicsHeaderText}}>Преимущества</Typography>
                        </Box>
                        <ul className={classes.characteristicsList}
                        >
                            {project.benefits.map((advantage, index) => {
                                return <React.Fragment key={`advantage-${index}`}>
                                    <li classes={{root: classes.characteristicsItem}}>
                                        <Typography
                                            classes={{root: classes.characteristicsItemText}}>{advantage}</Typography>
                                    </li>
                                </React.Fragment>
                            })}
                        </ul>
                        <Box display={"flex"} alignItems={"center"}>
                            <MdErrorOutline className={classes.characteristicsHeaderIcon}/>
                            <Typography classes={{root: classes.characteristicsHeaderText}}>Недостатки</Typography>
                        </Box>
                        <ul className={classes.characteristicsList}
                        >
                            {project.limitations.map((flaw, index) => {
                                return <React.Fragment key={`flaw-${index}`}>
                                    <li classes={{root: classes.characteristicsItem}}>
                                        <Typography
                                            classes={{root: classes.characteristicsItemText}}>{flaw}</Typography>
                                    </li>
                                </React.Fragment>
                            })}
                        </ul>
                    </Box>
                </Box>
            </CardContent>

        </Card>
    </>
}


export default ProjectDescriptionCard;