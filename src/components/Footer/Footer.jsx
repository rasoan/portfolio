import React from "react";
import {Link, List, ListItem, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {FaVk, FaInstagram, FaTelegramPlane, FaMailBulk} from "react-icons/fa";
import {useTranslation} from "react-i18next";

const getCurrentDate = () => {
    const currentDate = new Date();
    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июнья',
        'июлья',
        'августа',
        'сентябрья',
        'октябрья',
        'ноябрья',
        'декабрья',
    ];
    return currentDate.getDate() + ' ' + months[currentDate.getMonth()] + ' ' + currentDate.getFullYear();
}

const useStyles = makeStyles((theme) => ({
    wrapperFooter: {
        padding: "20px 0",
        position: "relative",
        backgroundColor: theme.palette.grey[100],
    },
    currentDate: {
        position: "absolute",
        bottom: 10,
        left: `calc(50% - 42px)`,
        width: "max-content",
        fontSize: 12,
        fontWeight: "bold",
    }
}));

const Footer = () => {
    const classes = useStyles();
    const {t} = useTranslation();

    return <Paper className={classes.wrapperFooter} elevation={3}>
        <Typography className={classes.currentDate}>{t('date', {date: new Date})}</Typography>
    </Paper>
}

export default Footer;