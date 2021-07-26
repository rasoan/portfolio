import React from "react";
import PATH from '../../constants/path';
import {Route, Switch} from 'react-router-dom';
import AboutMe from "../../pages/AboutMe";
import MyProjects from "../../pages/MyProjects";

const AppWithRoutes = () => {
    return (<>
        <Switch>
            <Route path={"PATH.AUTHORIZATION"} render={() => <AboutMe />} />
            <Route path={"aboutMe"} render={() => <AboutMe />} />
            <Route path={"myProjects"} render={() => <MyProjects />} />
        </Switch>
    </>);
}

export default AppWithRoutes;