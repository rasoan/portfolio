import React from "react";
import {useTranslation} from "react-i18next";
import {List, ListItem, Typography} from "@material-ui/core";

const BriefInformationAboutMe = () => {
    const {t} = useTranslation();
    let briefInformationAboutMe = t('briefInformationAboutMe', {returnObjects: true});
    briefInformationAboutMe = briefInformationAboutMe.map(object => {
        return <ListItem>
            <Typography>{object.header} </Typography>
            <Typography>{object.description}</Typography>
        </ListItem>
    });

    return <>
        <List>
            {briefInformationAboutMe}
        </List>

    </>
}

export default BriefInformationAboutMe;