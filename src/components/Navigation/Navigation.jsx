import React from "react";
import Drawer from "@material-ui/core/Drawer";
import storeApp from "../../store/storeApp";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PATH from "../../constants/path";
import {NavLink} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {observer} from "mobx-react";
import Hidden from "@material-ui/core/Hidden";
import {PersonOutline, Whatshot} from "@material-ui/icons";
import {useTranslation} from "react-i18next";

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

const DrawerContent = () => {
    const {t} = useTranslation();

    return <div>
        <Divider/>
        <List>
            <ListItem onClick={() => storeApp.toggleNavbar(false)} to={PATH.PROFILE} component={NavLink} button>
                <ListItemIcon><PersonOutline/></ListItemIcon>
                <ListItemText primary={t('navigation.profile')}/>
            </ListItem>
            <ListItem onClick={() => storeApp.toggleNavbar(false)} to={PATH.PROJECTS} component={NavLink} button>
                <ListItemIcon><Whatshot/></ListItemIcon>
                <ListItemText primary={t('navigation.projects')}/>
            </ListItem>
        </List>
    </div>
}

const Navigation = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (<>
        <nav className={classes.drawer}
             aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={storeApp.navBar}
                    onClose={() => storeApp.toggleNavbar(false)}
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
};

export default observer(Navigation);