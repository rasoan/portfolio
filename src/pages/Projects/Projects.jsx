import React, {useEffect} from "react";
import FilterMenuOfMyProjects from "../../components/FilterMenuOfMyProjects/FilterMenuOfMyProjects";
import ListOfMyProjects from "../../components/ListOfMyProjects/ListOfMyProjects";
import {observer} from "mobx-react";


const Projects = () => {

    return <div>
        <FilterMenuOfMyProjects/>
        <ListOfMyProjects/>
    </div>
}

export default observer(Projects);