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
    mySwgIconRoot: {
        width: 20,
        height: 20,
    },
    themeBlackAndWhiteFormControl: {
        marginRight: 0,
    },
    switchBase: {
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
    const classes = useStyles()

    return <Switch
        icon={<Brightness4Icon classes={{root: classes.mySwgIconRoot}}/>}
        checkedIcon={<Brightness7Icon classes={{root: classes.mySwgIconRoot}}/>}
        classes={{
            root: classes.themeBlackAndWhiteFormControl,
            switchBase: clsx(classes.darkMode, classes.switchBase),
            track: classes.switchTrack,
        }}
        checked={storeApp.darkMode}
        onChange={() => storeApp.toggleDarkMode()}
        name="Theme"
    />
}

export default observer(ToggleDarkMode)