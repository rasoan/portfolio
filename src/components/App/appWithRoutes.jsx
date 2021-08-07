import React from "react";
import PATH from '../../constants/path';
import {Route, Switch} from 'react-router-dom';
import AboutMe from "../../pages/AboutMe";
import MyProjects from "../../pages/MyProjects";

const AppWithRoutes = (props) => {
    return (<>
        <Switch>
            <Route path={PATH.PROFILE} component={() => <AboutMe/>}/>
            <Route path={PATH.PROJECTS} component={MyProjects}/>
            <Route path={PATH.ALL} render={() => <div>всё!</div>}/>
        </Switch>
    </>);
}

export default AppWithRoutes;