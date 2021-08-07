import React from "react";
import MyAvatar from "../../components/MyAvatar";
import BriefInformationAboutMe from "../../components/InformationAboutMe/BriefInformationAboutMe";
import FullInformationAboutMe from "../../components/InformationAboutMe/FullInformationAboutMe";

const Profile = () => {

    return <div>
        <div>
            <MyAvatar/>
            <BriefInformationAboutMe/>
        </div>
        <FullInformationAboutMe />
    </div>;
}

export default Profile;