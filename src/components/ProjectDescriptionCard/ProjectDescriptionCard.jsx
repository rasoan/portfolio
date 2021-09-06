import React from "react";
import {
    Avatar,
    Box, Button,
    Card, CardActionArea,
    CardHeader,
    CardMedia,
    Link,
    Typography
} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import {makeStyles} from "@material-ui/core/styles";
import {green, red} from "@material-ui/core/colors";
import clsx from "clsx";
import {
    BsInfoCircle,
    FiSettings,
    GiAchievement,
    GiCheckMark,
    GiTimeTrap,
    IoEyeOutline,
    MdErrorOutline,
    SiFurrynetwork
} from "react-icons/all";
import storeModalWindow from "../../store/storeModalWindow";
import storeApp from "../../store/storeApp";
import {observer} from "mobx-react";

const useStyles = makeStyles(theme => ({
    darkMode: {
        color: props => props.darkMode ? theme.palette.common.white : theme.palette.primary.main
    },
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
    preview: {
        height: 0,
        paddingTop: '56.25%',
    },
    previewModal: {
        boxShadow: theme.shadows[3],
    },
    projectLink: {
        width: "max-content",
        display: "flex",
        alignItems: "center",
    },
    projectLinkIcon: {
        marginRight: 6,
    },
    cardModal: {
        overflowY: "scroll",
        width: 800,
        maxHeight: "90vh",
        [theme.breakpoints.down('lg')]: {
            width: "80vw",
        },
        [theme.breakpoints.down('md')]: {
            width: "80vw",
        },
        [theme.breakpoints.down('xs')]: {
            width: "85vw",
        },
    },
    characteristicsHeaderIcon: {
        fontSize: 20,
        marginRight: 10,
    },
    descriptionTitleIcon: {
        fontSize: 20,
        marginRight: 10,
    },
    description: {
        paddingLeft: 10,
    },
    characteristicsList: {
        margin: 0,
    },
    characteristicsItem: {
        padding: 0,
    },
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
    contentWrapper: {
        padding: theme.spacing(2, 2, 1, 2)
    },
    contentWrapperModal: {
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
                        {!!project.releaseDate.done ? <GiCheckMark /> : <GiTimeTrap />}
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
                    className={clsx(classes.preview, {[classes.previewModal]: isModal})}
                    image={require(`../../images/projects/${project.screenshots[0]}`).default}
                    title={project.title}
                />
            </CardActionArea>
            <Box className={clsx({
                [classes.contentWrapper]: !isModal,
                [classes.contentWrapperModal]: isModal
            })}>
                <Box display={"flex"}
                     justifyContent={"space-between"}
                     width={"100%"}
                     height={"100%"}
                >
                    <Link className={clsx(classes.projectLink, classes.darkMode)}
                          href={project.demoLink.link}
                          target={"_blank"}
                    >
                        <IoEyeOutline className={classes.projectLinkIcon} />
                        <Typography>
                            {project.demoLink.text}
                        </Typography>
                    </Link>
                    <Link className={clsx(classes.projectLink, classes.darkMode)}
                          href={project.projectLink.link}
                          target={"_blank"}
                    >
                        <FiSettings className={classes.projectLinkIcon} />
                        <Typography>
                            {project.projectLink.text}
                        </Typography>
                    </Link>
                </Box>
                <Box borderColor="transparent">
                    <Rating name="read-only" value={project.rating} readOnly />
                </Box>
                <Typography className={clsx({[classes.technologiesUsed]: !isModal})}>
                    {project.technologiesUsed.join(", ")}
                </Typography>
                {isModal && <>
                    <Box>
                        <Box>
                            <Box display={"flex"} alignItems={"center"}>
                                <BsInfoCircle className={classes.descriptionTitleIcon} />
                                <Typography>
                                    {project.description.header}
                                </Typography>
                            </Box>
                            <Typography className={classes.description}>
                                {project.description.description}
                            </Typography>
                        </Box>
                        <Box>
                            <Box display={"flex"} alignItems={"center"}>
                                <GiAchievement className={classes.characteristicsHeaderIcon}/>
                                <Typography>{project.benefits.header}</Typography>
                            </Box>
                            <ul className={classes.characteristicsList}>
                                {project.benefits.description.map((advantage, index) => {
                                    return <React.Fragment key={`advantage-${index}`}>
                                        <li className={classes.characteristicsItem}>
                                            {advantage}
                                        </li>
                                    </React.Fragment>
                                })}
                            </ul>
                            <Box display={"flex"} alignItems={"center"}>
                                <MdErrorOutline className={classes.characteristicsHeaderIcon}/>
                                <Typography>{project.limitations.header}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <ul className={classes.characteristicsList}>
                        {project.limitations.description.map((flaw, index) => {
                            return <React.Fragment key={`flaw-${index}`}>
                                <li className={classes.characteristicsItem}>
                                    {flaw}
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