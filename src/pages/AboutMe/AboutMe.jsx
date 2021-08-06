import React from "react";
import i18next from "i18next";
import {useTranslation} from "react-i18next";


const AboutMe = () => {
    const {t} = useTranslation();

    return <div>
    <span>{t('navigation.profile')}</span>

    </div>;
}


export default AboutMe;