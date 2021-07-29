import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import WorkOutline from '@material-ui/icons/WorkOutline';
import Translate from '@material-ui/icons/Translate';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import storeApp from "../../store/storeApp";
import {Box} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {FormControlLabel} from "@material-ui/core";
import {Menu} from "@material-ui/core";
import {MenuItem} from "@material-ui/core";
import {Switch} from "@material-ui/core";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    wrapperAppBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    buttonToggleNavigationPanel: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // мои стили
    header: {
        height: "min-content",
        margin: "auto 0",
    },
    navigationPanel: {
        flexGrow: 1,
    },
    logoImage: {
        marginRight: 10,
        fontSize: 40,
    },
    translateImg: {
        marginRight: 8,
    },
    translateShowButton: {
        minWidth: 160,
        marginRight: 40,
    },
    translateArrow: {
        marginLeft: "auto",
    },
    rootTranslateItemLanguage: {
        minWidth: 180,
        paddingLeft: 30,
    },
}));

function Header() {
    const classes = useStyles();
    const [language, setLanguage] = useState("Русский")
    const [showMenuLanguage, setShowMenuLanguage] = useState(null);
    const [theme, setTheme] = useState(false);

    const handleChangeLanguage = (language) => {
        setLanguage(language);
        setShowMenuLanguage(null)
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed"
                    className={classes.wrapperAppBar}
                    color={"default"}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => storeApp.toggle(true)}
                        className={classes.buttonToggleNavigationPanel}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Box display="flex" alignItems="flex-center" width={"100%"}>
                        <WorkOutline className={classes.logoImage} color="primary"/>
                        <Typography className={classes.header} component={"h1"} variant={"h6"}>Портфолио</Typography>
                        <Box ml={"auto"} mr={2}>
                            <Button className={classes.translateShowButton}
                                    aria-controls="simple-menu"
                                    aria-haspopup="true"
                                    onClick={event => setShowMenuLanguage(event.currentTarget)}>
                                <Translate className={classes.translateImg} color={"primary"}/>
                                {language}
                                <KeyboardArrowDownIcon className={classes.translateArrow} color={"primary"}/>
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={showMenuLanguage}
                                keepMounted
                                open={Boolean(showMenuLanguage)}
                                onClose={() => setShowMenuLanguage(null)}
                            >
                                <MenuItem onClick={() => handleChangeLanguage("English")}
                                          classes={{root: classes.rootTranslateItemLanguage}}>
                                    English
                                </MenuItem>
                                <MenuItem onClick={() => handleChangeLanguage("Русский")}
                                          classes={{root: classes.rootTranslateItemLanguage}}>
                                    Русский
                                </MenuItem>
                            </Menu>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={theme}
                                        onChange={event => setTheme(event.target.checked)}
                                        color="primary"
                                        name="checkedA"
                                    />
                                }
                                label="Тёмная тема"
                            />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;