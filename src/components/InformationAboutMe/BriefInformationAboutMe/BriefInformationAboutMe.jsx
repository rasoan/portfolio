import React from "react";
import {useTranslation} from "react-i18next";
import {Box, Link, List, ListItem, makeStyles, Paper, Typography} from "@material-ui/core";
import {FaInstagram, FaMailBulk, FaTelegramPlane, FaVk} from "react-icons/fa";
import style from "./syle.module.scss";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    iconContacts: {
        color: theme.palette.primary.main,
    },
    textContacts: {
        color: theme.palette.primary.main,
    },
    informationWrapper: {
        marginLeft: 20,
        [theme.breakpoints.down('md')]: {
            marginLeft: 16,
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: 10,
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: 4,
        },
    },
    fullName: {
        lineHeight: "1.2",
        fontSize: 30,
        fontWeight: "bold",
        [theme.breakpoints.down('md')]: {
            fontSize: 25,
            lineHeight: "1.1",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
            lineHeight: "1",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 15,
            lineHeight: "1",
        },
    },
    years: {
        fontSize: 30,
        [theme.breakpoints.down('md')]: {
            fontSize: 25,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 15,
        },
    },
    contactsText: {
        fontSize: 20,
        [theme.breakpoints.down('md')]: {
            fontSize: 16,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 8,
        },
    }
}));

const BriefInformationAboutMe = () => {
    const classes = useStyles();
    const {t} = useTranslation();


    return <Box classes={{root: classes.informationWrapper}}>
        <List className={style.listContacts}>
            <ListItem>
                <Typography component={"h4"} classes={{root: classes.fullName}}>
                    {t('briefInformationAboutMe.fullName')}
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant="h4" classes={{root: classes.years}}>
                    {t('briefInformationAboutMe.years')}
                </Typography>
            </ListItem>
            <ListItem className={style.listItemContacts}>
                <FaMailBulk className={style.iconContacts}/>
                <Typography classes={{root: classes.contactsText}}>araikrasoian@gmail.com</Typography>
            </ListItem>
            <ListItem className={style.listItemContacts}>
                <Link target="_blank" className={style.linkContacts} href="https://vk.com/araiikk">
                    <FaVk className={clsx(style.iconContacts, classes.iconContacts)}/>
                </Link>
                <Link target="_blank" className={style.linkContacts}
                      href="https://www.instagram.com/araiikk">
                    <FaInstagram className={clsx(style.iconContacts, classes.iconContacts)}/>
                </Link>
                <Link className={style.linkContacts} href="tel:+375256643070">
                    <FaTelegramPlane className={clsx(style.iconContacts, classes.iconContacts)}/>
                </Link>
            </ListItem>
        </List>
    </Box>
}

export default BriefInformationAboutMe;