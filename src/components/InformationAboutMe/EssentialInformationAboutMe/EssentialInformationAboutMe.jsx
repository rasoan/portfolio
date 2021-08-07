import React from "react";
import style from "./syle.module.scss";
import {useTranslation} from "react-i18next";
import {List, ListItem, Typography} from "@material-ui/core";

const EssentialInformationAboutMe = () => {
    const {t} = useTranslation();
    let essentialInformationAboutMe = t('essentialInformationAboutMe', {returnObjects: true});
    essentialInformationAboutMe = essentialInformationAboutMe.map(object => {
        return <ListItem>
            <Typography>{object.header} </Typography>
            <Typography>{object.description}</Typography>
        </ListItem>
    });

    let keySkills = t('keySkills', {returnObjects: true});
    keySkills = keySkills.map(object => {
        return <ListItem>
            <Typography>{object.header} </Typography>
            <List className={style.listOfKeySkills}>
                {object.description.map(object => {
                    return <ListItem>
                        {object}
                    </ListItem>
                })}
            </List>
        </ListItem>
    });

    return <List>
        {essentialInformationAboutMe}
        <ListItem>
            <List>
                {keySkills}
            </List>
        </ListItem>
    </List>
}

export default EssentialInformationAboutMe;