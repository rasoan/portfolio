import React from "react";
import {useTranslation} from "react-i18next";
import {List, ListItem, makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    listInformationAboutMeContainer: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[100],
    },
    listInformationAboutMe: {
        height: "min-content",
    },
    listInformationAboutMeItem: {
        padding: 0,
    },
    listInformationAboutMeItemHeader: {
        marginRight: theme.spacing(1),
        fontWeight: "bold",
    }
}));

const BriefInformationAboutMe = () => {
    const styles = useStyles();
    const {t} = useTranslation();
    let briefInformationAboutMe = t('briefInformationAboutMe', {returnObjects: true});
    briefInformationAboutMe = briefInformationAboutMe.map(object => {
        return <ListItem classes={{root: styles.listInformationAboutMeItem}}>
            <Typography className={styles.listInformationAboutMeItemHeader}>{object.header} </Typography>
            <Typography>{object.description}</Typography>
        </ListItem>
    });

    return <Paper className={styles.listInformationAboutMeContainer}>
        <List classes={{root: styles.listInformationAboutMe}}>
            {briefInformationAboutMe}
        </List>

    </Paper>
}

export default BriefInformationAboutMe;