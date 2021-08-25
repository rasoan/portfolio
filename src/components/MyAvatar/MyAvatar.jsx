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
        objectFit: "contain",
        [theme.breakpoints.down('lg')]: {
            width: 150,
            height: 300,
        },
        [theme.breakpoints.down('md')]: {
            width: 150,
            height: 250,
        },
        [theme.breakpoints.down('sm')]: {
            width: 128,
            height: 290,
        },
        [theme.breakpoints.down('xs')]: {
            width: 100,
            height: 190,
        },
    }
}))

const MyAvatar = () => {
    const classes = useStyles()

    return <>
        <Box mx="auto">
            <img className={classes.image}
                 width="240"
                 height="500"
                 src={imgAvatar}
                 alt="avatar"/>
        </Box>

    </>
}

export default MyAvatar;