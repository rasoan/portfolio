import React from "react";
import PATH from '../../constants/path';
import {Route, Switch} from 'react-router-dom';
import AboutMe from "../../pages/AboutMe";
import MyProjects from "../../pages/MyProjects";
import {Box, Container, makeStyles} from "@material-ui/core";
import Header from "../Header";
import storeApp from "../../store/storeApp";
import Navigation from "../Navigation";

const useStyles = makeStyles(theme => ({
    wrapper: {
        position: "relative",
        display: "flex",
        padding: 0,
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
    mainContainerContent: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));

const AppWithRoutes = (props) => {
    const classes = useStyles();


    return (<>
        <Container
            className={classes.wrapper}
            maxWidth={"xl"}
            minHeight={"100vh"}>
            <Navigation/>
            <div style={{width: '100%'}}>
                <Header/>
                <main className={classes.mainContainerContent}>
                    <div className={classes.toolbar}/>
                    <div style={{flexGrow: 1}}>
                        <Switch>
                            <Route path={PATH.ABOUT_ME} component={() => <AboutMe/>}/>
                            <Route path={PATH.MY_PROJECTS} component={MyProjects}/>
                            <Route path={PATH.ALL} render={() => <div>всё!</div>}/>
                        </Switch>
                    </div>
                </main>
            </div>
        </Container>
    </>);
}

export default AppWithRoutes;