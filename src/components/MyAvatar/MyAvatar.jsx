import React from "react";
import {Box, Link, List, ListItem, Paper, Typography} from "@material-ui/core";
import style from "./style.module.scss";
import {FaInstagram, FaTelegramPlane, FaVk} from "react-icons/fa";
import {makeStyles} from "@material-ui/core/styles";
import clsx from 'clsx';
import {useTranslation} from "react-i18next";
import imgAvatar from "../../images/araik.png";

const useStyles = makeStyles(theme => ({
    objectFit: "cover",
    imageWrapper: {
    },
    image: {
        [theme.breakpoints.down('md')]: {
            width: 200,
            height: 400,
        },
        [theme.breakpoints.down('sm')]: {
            width: 75,
            height: 150,
        },
        [theme.breakpoints.down('xs')]: {
            // width: 240,
            // height: 500,
        },
    }
}))

const MyAvatar = () => {
    const classes = useStyles()

    return <>
        <Box ml="auto" mr={2}>
            <img className={classes.image}
                 width="240"
                 height="500"
                 src={imgAvatar}
                 alt="avatar"/>
        </Box>

    </>
}

export default MyAvatar;