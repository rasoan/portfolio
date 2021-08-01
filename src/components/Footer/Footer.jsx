import React from "react";
import {Link, List, ListItem, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {FaVk, FaInstagram, FaTelegramPlane, FaMailBulk} from "react-icons/fa";

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
        padding: "10px",
        position: "relative",
        backgroundColor: theme.palette.grey[100],
    },
    listContacts: {
        width: "min-content",
        padding: 0,
    },
    listItemContacts: {
        padding: 2,
    },
    listLinkContacts: {
        display: "flex",
        alignItems: "center",
        "&:hover $listIconContacts": {
            color: "black"
        }
    },
    listIconContacts: {
        fontSize: 20,
        marginRight: 6,
        color: theme.palette.primary.main,
    },
    listTextContacts: {
        height: 'min-content',
        lineHeight: 1,
        fontSize: 12,
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

    return <Paper className={classes.wrapperFooter} elevation={3}>
        <List className={classes.listContacts}>
            <ListItem className={classes.listItemContacts}>
                <Link className={classes.listLinkContacts} href="tel:+375256643070">
                    <FaTelegramPlane className={classes.listIconContacts}/>
                    <Typography className={classes.listTextContacts}>+375 25 664 30 70</Typography>
                </Link>
            </ListItem>
            <ListItem className={classes.listItemContacts}>
                <FaMailBulk className={classes.listIconContacts}/>
                <Typography className={classes.listTextContacts}>araikrasoian@gmail.com</Typography>
            </ListItem>
            <ListItem className={classes.listItemContacts}>
                <Link target="_blank" className={classes.listLinkContacts} href="https://vk.com/araiikk">
                    <FaVk className={classes.listIconContacts}/>
                </Link>
                <Link target="_blank" className={classes.listLinkContacts}
                      href="https://www.instagram.com/araiikk">
                    <FaInstagram className={classes.listIconContacts}/>
                </Link>
            </ListItem>
        </List>
        <Typography className={classes.currentDate}>{getCurrentDate()}</Typography>
    </Paper>
}

export default Footer;