import React, {useEffect, useRef, useState} from "react";
import {
    Avatar,
    Box, Button,
    Card, CardActionArea, CardActions,
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
    BiAtom,
    BsDot,
    BsInfoCircle,
    FiSettings,
    GiAchievement,
    GiCheckMark,
    GiTimeTrap,
    IoEyeOutline,
    MdErrorOutline, SiFurrynetwork, TiDocumentText, TiInputCheckedOutline
} from "react-icons/all";
import MyModal from "../MyModal";
import storeModalWindow from "../../store/storeModalWindow";
import {useTranslation} from "react-i18next";
import storeApp from "../../store/storeApp";
import {observer} from "mobx-react";

const useStyles = makeStyles(theme => ({
    cardHeaderContent: {
        fontSize: 30,
        overflow: "hidden",
        whiteSpace: "nowrap",
    },
    cardHeaderTittle: {
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    projectAvatarCompleted: {
        backgroundColor: green[500],
    },
    projectAvatarUnfinished: {
        backgroundColor: red[500],
    },



    projectLinks: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
    },
    icon: {
        color: props => props.darkMode ? theme.palette.common.white : theme.palette.primary.main
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
        "&:hover": {
            cursor: "pointer",
        }
    },
    cardModal: {
        overflowY: "scroll",
        width: "50vw",
        maxHeight: "90vh",
    },
    visibleAndHiddenBlock: {},
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
    technologiesUsed: {
        marginBottom: 20,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        [theme.breakpoints.down('md')]: {
            maxWidth: 225,
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: 304,
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: 225,
        },
    },
    cardContentWrapper: {
        padding: theme.spacing(2, 2, 1, 2)
    },
    cardContentWrapperModal: {
        padding: theme.spacing(2)
    },
}))

const ProjectCard = observer((props) => {
    const {isModal, showModal} = props
    const classes = useStyles({darkMode: storeApp.darkMode})
    const {project} = props

    return <>
        <Card className={clsx({[classes.cardModal]: isModal})}>
            <CardActionArea disabled={isModal}
                            onClick={!isModal && showModal}>
                <CardHeader avatar={
                        <Avatar
                            aria-label="recipe"
                            className={clsx({[classes.projectAvatarCompleted]: !!project.releaseDate.done},
                                {[classes.projectAvatarUnfinished]: !project.releaseDate.done})}>
                            {!!project.releaseDate.done ? <GiCheckMark/> : <GiTimeTrap/>}
                        </Avatar>
                    }
                    title={project.title}
                    subheader={project.releaseDate.date}
                    classes={{
                        content: classes.cardHeaderContent,
                        title: classes.cardHeaderTittle,
                    }}
                />
                <CardMedia
                    className={classes.media}
                    image={require(`../../images/projects/${project.screenshots[0]}`).default}
                    title={project.title}
                />
            </CardActionArea>
            <Box className={clsx({
                [classes.cardContentWrapper]: !isModal,
                [classes.cardContentWrapperModal]: isModal
            })}>
                <Box classes={{root: classes.projectLinks}}>
                    <Link classes={{root: clsx(classes.projectLink, classes.icon)}}
                          href={project.demoLink.link} target={"_blank"}
                    >
                        <IoEyeOutline className={classes.projectLinkIcon}/>
                        <Typography>
                            {project.demoLink.text}
                        </Typography>
                    </Link>
                    <Link classes={{root: clsx(classes.projectLink, classes.icon)}}
                          href={project.projectLink.link} target={"_blank"}
                    >
                        <FiSettings className={classes.projectLinkIcon}/>
                        <Typography>
                            {project.projectLink.text}
                        </Typography>
                    </Link>
                </Box>
                <Box borderColor="transparent">
                    <Rating name="read-only" value={project.rating} readOnly/>
                </Box>
                <Typography className={clsx({[classes.technologiesUsed]: !isModal})}>
                    {project.technologiesUsed.join(", ")}
                </Typography>
                {isModal && <>
                    <Box className={classes.visibleAndHiddenBlock}>
                        <Box classes={{root: classes.projectDescriptionWrapper}}>
                            <Box display={"flex"} alignItems={"center"}>
                                <BsInfoCircle className={classes.projectDescriptionTitleIcon}/>
                                <Typography
                                    className={classes.projectDescriptionTitle}>{project.description.header}</Typography>
                            </Box>
                            <Typography
                                className={classes.projectDescription}>{project.description.description}</Typography>
                        </Box>
                        <Box>
                            <Box display={"flex"} alignItems={"center"}>
                                <GiAchievement className={classes.characteristicsHeaderIcon}/>
                                <Typography
                                    classes={{root: classes.characteristicsHeaderText}}>{project.benefits.header}</Typography>
                            </Box>
                            <ul className={classes.characteristicsList}>
                                {project.benefits.description.map((advantage, index) => {
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
                                <Typography
                                    classes={{root: classes.characteristicsHeaderText}}>{project.limitations.header}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <ul className={classes.characteristicsList}
                    >
                        {project.limitations.description.map((flaw, index) => {
                            return <React.Fragment key={`flaw-${index}`}>
                                <li className={{root: classes.characteristicsItem}}>
                                    <Typography
                                        classes={{root: classes.characteristicsItemText}}>{flaw}</Typography>
                                </li>
                            </React.Fragment>
                        })}
                    </ul>
                </>}
                {!isModal ? <Button fullWidth
                                    color={storeApp.darkMode ? "default" : "primary"}
                                    onClick={showModal}
                                    startIcon={<SiFurrynetwork />}
                >
                    Подробнее
                </Button> : null}
            </Box>
        </Card>
    </>
})


const ProjectCardManager = (props) => {
    const {project} = props

    const showModal = () => {
        storeModalWindow.setContent(<ProjectCard project={project} isModal={true} />)
        storeModalWindow.toggle(true)
    }

    return <ProjectCard project={project}
                        showModal={showModal} />
}

export default observer(ProjectCardManager)