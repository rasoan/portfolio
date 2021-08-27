import React from "react";
import {useTranslation} from "react-i18next";
import {Box, Link, List, ListItem, makeStyles, Paper, Typography} from "@material-ui/core";
import {FaInstagram, FaMailBulk, FaTelegramPlane, FaVk} from "react-icons/fa";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    list: {},
    listItem: {
        [theme.breakpoints.down('lg')]: {
            padding: 4,
        },
    },
    itemContacts: {},
    itemContactsLinkSocial: {},
    informationWrapper: {
        // marginLeft: 20,
        [theme.breakpoints.down('md')]: {
            // marginLeft: 16,
        },
        [theme.breakpoints.down('sm')]: {
            // marginLeft: 10,
        },
        [theme.breakpoints.down('xs')]: {
            // marginLeft: 4,
        },
    },
    listItemFullName: {
        maxWidth: 390,
        [theme.breakpoints.down('lg')]: {
            maxWidth: 300,
        },
        // [theme.breakpoints.down('md')]: {
        // },
        [theme.breakpoints.down('sm')]: {
            maxWidth: 200,
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: 160,
        },
    },
    fullName: {
        lineHeight: "1.2",
        fontSize: 50,
        fontWeight: "bold",
        [theme.breakpoints.down('lg')]: {
            fontSize: 30,
            lineHeight: "1.1",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 30,
            lineHeight: "1.1",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
            lineHeight: "1",
        },
        // [theme.breakpoints.down('xs')]: {
        //     fontSize: 15,
        //     lineHeight: "1",
        // },
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
        // [theme.breakpoints.down('xs')]: {
        //     fontSize: 15,
        // },
    },
    contactsText: {
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
        [theme.breakpoints.down('md')]: {
        },
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
    const classes = useStyles();
    const {t} = useTranslation();

    return <Box mx={"auto"} classes={{root: classes.informationWrapper}}>
        <List className={classes.list}>
            <ListItem className={clsx(classes.listItem, classes.listItemFullName)}>
                <Typography component={"h4"} classes={{root: classes.fullName}}>
                    {t('profilePage.briefInformationAboutMe.fullName')}
                </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Typography variant="h4" classes={{root: classes.years}}>
                    {t('profilePage.briefInformationAboutMe.years')}
                </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
                <FaMailBulk className={classes.iconContacts}/>
                <Typography classes={{root: classes.contactsText}}>araikrasoian@gmail.com</Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link target="_blank" className={classes.itemContactsLinkSocial} href="https://vk.com/araiikk">
                    <FaVk className={classes.iconContacts}/>
                </Link>
                <Link className={classes.itemContactsLinkSocial} target="_blank"
                      href="https://www.instagram.com/araiikk">
                    <FaInstagram className={classes.iconContacts}/>
                </Link>
                <Link className={classes.itemContactsLinkSocial} href="tel:+375256643070">
                    <FaTelegramPlane className={clsx(classes.iconContacts)}/>
                </Link>
            </ListItem>
        </List>
    </Box>
}

export default BriefInformationAboutMe;