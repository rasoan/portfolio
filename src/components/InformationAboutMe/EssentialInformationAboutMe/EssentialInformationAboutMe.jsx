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
        padding: 0,
        marginLeft: 0,
    },
    listOfKeySkillsItem: {
        width: "min-content",
        border: 0,
        borderRadius: 5,
        padding: 4,
        backgroundColor: theme.palette.success.dark,
        color: "white",
        marginRight: theme.spacing(1),
    },
    listOfKeySkillsItemText: {
        width: "max-content",
    },
    listEssentialInformationAboutMeHeader: {
        fontWeight: "bold",
    },
    listEssentialInformationAboutMeRow: {
        padding: "15px 0",
        margin: 0,
    },
    honest: {
        backgroundColor: theme.palette.grey[50],
    },
    notHonest: {
        backgroundColor: theme.palette.grey[200],
    }
}))

const EssentialInformationAboutMe = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    let essentialInformationAboutMe = t('essentialInformationAboutMe', {returnObjects: true});
    essentialInformationAboutMe = essentialInformationAboutMe.map((object, index, array) => {
        return <>
            <Grid container
                  xs={12}
                  spacing={2}
                  className={clsx(classes.listEssentialInformationAboutMeRow,{[classes.notHonest]: (index % 2 !== 0)}, {[classes.honest]: (index % 2 == 0)})}
            >
                <Grid item xs={3}>
                    <Typography
                        classes={{root: classes.listEssentialInformationAboutMeHeader}}>{object.header} </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem  />
                <Grid item xs={8}>
                    {!Array.isArray(object.description) ? <Typography>{object.description}</Typography> :
                        <List>
                            {object.description.map(element => {
                                return <>
                                    <ListItem>{element}</ListItem>
                                </>
                            })}
                        </List>}
                </Grid>
            </Grid>
        </>
    });

    let keySkills = t('keySkills', {returnObjects: true});
    keySkills = keySkills.map((object, index, array) => {
        return <>
            <Grid container xs={12} spacing={2} className={clsx(classes.listEssentialInformationAboutMeRow,{[classes.notHonest]: (index % 2 !== 0)}, {[classes.honest]: (index % 2 == 0)})}>
                <Grid item xs={3}>
                    <Typography
                        classes={{root: classes.listEssentialInformationAboutMeHeader}}>{object.header} </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem  />
                <Grid item xs={8}>
                    <List classes={{root: classes.listOfKeySkills}}>
                        {object.description.map(object => {
                            return <ListItem className={classes.listOfKeySkillsItem}>
                                    <Typography className={classes.listOfKeySkillsItemText}>{object}</Typography>
                            </ListItem>
                        })}
                    </List>
                </Grid>
            </Grid>
        </>
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