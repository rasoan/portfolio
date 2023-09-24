import React from "react";
import MyAvatar from "../../components/MyAvatar/MyAvatar";
import EssentialInformationAboutMe from "../../components/InformationAboutMe/EssentialInformationAboutMe/EssentialInformationAboutMe";
import BriefInformationAboutMe from "../../components/InformationAboutMe/BriefInformationAboutMe/BriefInformationAboutMe";
import style from "./style.module.scss";
import {Box, makeStyles} from "@material-ui/core";


const Profile = () => {

    return <>
        <Box display={"flex"} alignItems="center" justifyContent="center">
            <BriefInformationAboutMe />
            <MyAvatar />
        </Box>
        <Box>
            <EssentialInformationAboutMe/>
        </Box>
    </>;
}

export default Profile;