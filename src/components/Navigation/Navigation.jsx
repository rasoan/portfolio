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
    },
}));

const DrawerContent = ({storeApp}) => {
    const classes = useStyles();
    return <div>
        <div className={classes.toolbar}/>
        <Divider/>
        <List>
            <ListItem onClick={() => storeApp.toggle(false)} to={PATH.ABOUT_ME} component={NavLink} button>
                <ListItemIcon><InboxIcon/></ListItemIcon>
                <ListItemText primary={"Личная информация"}/>
            </ListItem>
            <ListItem onClick={() => storeApp.toggle(false)} to={PATH.MY_PROJECTS} component={NavLink} button>
                <ListItemIcon><InboxIcon/></ListItemIcon>
                <ListItemText primary={"Мои проекты"}/>
            </ListItem>
        </List>
    </div>
}


const Navigation = observer((props) => {
    const classes = useStyles();
    const theme = useTheme();

    return (<>
        <nav className={classes.drawer}
             aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <Drawer
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
                    <DrawerContent storeApp={storeApp} />
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
                    <DrawerContent storeApp={storeApp} />
                </Drawer>
            </Hidden>
        </nav>
    </>)
});

export default Navigation;