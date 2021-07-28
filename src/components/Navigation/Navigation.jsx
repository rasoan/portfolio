import React from "react";
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

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
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
}));


const Navigation = observer(() => {
    const themeMaterialUi = useTheme();
    const classes = useStyles();
    return (
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
    )
});

export default Navigation;