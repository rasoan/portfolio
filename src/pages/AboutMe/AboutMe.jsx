import React from "react";
import storeApp from "../../store/storeApp";
import {observer} from "mobx-react";
import {useTranslation, Trans, withTranslation} from 'react-i18next';


const AboutMe = (props) => {
   // const { t } = props;
    console.log(props)
    console.log("helo")
    return <div>

    <span>обо мне </span>
        {/*{t('test')}*/}
    </div>;
}


export default AboutMe;