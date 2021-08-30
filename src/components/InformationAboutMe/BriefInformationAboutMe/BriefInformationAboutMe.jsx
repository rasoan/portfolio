import React from "react";
import {useTranslation} from "react-i18next";
import {Box, Link, List, ListItem, makeStyles, Typography} from "@material-ui/core";
import {FaInstagram, FaMailBulk, FaTelegramPlane, FaVk} from "react-icons/fa";
import clsx from "clsx";
import storeApp from "../../../store/storeApp";

const useStyles = makeStyles(theme => ({
    darkMode: {
        color: props => props.darkMode ? theme.palette.common.white : theme.palette.primary.main,
    },
    listItem: {
        [theme.breakpoints.down('lg')]: {
            padding: 4,
        },
    },
    fullName: {
        maxWidth: 390,
        lineHeight: "1.2",
        fontSize: 50,
        fontWeight: "bold",
        [theme.breakpoints.down('lg')]: {
            maxWidth: 300,
            fontSize: 30,
            lineHeight: "1.1",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 30,
            lineHeight: "1.1",
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: 200,
            fontSize: 20,
            lineHeight: "1",
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: 160,
        },
    },
    years: {
        fontSize: 50,
        [theme.breakpoints.down('lg')]: {
            fontSize: 30,
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 30,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        },
    },
    textContacts: {
        fontSize: 40,
        [theme.breakpoints.down('lg')]: {
            fontSize: 20,
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 16,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 15,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
    },
    iconContacts: {
        fontSize: 40,
        marginRight: 15,
        color: theme.palette.primary.main,
        [theme.breakpoints.down('lg')]: {
            fontSize: 25,
        },
        [theme.breakpoints.down('md')]: {},
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
            marginRight: 8,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
        },
    },
}));

const BriefInformationAboutMe = () => {
    const classes = useStyles({darkMode: storeApp.darkMode})
    const {t} = useTranslation()

    return <Box mx={"auto"}>
        <List>
            <ListItem className={clsx(classes.listItem, classes.fullName)}>
                {t('profilePage.briefInformationAboutMe.fullName')}
            </ListItem>
            <ListItem className={clsx(classes.listItem, classes.years)}>
                {t('profilePage.briefInformationAboutMe.years')}
            </ListItem>
            <ListItem className={classes.listItem}>
                <FaMailBulk className={clsx(classes.iconContacts, classes.darkMode)} />
                <Typography classes={{root: classes.textContacts}}>
                    araikrasoian@gmail.com
                </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link target="_blank"
                      href="https://vk.com/araiikk">
                    <FaVk className={clsx(classes.iconContacts, classes.darkMode)} />
                </Link>
                <Link target="_blank"
                      href="https://www.instagram.com/araiikk">
                    <FaInstagram className={clsx(classes.iconContacts, classes.darkMode)} />
                </Link>
                <Link href="tel:+375256643070">
                    <FaTelegramPlane className={clsx(classes.iconContacts, classes.darkMode)} />
                </Link>
            </ListItem>
        </List>
    </Box>
}

export default BriefInformationAboutMe