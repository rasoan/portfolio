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


import PropTypes from 'prop-types';


import Hidden from '@material-ui/core/Hidden';




const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    // мои стили
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
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [language, setLanguage] = useState("Русский")
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [MyTheme, setTheme] = useState(false);

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



    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={storeApp.toggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
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
                                    checked={MyTheme}
                                    onChange={handleChangeTheme}
                                    color="primary"
                                    name="checkedA"
                                />}
                                label="Тёмная тема"
                            />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;








