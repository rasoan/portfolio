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
import languages from "../../translations/languages/languages";
import i18next from "i18next";


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    wrapperAppBar: {



        //
        height: "max-content",
    },
    buttonToggleNavigationPanel: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
        [theme.breakpoints.down('xs')]: {
            marginRight: theme.spacing(1),
        },
    },
    // мои стили
    header: {
        height: "min-content",
        margin: "auto 0",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.8rem",
        },

        // [theme.breakpoints.up('xs')]: {
        //     maxWidth: 576,
        // },
        // [theme.breakpoints.up('sm')]: {
        //     maxWidth: 768,
        // },
        // [theme.breakpoints.up('md')]: {
        //     maxWidth: 1192,
        // },
        // [theme.breakpoints.up('lg')]: {
        //     maxWidth: 1400,
        // },
        // [theme.breakpoints.up('xl')]: {
        //     maxWidth: 1600,
        // },
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
    logoImage: {
        margin: "auto 10px auto 0",
        fontSize: 40,
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
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
    arrowChangeLanguageButton: {
        fontSize: 20,
        marginLeft: "auto",
    },
    rootTranslateItemLanguage: {
        minWidth: 180,
        paddingLeft: 30,
    },
    themeBlackAndWhiteFormControl: {
        marginRight: 0,
    },
    themeBlackAndWhiteLabel: {
        marginRight: 0,
        [theme.breakpoints.down("sm")]: {
            display: "none",
        }
    }
}));

function Header() {
    const classes = useStyles();
    const [showMenuLanguage, setShowMenuLanguage] = useState(null);
    const [theme, setTheme] = useState(false);
    const changeLanguage = (language) => {
        storeApp.changeLanguage(language);
        setShowMenuLanguage(null);
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position={"relative"}
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
                        <Typography className={classes.header} component={"h1"} variant={"h6"}>{i18next.t('header')}</Typography>
                        <Box className={classes.controlElementsContainer}>
                            <Button className={classes.changeLanguageButton}
                                    aria-controls="simple-menu"
                                    aria-haspopup="true"
                                    onClick={event => setShowMenuLanguage(event.currentTarget)}>
                                <Translate className={classes.imgChangeLanguageButton} color={"primary"}/>
                                <Typography className={classes.textChangeLanguageButton}>{storeApp.getLanguage().name}</Typography>
                                <KeyboardArrowDownIcon className={classes.arrowChangeLanguageButton} color={"primary"}/>
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={showMenuLanguage}
                                keepMounted
                                open={Boolean(showMenuLanguage)}
                                onClose={() => setShowMenuLanguage(null)}
                            >
                                <MenuItem onClick={() => changeLanguage(languages["en-EN"])}
                                          classes={{root: classes.rootTranslateItemLanguage}}>
                                    {languages["en-EN"].name}
                                </MenuItem>
                                <MenuItem onClick={() => changeLanguage(languages["ru-RU"])}
                                          classes={{root: classes.rootTranslateItemLanguage}}>
                                    {languages["ru-RU"].name}
                                </MenuItem>
                            </Menu>
                            <FormControlLabel
                                className={classes.themeBlackAndWhiteFormControl}
                                control={
                                    <Switch
                                        checked={theme}
                                        onChange={event => setTheme(event.target.checked)}
                                        color="primary"
                                        name="checkedA"
                                    />
                                }
                                label={<Typography className={classes.themeBlackAndWhiteLabel}>Тёмная тема</Typography>}
                            />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;