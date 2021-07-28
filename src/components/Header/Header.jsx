import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import WorkOutline from '@material-ui/icons/WorkOutline';
import Translate from '@material-ui/icons/Translate';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {NavLink} from "react-router-dom";
import PATH from "../../constants/path";

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import storeApp from "../../store/storeApp";
import { observer } from "mobx-react";
import {
    Box,
    Button,
    FormControlLabel,
    Menu,
    MenuItem,
    Switch
} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    navigationPanel: {
        flexGrow: 1,
    },
    logoImage: {
        marginRight: 10,
        fontSize: 40,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    translateImg: {
        marginRight: 8,
    },
    translateButton: {
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
    ///// стили материала
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

const Header = observer(() => {
    const classes = useStyles();
    const [theme, setTheme] = useState(false);
    const [language, setLanguage] = useState("Русский")
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChangeTheme = (event) => {
        setTheme(event.target.checked);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const changeLanguage = (language) => {
        setLanguage(language);
        handleClose();
    }

    // js материала
    const themeMaterialUi = useTheme();






    return (<div className={classes.root}>
            <CssBaseline/>
            <AppBar

                className={clsx(classes.appBar, {
                    [classes.appBarShift]: storeApp.getNavBar(),
                })}
                color={"default"}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => storeApp.changeNavBar(true)}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: storeApp.getNavBar(),
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <div className={classes.navigationPanel}>
                        <Box display="flex" alignItems="flex-end" py={2} pl={6}>
                            <WorkOutline className={classes.logoImage} color="primary"/>
                            <Typography component={"h1"} variant={"h6"}>Портфолио</Typography>
                            <Box ml={"auto"} mr={2}>

                                <Button className={classes.translateButton}
                                        aria-controls="simple-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}>
                                    <Translate className={classes.translateImg} color={"primary"}/>
                                    {language}
                                    <KeyboardArrowDownIcon className={classes.translateArrow} color={"primary"}/>
                                </Button>

                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem classes={{root: classes.rootTranslateItemLanguage}}>
                                        <Typography onClick={() => changeLanguage("English")}>English</Typography>
                                    </MenuItem>
                                    <MenuItem classes={{root: classes.rootTranslateItemLanguage}}>
                                        <Typography onClick={() => changeLanguage("Русский")}>Русский</Typography>
                                    </MenuItem>
                                </Menu>
                                <FormControlLabel
                                    control={<Switch
                                        checked={theme}
                                        onChange={handleChangeTheme}
                                        color="primary"
                                        name="checkedA"
                                    />}
                                    label="Тёмная тема"
                                />
                            </Box>
                        </Box>


                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: storeApp.getNavBar(),
                    [classes.drawerClose]: !storeApp.getNavBar(),
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: storeApp.getNavBar(),
                        [classes.drawerClose]: !storeApp.getNavBar(),
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={() => storeApp.changeNavBar(false)}>
                        {themeMaterialUi.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                        <ListItem to={PATH.ABOUT_ME} component={NavLink} button>
                            <ListItemIcon><InboxIcon/></ListItemIcon>
                            <ListItemText primary={"Личная информация"}  />
                        </ListItem>
                    <ListItem to={PATH.MY_PROJECTS} component={NavLink} button>
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText primary={"Мои проекты"}  />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
})

export default Header;






