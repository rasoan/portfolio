import React from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import {NavLink} from "react-router-dom";
import PATH from "../../constants/path";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

const Header = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (<header>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">
                    <img src="../../../public/logo.png" alt="" width="30" height="24"
                         className="d-inline-block align-text-top" />
                        Bootstrap
                </span>
            </div>
        </nav>
        <Paper square className={classes.root}>
            <Tabs
                value={value}
                onChange={(event,newValue) => setValue(newValue)}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
            >
                <Tab icon={<PhoneIcon/>}
                     label="RECENTS"
                     component={NavLink}
                     to={PATH.ABOUT_ME}/>
                <Tab icon={<FavoriteIcon/>}
                     label="FAVORITES"
                     component={NavLink}
                     to={PATH.MY_PROJECTS}/>
            </Tabs>
        </Paper>
    </header>);
}

export default Header;