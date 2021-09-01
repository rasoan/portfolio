import {observer} from "mobx-react";
import {Switch} from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import clsx from "clsx";
import storeApp from "../../store/storeApp";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    darkMode: {
        color: props => props.darkMode ? theme.palette.common.white : theme.palette.primary.main
    },
    icon: {
        width: 20,
        height: 20,
    },
    switch: {
        marginRight: 0,
    },
    mySwitchBase: {
        '&.Mui-checked': {
            color: theme.palette.common.white,
            transform: "none",
        }
    },
    switchTrack: {
        display: "none",
    },
}))

const ToggleDarkMode = () => {
    const classes = useStyles({darkMode: storeApp.darkMode})

    return <Switch icon={<Brightness4Icon className={classes.icon} />}
                   checkedIcon={<Brightness7Icon className={classes.icon} />}
                   checked={storeApp.darkMode}
                   onChange={() => storeApp.toggleDarkMode()}
                   name="Theme"
                   classes={{
                       root: classes.switch,
                       switchBase: clsx(classes.mySwitchBase, classes.darkMode),
                       track: classes.switchTrack,
                   }}
    />
}

export default observer(ToggleDarkMode)