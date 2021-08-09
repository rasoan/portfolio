import React from "react";
import {Box, Link, List, ListItem, Paper, Typography} from "@material-ui/core";
import style from "./style.module.scss";
import {FaInstagram, FaTelegramPlane, FaVk} from "react-icons/fa";
import {makeStyles} from "@material-ui/core/styles";
import clsx from 'clsx';
import {useTranslation} from "react-i18next";
import imgAvatar from "../../images/araik.jpg";

const useStyles = makeStyles((theme) => ({
    listContacts: {
        width: "min-content",
        padding: 0,
    },
    listItemContacts: {
        padding: 1,
    },
    listLinkContacts: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        "&:hover": {
            textDecoration: "none",
        },
        "&:hover $listIconContacts": {
            color: "white"
        },
        "&:hover $listTextContacts": {
            color: "white"
        }
    },
    listNotLinkContacts: {
        "&:hover": {
           cursor: "default",
        },
        "&:hover $listIconContacts": {
            color: "inherit"
        },
        "&:hover $listTextContacts": {
            color: "inherit"
        }
    },
    listIconContacts: {
        fontSize: 20,
        marginRight: 6,
        color: theme.palette.primary.main,
    },
    listTextContacts: {
        fontWeight: "bold",
        height: 'min-content',
        lineHeight: 1,
        fontSize: 12,
    },
}));

const MyAvatar = () => {
    const classes = useStyles();
    const {t} = useTranslation();

    return <>
        <Paper className={style.profilePictureContainer}>
            <img className={style.image}
                 width="300"
                 height="300"
                 src={imgAvatar}
                 alt="avatar"/>
            <List className={style.uploadFileButton}>
                <ListItem className={classes.listItemContacts}>
                    <Link target="_blank" className={classes.listLinkContacts} href="https://vk.com/araiikk">
                        <FaVk className={classes.listIconContacts}/>
                        <Typography className={classes.listTextContacts}>
                            {t('socialMedia.vkontakte')}
                        </Typography>
                    </Link>
                </ListItem>
                <ListItem className={classes.listItemContacts}>
                    <Link target="_blank" className={classes.listLinkContacts}
                          href="https://www.instagram.com/araiikk">
                        <FaInstagram className={classes.listIconContacts}/>
                        <Typography className={classes.listTextContacts}>
                            {t('socialMedia.instagram')}
                        </Typography>
                    </Link>
                </ListItem>
                <ListItem className={classes.listItemContacts}>
                    <Link className={clsx(classes.listLinkContacts, classes.listNotLinkContacts)}
                          href="#">
                        <FaTelegramPlane className={classes.listIconContacts}/>
                        <Typography className={classes.listTextContacts}>+375 25 664 30 70</Typography>
                    </Link>
                </ListItem>
            </List>
        </Paper>
    </>
}

export default MyAvatar;