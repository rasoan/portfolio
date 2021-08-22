import React, {useEffect, useRef, useState} from "react";
import {
    Avatar,
    Box, Button,
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

const useStyles = makeStyles(theme => ({
    tittleCardWrapper: {
        fontSize: 30,
        overflow: "hidden",
        whiteSpace: "nowrap",
    },
    tittleCardHeader: {
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
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
        "&:hover": {
            cursor: "pointer",
        }
    },
    cardModal: {
        overflowY: "scroll",
        width: 450,
        maxHeight: 550,
        // xs: 0,
        // sm: 400,
        // md: 600,
        // lg: 760,
        // xl: 1280,
        // [theme.breakpoints.down('lg')]: {
        //     width: 400,
        //     height: 500,
        // },
        [theme.breakpoints.down('md')]: {
            width: 400,
            height: 550,
        },
        [theme.breakpoints.down('sm')]: {
            width: 360,
            height: 500,
        },
        [theme.breakpoints.down('xs')]: {
            width: 280,
            height: 400,
        },
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
    completedProjectAvatar: {
        backgroundColor: green[500],
    },
    unfinishedProjectAvatar: {
        backgroundColor: red[500],
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


const FullProjectDescriptionProjectDescription = (props) => {
    const {
        buttonShowMoreInfo = null,
        isCardInModal = false
    } = props
    const classes = useStyles()
    const {project} = props

    return <>
        <Card className={clsx({[classes.cardModal]: isCardInModal})}
        >
            <CardHeader
                classes={{
                    content: classes.tittleCardWrapper,
                    title: classes.tittleCardHeader
                }}
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
                title="тест"
            />
            <Box className={clsx({
                [classes.cardContentWrapper]: !isCardInModal,
                [classes.cardContentWrapperModal]: isCardInModal
            })}>
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
                <Typography className={clsx({[classes.technologiesUsed]: !isCardInModal})}>
                    {project.technologiesUsed.join(", ")}
                </Typography>
                {isCardInModal && <>
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
                                <Typography
                                    classes={{root: classes.characteristicsHeaderText}}>Преимущества</Typography>
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
                        </Box>
                    </Box>
                    <ul className={classes.characteristicsList}
                    >
                        {project.limitations.map((flaw, index) => {
                            return <React.Fragment key={`flaw-${index}`}>
                                <li className={{root: classes.characteristicsItem}}>
                                    <Typography
                                        classes={{root: classes.characteristicsItemText}}>{flaw}</Typography>
                                </li>
                            </React.Fragment>
                        })}
                    </ul>
                </>}
                {buttonShowMoreInfo}
            </Box>
        </Card>
    </>
}


const ProjectDescriptionCard = (props) => {
    const {project} = props

    const showModal = () => {
        storeModalWindow.setContent(
            <>
                <FullProjectDescriptionProjectDescription
                    project={project}
                    isCardInModal={true}
                />
            </>
        )
        storeModalWindow.toggle(true)
    }

    const buttonShowMoreInfo = <>
        <Button fullWidth
                color={"primary"}
                onClick={showModal}
                startIcon={<SiFurrynetwork />}
        >
            Подробнее
        </Button>
    </>


    return <>
        <FullProjectDescriptionProjectDescription
            project={project}
            buttonShowMoreInfo={buttonShowMoreInfo}
        />
    </>
}


export default ProjectDescriptionCard;