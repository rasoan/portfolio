import {observer} from "mobx-react";
import React, {useState} from "react";
import storeApp from "../../store/storeApp";
import {Button, Menu, MenuItem} from "@material-ui/core";
import Translate from "@material-ui/icons/Translate";
import clsx from "clsx";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import languages from "../../translations/languages/languages";
import i18next from "../../translations/i18next";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    darkMode: {
        color: props => props.darkMode ? theme.palette.common.white : theme.palette.primary.main
    },
    showModal: {
        marginRight: 40,
        [theme.breakpoints.down("sm")]: {
            marginRight: 10,
        }
    },
    showModalText: {
        textTransform: "none",
        marginRight: 10,
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.8rem",
        },
    },
    showModalStartIcon: {
        marginRight: 8,
        fontSize: 20,
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
        },
        [theme.breakpoints.down("xs")]: {
            marginRight: 2,
        }
    },
    showModalEndIcon: {
        fontSize: 20,
        marginLeft: "auto",
    },
    menuItem: {
        minWidth: 180,
        paddingLeft: 30,
    },
}))

const ChangeLanguage = () => {
    const classes = useStyles({darkMode: storeApp.darkMode})
    const [showMenuLanguage, setShowMenuLanguage] = useState(null)
    const changeLanguage = (language) => {
        storeApp.changeLanguage(language);
        setShowMenuLanguage(null);
    }

    return <>
        <Button startIcon={<Translate />}
                endIcon={<KeyboardArrowDownIcon />}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={event => setShowMenuLanguage(event.currentTarget)}
                classes={{
                    root: classes.showModal,
                    text: classes.showModalText,
                    startIcon: clsx(classes.showModalStartIcon, classes.darkMode),
                    endIcon: clsx(classes.showModalEndIcon, classes.darkMode),
                }}
        >
            {languages[i18next.language].name}
        </Button>
        <Menu
            id="simple-menu"
            anchorEl={showMenuLanguage}
            keepMounted
            open={showMenuLanguage}
            onClose={() => setShowMenuLanguage(null)}
        >
            <MenuItem onClick={() => changeLanguage(languages["be-BE"])}
                      classes={{
                          root: classes.menuItem
                      }}
            >
                {languages["be-BE"].name}
            </MenuItem>
            <MenuItem onClick={() => changeLanguage(languages["en-EN"])}
                      classes={{
                          root: classes.menuItem
                      }}
            >
                {languages["en-EN"].name}
            </MenuItem>
            <MenuItem onClick={() => changeLanguage(languages["ru-RU"])}
                      classes={{
                          root: classes.menuItem
                      }}
            >
                {languages["ru-RU"].name}
            </MenuItem>
        </Menu>
    </>
}

export default observer(ChangeLanguage)