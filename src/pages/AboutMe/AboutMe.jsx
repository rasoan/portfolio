import React from "react";
import i18next from "../../translations/i18next/i18next";
import storeApp from "../../store/storeApp";
import {observer} from "mobx-react";


const AboutMe = observer(() => {

    console.log("helo")
    return <div>

    <span>обо мне  {i18next.t('key.0.a')}</span>
    </div>;
})


export default AboutMe;