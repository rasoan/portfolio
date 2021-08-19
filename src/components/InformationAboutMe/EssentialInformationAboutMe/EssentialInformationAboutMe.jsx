import React from "react";
import style from "./syle.module.scss";
import {useTranslation} from "react-i18next";
import {Grid, List, ListItem, makeStyles, Paper, Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    listEssentialInformationAboutMeContainer: {
        margin: theme.spacing(4),
        padding: 0,
        overflow: "hidden",
    },
    listOfKeySkills: {
        display: "flex",
        flexWrap: "wrap",
        padding: 0,
        marginLeft: 0,
    },
    listOfKeySkillsItem: {
        width: "min-content",
        border: 0,
        borderRadius: 5,
        padding: 4,
        margin: theme.spacing(1, 0),
        backgroundColor: theme.palette.success.dark,
        color: "white",
        marginRight: theme.spacing(1),
    },
    listOfKeySkillsItemText: {
        width: "max-content",
    },
    listEssentialInformationAboutMeContainerHeader: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    listEssentialInformationAboutMeHeader: {
        fontWeight: "bold",
        textAlign: "center",
    },
    listEssentialInformationAboutMeRow: {
        flexWrap: "nowrap",
        padding: "15px 0",
        margin: 0,
    },
    honest: {
        backgroundColor: theme.palette.grey[50],
    },
    notHonest: {
        backgroundColor: theme.palette.grey[200],
    },
    columnDirectionList: {},
    rowDirectionList: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
    },
    columnOrRowDirectionListItem: {
        padding: 0,
    },
    columnDirectionListItem: {},
    rowDirectionListItem: {
        width: "max-content",
        marginRight: 5,
    },
}))

const EssentialInformationAboutMe = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    let essentialInformationAboutMe = t('essentialInformationAboutMe', {returnObjects: true});
    essentialInformationAboutMe = essentialInformationAboutMe.map((object, index, array) => {
        return <React.Fragment key={`gridItem-${index}`}>
            <Grid container
                  spacing={2}
                  className={clsx(classes.listEssentialInformationAboutMeRow, {[classes.notHonest]: (index % 2 !== 0)}, {[classes.honest]: (index % 2 == 0)})}

            >
                <Grid item xs={3} className={classes.listEssentialInformationAboutMeContainerHeader}>
                    <Typography
                        classes={{root: classes.listEssentialInformationAboutMeHeader}}>{object.header} </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem/>
                <Grid item xs={9}>
                    {!Array.isArray(object.description) ? <Typography>{object.description}</Typography> :
                        <List
                            className={clsx({[classes.columnDirectionList]: object.columnDirectionList}, {[classes.rowDirectionList]: !object.columnDirectionList})}>
                            {object.description.map((element, index, array) => {
                                return <React.Fragment key={`listItem-${index}`}>
                                    <ListItem className={clsx(classes.columnOrRowDirectionListItem, {
                                        [classes.columnDirectionListItem]: object.columnDirectionList,
                                        [classes.rowDirectionListItem]: !object.columnDirectionList,
                                    })}
                                    >
                                        <Typography>
                                            {element}
                                            {array.length > 1 && ((index === array.length - 1) ? "." : object.columnDirectionList ? ";" : ",")}
                                        </Typography>
                                    </ListItem>
                                </React.Fragment>
                            })}
                        </List>}
                </Grid>
            </Grid>
        </React.Fragment>
    });

    let keySkills = t('keySkills', {returnObjects: true});
    keySkills = keySkills.map((object, index, array) => {
        return <React.Fragment key={`skillsItem-${index}`}>
            <Grid container
                  spacing={2}
                  className={clsx(classes.listEssentialInformationAboutMeRow, {[classes.notHonest]: (index % 2 !== 0)}, {[classes.honest]: (index % 2 == 0)})}
            >
                <Grid item xs={3} className={classes.listEssentialInformationAboutMeContainerHeader}>
                    <Typography
                        classes={{root: classes.listEssentialInformationAboutMeHeader}}>{object.header} </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem/>
                <Grid item xs={9}>
                    <List classes={{root: classes.listOfKeySkills}}>
                        {object.description.map((object, index) => {
                            return <React.Fragment key={`description-${index}`}>
                                <ListItem className={classes.listOfKeySkillsItem}>
                                    <Typography className={classes.listOfKeySkillsItemText}>{object}</Typography>
                                </ListItem>
                            </React.Fragment>
                        })}
                    </List>
                </Grid>
            </Grid>
        </React.Fragment>
    });

    return <>
        <Paper classes={{root: classes.listEssentialInformationAboutMeContainer}} elevation={3}>
            {essentialInformationAboutMe}
        </Paper>
        <Paper classes={{root: classes.listEssentialInformationAboutMeContainer}} elevation={3}>
            {keySkills}
        </Paper>
    </>
}

export default EssentialInformationAboutMe;