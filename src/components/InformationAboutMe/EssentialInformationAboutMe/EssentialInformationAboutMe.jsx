import React from "react";
import {useTranslation} from "react-i18next";
import {Grid, List, ListItem, ListSubheader, makeStyles, Paper, Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import {observer} from "mobx-react";
import storeApp from "../../../store/storeApp";

const useStyles = makeStyles(theme => ({
    wrapper: {
        margin: theme.spacing(2, 0),
        padding: theme.spacing(2),
        overflow: "hidden",
    },
    tableRow: {
        width: "100%",
        flexWrap: "nowrap",
        padding: "15px 0",
        margin: 0,
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
        }
    },
    honest: {
        backgroundColor: props => props.darkMode ? theme.palette.grey[800] : theme.palette.grey[50],
    },
    notHonest: {
        backgroundColor: props => props.darkMode ? theme.palette.grey[900] : theme.palette.grey[200],
    },
    cellTittle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    tittle: {
        padding: "10px 0",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        [theme.breakpoints.down('lg')]: {
            fontSize: 18,
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 16,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
        },
    },
    tableContent: {
        fontSize: 20,
        [theme.breakpoints.down('lg')]: {
            fontSize: 18,
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 16,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
        },
    },
    listOfKeySkills: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        padding: 0,
        marginLeft: 0,
    },
    listOfKeySkillsItem: {
        width: "min-content",
        border: 0,
        borderRadius: 5,
        padding: 4,
        margin: theme.spacing(1, 0),
        backgroundColor: theme.palette.success.dark,
        color: "white",
        marginRight: theme.spacing(1),
    },
    tittleSkills: {
        marginBottom: theme.spacing(1),
        padding: 0,
    },
    listOfKeySkillsItemText: {
        width: "max-content",
        fontSize: 20,
        [theme.breakpoints.down('lg')]: {
            fontSize: 18,
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 16,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
        },
    },
}))

const Row = (props) => {
    const classes = useStyles({darkMode: storeApp.darkMode})
    const {row, index} = props

    return <Grid container
                 spacing={2}
                 className={clsx(classes.tableRow, {[classes.honest]: (index % 2 == 0)}, {[classes.notHonest]: (index % 2 !== 0)})}
    >
        <Grid item xs={12} md={4} lg={3} className={classes.cellTittle}>
            <Typography classes={{root: classes.tittle}}>
                {row.header}
            </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem/>
        <Grid item
              xs={12}
              md={8}
              lg={9}
        >
            {
                !Array.isArray(row.description) ?
                    <Typography className={classes.tableContent}>
                        {row.description}
                    </Typography> :
                    <List>
                        {
                            row.description.map((cellListItem, index, array) => {
                                return <React.Fragment key={`listItem-${index}`}>
                                    <ListItem style={{padding: 0}}>
                                        <Typography className={classes.tableContent}>
                                            {cellListItem}
                                            {array.length > 1 && ((index === array.length - 1) ? "." : row.columnDirectionList ? ";" : ",")}
                                        </Typography>
                                    </ListItem>
                                </React.Fragment>
                            })
                        }
                    </List>
            }
        </Grid>
    </Grid>
}

const EssentialInformationAboutMe = () => {
    const classes = useStyles({darkMode: storeApp.darkMode});
    const {t} = useTranslation();
    let essentialInformationAboutMe = t('profilePage.essentialInformationAboutMe', {returnObjects: true});
    let keySkills = t('profilePage.keySkills', {returnObjects: true})

    return <>
        <Paper elevation={3}
               classes={{root: classes.wrapper}}>
            {
                essentialInformationAboutMe.map((row, index) => {
                    return <React.Fragment key={`gridItem-${index}`}>
                        <Row row={row} index={index}/>
                    </React.Fragment>
                })
            }
        </Paper>
        <Paper className={classes.wrapper}
               elevation={3}>
            <Typography classes={{root: clsx(classes.tittle, classes.tittleSkills)}}>
                {keySkills.header}
            </Typography>
            <List aria-labelledby="nested-list-subheader"
                  classes={{root: classes.listOfKeySkills}}>
                {
                    keySkills.description.sort().map((skill, index) => {
                        return <React.Fragment key={`skillsItem-${index}`}>
                            <ListItem className={classes.listOfKeySkillsItem}>
                                <Typography className={classes.listOfKeySkillsItemText}>
                                    {skill}
                                </Typography>
                            </ListItem>
                        </React.Fragment>
                    })
                }
            </List>
        </Paper>
    </>
}

export default observer(EssentialInformationAboutMe)