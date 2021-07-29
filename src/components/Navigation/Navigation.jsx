import React, {useState} from "react";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import storeApp from "../../store/storeApp";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PATH from "../../constants/path";
import {NavLink} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {observer} from "mobx-react";
import Hidden from "@material-ui/core/Hidden";
import MailIcon from "@material-ui/icons/Mail";
import PropTypes from "prop-types";
import ResponsiveDrawer from "../Header";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
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
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
}));


const Navigation = observer((props) => {

    const classes = useStyles();

    const { window } = props;

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



    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
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
        </div>
    );

    return (<>
    <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
            <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={storeApp.navBar}
                onClose={storeApp.toggle}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                {drawer}
            </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
            <Drawer
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
            >
                {drawer}
            </Drawer>
        </Hidden>
    </nav>
    </>)
});

Navigation.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Navigation;