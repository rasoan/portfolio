import React from "react";
import PATH from '../../constants/path';
import {Route, Switch} from 'react-router-dom';
import AboutMe from "../../pages/AboutMe";
import MyProjects from "../../pages/MyProjects";
import {Box, Container, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    mainContainerContent: {
        display: "flex",
        justifyContent: "center",
        padding: 0,
        [theme.breakpoints.up('xs')]: {
            width: 200,
        },
        [theme.breakpoints.up('sm')]: {
            width: 400,
        },
        [theme.breakpoints.up('md')]: {
            width: 700,
        },
        [theme.breakpoints.up('lg')]: {
            width: 1000,
        },
        [theme.breakpoints.up('xl')]: {
            width: 1200,
        },
    }
}));

const AppWithRoutes = () => {
    const classes = useStyles();

    return (<>
        <Box className={classes.wrapper}
             minHeight={"100vh"}>
            {"HEADER"}
            <Container
                className={classes.mainContainerContent}>
                {"Navigation"}
                <div style={{flexGrow: 1}}>
                    <Switch>
                        <Route path={PATH.ABOUT_ME} render={() => <AboutMe/>}/>
                        <Route path={PATH.MY_PROJECTS} render={() => <MyProjects/>}/>
                    </Switch>
                </div>
            </Container>
        </Box>
    </>);
}

export default AppWithRoutes;