import React from "react";
import PATH from '../../constants/path';
import {Route, Switch} from 'react-router-dom';
import AboutMe from "../../pages/AboutMe";
import MyProjects from "../../pages/MyProjects";
import {Box, Container, makeStyles} from "@material-ui/core";
import Header from "../Header";
import storeApp from "../../store/storeApp";
import Navigation from "../Navigation";


const AppWithRoutes = (props) => {

    return (<>
        <Switch>
            <Route path={PATH.ABOUT_ME} component={() => <AboutMe/>}/>
            <Route path={PATH.MY_PROJECTS} component={MyProjects}/>
            <Route path={PATH.ALL} render={() => <div>всё!</div>}/>
        </Switch>
    </>);
}

export default AppWithRoutes;