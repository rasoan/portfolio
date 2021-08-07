import React from "react";
import {Link, List, ListItem, Typography} from "@material-ui/core";
import style from "./style.module.scss";
import {FaInstagram, FaTelegramPlane, FaVk} from "react-icons/fa";
import {makeStyles} from "@material-ui/core/styles";
import clsx from 'clsx';

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
    return <>
        <div className={style.profilePictureContainer}>
            <img className={style.image}
                 width="300"
                 height="300"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB8Fhh8lPlDa1kRNe55ZPODUarBM1vasbBa-VunJvG7RIuhzIVG2sXcSPLdpnz4eKXOxs&usqp=CAU"
                 alt=""/>
            <List className={style.uploadFileButton}>
                <ListItem className={classes.listItemContacts}>
                    <Link target="_blank" className={classes.listLinkContacts} href="https://vk.com/araiikk">
                        <FaVk className={classes.listIconContacts}/>
                        <Typography className={classes.listTextContacts}>Вконтакте</Typography>
                    </Link>
                </ListItem>
                <ListItem className={classes.listItemContacts}>
                    <Link target="_blank" className={classes.listLinkContacts}
                          href="https://www.instagram.com/araiikk">
                        <FaInstagram className={classes.listIconContacts}/>
                        <Typography className={classes.listTextContacts}>Инстаграм</Typography>
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
        </div>
    </>
}

export default MyAvatar;