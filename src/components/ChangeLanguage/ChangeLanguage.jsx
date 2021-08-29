import {observer} from "mobx-react";
import React, {useState} from "react";
import storeApp from "../../store/storeApp";
import {Button, Menu, MenuItem} from "@material-ui/core";
import Translate from "@material-ui/icons/Translate";
import clsx from "clsx";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Typography from "@material-ui/core/Typography";
import languages from "../../translations/languages/languages";
import i18next from "../../translations/i18next";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    darkMode: {
        color: props => props.darkMode ? theme.palette.common.white : theme.palette.primary.main
    },
    imgChangeLanguageButton: {
        marginRight: 8,
        fontSize: 20,
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
        },
        [theme.breakpoints.down("xs")]: {
            marginRight: 2,
        }
    },
    arrowChangeLanguageButton: {
        fontSize: 20,
        marginLeft: "auto",
    },
    changeLanguageButton: {
        marginRight: 40,
        [theme.breakpoints.down("sm")]: {
            marginRight: 10,
        }
    },
    textChangeLanguageButton: {
        textTransform: "none",
        marginRight: 10,
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.8rem",
        },
        [theme.breakpoints.down("xs")]: {
            display: "none",
        }
    },
    rootTranslateItemLanguage: {
        minWidth: 180,
        paddingLeft: 30,
    },
}))

const ChangeLanguage = () => {
    const classes = useStyles()
    const [showMenuLanguage, setShowMenuLanguage] = useState(null)
    const changeLanguage = (language) => {
        storeApp.changeLanguage(language);
        setShowMenuLanguage(null);
    }

    return <>
        <Button startIcon={<Translate
            className={clsx(classes.imgChangeLanguageButton, classes.darkMode)}/>}
                endIcon={<KeyboardArrowDownIcon
                    className={clsx(classes.arrowChangeLanguageButton, classes.darkMode)}/>}
                className={classes.changeLanguageButton}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={event => setShowMenuLanguage(event.currentTarget)}>
            <Typography
                className={classes.textChangeLanguageButton}>{languages[i18next.language].name}</Typography>

        </Button>
        <Menu
            id="simple-menu"
            anchorEl={showMenuLanguage}
            keepMounted
            open={Boolean(showMenuLanguage)}
            onClose={() => setShowMenuLanguage(null)}
        >
            <MenuItem onClick={() => changeLanguage(languages["be-BE"])}
                      classes={{root: classes.rootTranslateItemLanguage}}>
                {languages["be-BE"].name}
            </MenuItem>
            <MenuItem onClick={() => changeLanguage(languages["en-EN"])}
                      classes={{root: classes.rootTranslateItemLanguage}}>
                {languages["en-EN"].name}
            </MenuItem>
            <MenuItem onClick={() => changeLanguage(languages["ru-RU"])}
                      classes={{root: classes.rootTranslateItemLanguage}}>
                {languages["ru-RU"].name}
            </MenuItem>
        </Menu>
    </>
}

export default observer(ChangeLanguage)