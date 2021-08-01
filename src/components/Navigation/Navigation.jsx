import React, {useState} from "react";
import Drawer from "@material-ui/core/Drawer";
import storeApp from "../../store/storeApp";
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
import PropTypes from "prop-types";
import {Person, PersonOutline, Whatshot} from "@material-ui/icons";
import WorkOutline from "@material-ui/icons/WorkOutline";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        position: "relative",
    },
    wrapperNavigationPanelDesktop: {
      height: "100%",
    },
    navigationPanelDesktop: {
        height: "100%",
    },
    myDrawerPaperDesctop: {
        position: "static",
    }

}));

const DrawerContent = ({storeApp}) => {
    const classes = useStyles();
    return <div>
        <Divider/>
        <List>
            <ListItem onClick={() => storeApp.toggle(false)} to={PATH.ABOUT_ME} component={NavLink} button>
                <ListItemIcon><PersonOutline/></ListItemIcon>
                <ListItemText primary={"Профайл"}/>
            </ListItem>
            <ListItem onClick={() => storeApp.toggle(false)} to={PATH.MY_PROJECTS} component={NavLink} button>
                <ListItemIcon><Whatshot/></ListItemIcon>
                <ListItemText primary={"Проекты"}/>
            </ListItem>
        </List>
    </div>
}


const Navigation = observer((props) => {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();

    const container = window !== undefined ? () => window().document.body : undefined;
    return (<>
        <nav className={classes.drawer}
             aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={storeApp.navBar}
                    onClose={() => storeApp.toggle(false)}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <DrawerContent storeApp={storeApp} />
                </Drawer>
            </Hidden>
            <Hidden className={classes.wrapperNavigationPanelDesktop} xsDown implementation="css" >
                <Drawer
                    className={classes.navigationPanelDesktop}
                    classes={{
                        paper: `${classes.drawerPaper} ${classes.myDrawerPaperDesctop}`,
                    }}
                    variant="permanent"
                    open
                >

                    <DrawerContent storeApp={storeApp} />

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