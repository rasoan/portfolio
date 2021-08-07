import React from "react";
import PATH from '../../constants/path';
import {Route, Switch} from 'react-router-dom';
import Profile from "../../pages/Profile";
import Projects from "../../pages/Projects";

const AppWithRoutes = (props) => {
    return (<>
        <Switch>
            <Route path={PATH.PROFILE} component={() => <Profile/>}/>
            <Route path={PATH.PROJECTS} component={Projects}/>
            <Route path={PATH.ALL} render={() => <div>всё!</div>}/>
        </Switch>
    </>);
}

export default AppWithRoutes;