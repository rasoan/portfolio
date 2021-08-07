import React from "react";
import MyAvatar from "../../components/MyAvatar";
import EssentialInformationAboutMe from "../../components/InformationAboutMe/EssentialInformationAboutMe";
import BriefInformationAboutMe from "../../components/InformationAboutMe/BriefInformationAboutMe";

const Profile = () => {

    return <div>
        <div>
            <MyAvatar/>
            <BriefInformationAboutMe/>
        </div>
        <BriefInformationAboutMe />
    </div>;
}

export default Profile;