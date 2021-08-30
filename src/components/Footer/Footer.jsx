import React from "react";
import {Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: "32px 0",
        position: "relative",
    },
    currentDate: {
        position: "absolute",
        bottom: "calc(50% - 12px)",
        left: `calc(50% - 42px)`,
        width: "max-content",
        fontSize: 16,
        fontWeight: "bold",
    }
}))

const Footer = () => {
    const classes = useStyles();
    const {t} = useTranslation();

    return <Paper className={classes.wrapper} elevation={3}>
        <Typography className={classes.currentDate}>
            {t('date', {date: new Date})}
        </Typography>
    </Paper>
}

export default Footer