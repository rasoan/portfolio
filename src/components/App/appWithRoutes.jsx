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
        display: "flex",
        justifyContent: "center",

            flexGrow: 1,
            padding: theme.spacing(12, 0, 0, 2),
    }
}));

const AppWithRoutes = (props) => {
    const classes = useStyles();
console.log(props.storeApp);
    return (<>
        <Container
            className={classes.wrapper}
            maxWidth={"xl"}
            minHeight={"100vh"}>
            <Header />
            <Navigation />
            <Container
                className={classes.mainContainerContent}>
                <div style={{flexGrow: 1}}>
                    <Switch>
                        <Route path={PATH.ABOUT_ME} component={() => <AboutMe />} />
                        <Route path={PATH.MY_PROJECTS} component={MyProjects} />
                        <Route path={PATH.ALL} render={() => <div>всё!</div>} />
                    </Switch>
                </div>
            </Container>
        </Container>
    </>);
}

export default AppWithRoutes;