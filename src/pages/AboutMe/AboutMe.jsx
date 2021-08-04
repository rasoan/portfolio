import React from "react";
import storeApp from "../../store/storeApp";
import {observer} from "mobx-react";
import { useTranslation, Trans } from 'react-i18next';


const AboutMe = () => {
    const { t, i18n } = useTranslation();
    console.log("helo")
    return <div>

    <span>обо мне  {i18n.t('key.0.a')}</span>
    </div>;
}


export default AboutMe;