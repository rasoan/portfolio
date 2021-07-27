import React from "react";
import PATH from '../../constants/path';
import {Route, Switch} from 'react-router-dom';
import AboutMe from "../../pages/AboutMe";
import MyProjects from "../../pages/MyProjects";
import {Box, Container, makeStyles} from "@material-ui/core";
import Header from "../Header";

const useStyles = makeStyles(theme => ({
    wrapper: {
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
        padding: 0,
    }
}));

const AppWithRoutes = () => {
    const classes = useStyles();

    return (<>
        <Container
            className={classes.wrapper}
            maxWidth={"xl"}
             minHeight={"100vh"}>
            <Header />
            <Container
                className={classes.mainContainerContent}>
                <div style={{flexGrow: 1}}>
                    <Switch>
                        <Route path={PATH.ABOUT_ME} render={() => <div>hello</div>} />
                        <Route path={PATH.MY_PROJECTS} component={MyProjects} />
                        <Route path={PATH.ALL} render={() => <div>всё!</div>} />
                    </Switch>
                </div>
            </Container>
        </Container>
    </>);
}

export default AppWithRoutes;