import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import WorkOutline from '@material-ui/icons/WorkOutline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import storeApp from "../../store/storeApp";
import {Box} from "@material-ui/core";
import {useTranslation} from 'react-i18next';
import {observer} from "mobx-react";
import clsx from "clsx";
import ToggleDarkMode from "../ToggleDarkMode";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";

const useStyles = makeStyles((theme) => ({
    darkMode: {
        color: props => props.darkMode ? theme.palette.common.white : theme.palette.primary.main
    },
    appBar: {
        backgroundColor: theme.palette.background.paper,
        height: "max-content",
    },
    toggleNavigation: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        [theme.breakpoints.down('xs')]: {
            marginRight: theme.spacing(1),
        },
    },
    header: {
        height: "min-content",
        margin: "auto 0",
        color: theme.palette.text.primary,
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.8rem",
        },
    },
    navigationPanel: {
        flexGrow: 1,
    },
    controlElementsContainer: {
        margin: "0 10px 0 auto",
        [theme.breakpoints.down("xs")]: {
            marginRight: 0,
        }
    },
    logo: {
        margin: "auto 10px auto 0",
        fontSize: 40,
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
}));

const Header = () => {
    const classes = useStyles({darkMode: storeApp.darkMode});
    const {t} = useTranslation();

    return <>
        <Box display={"flex"}>
            <CssBaseline/>
            <AppBar className={classes.appBar}
                    position={"relative"}
            >
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => storeApp.toggleNavbar(true)}
                        className={clsx(classes.toggleNavigation, classes.darkMode)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Box display="flex"
                         alignItems="flex-center"
                         width={"100%"}>
                        <WorkOutline className={clsx(classes.logo, classes.darkMode)}/>
                        <Typography className={classes.header}
                                    component={"h1"}
                                    variant={"h6"}>
                            {t('header')}
                        </Typography>
                        <Box className={classes.controlElementsContainer}>
                            <ChangeLanguage />
                            <ToggleDarkMode />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    </>
}

export default observer(Header)