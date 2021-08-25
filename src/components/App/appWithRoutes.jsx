import React from "react";
import PATH from '../../constants/path';
import {Route, Switch} from 'react-router-dom';
import Profile from "../../pages/Profile";
import Projects from "../../pages/Projects";

const AppWithRoutes = () => {

    return (<>
        <Switch>
            <Route path={PATH.PROFILE} component={() => <Profile/>}/>
            <Route path={PATH.PROJECTS} component={Projects}/>
            <Route path={PATH.ALL} render={() => <Profile/>}/>
        </Switch>
    </>);
}

export default AppWithRoutes;