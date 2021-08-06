import React from "react";
import i18next from "i18next";
import {useTranslation} from "react-i18next";

const MyProjects = () => {
    const {t} = useTranslation();

    return <>
    <span>{t('navigation.projects')}</span>
    </>
}

export default MyProjects;