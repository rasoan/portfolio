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
    }
}));

const BriefInformationAboutMe = () => {
    const classes = useStyles();
    const {t} = useTranslation();


    return <Box ml={2}>
        <List className={style.listContacts}>
            <ListItem className={style.listItemContacts}>
                <Typography variant="h4" className={style.fullName}>
                    {t('briefInformationAboutMe.fullName')}
                </Typography>
            </ListItem>
            <ListItem className={style.listItemContacts}>
                <Typography variant="h4" className={style.years}>
                    {t('briefInformationAboutMe.years')}
                </Typography>
            </ListItem>
            <ListItem className={style.listItemContacts}>
                <FaMailBulk className={style.iconContacts}/>
                <Typography className={style.textContacts}>araikrasoian@gmail.com</Typography>
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