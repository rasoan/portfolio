import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import WorkOutline from '@material-ui/icons/WorkOutline';
import Translate from '@material-ui/icons/Translate';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {NavLink} from "react-router-dom";
import PATH from "../../constants/path";

import {
    Box,
    Button,
    FormControlLabel,
    Menu,
    MenuItem,
    Switch,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    navigationPanel: {
        flexGrow: 1,
    },
    logoImage: {
        marginRight: 10,
        fontSize: 40,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    translateImg: {
        marginRight: 8,
    },
    translateButton: {
        minWidth: 160,
        marginRight: 40,
    },
    translateArrow: {
        marginLeft: "auto",
    },
    rootTranslateItemLanguage: {
        minWidth: 180,
        paddingLeft: 30,
    }
}));

const Header = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [theme, setTheme] = useState(false);
    const [language, setLanguage] = useState("Русский")
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChangeTheme = (event) => {
        setTheme(event.target.checked);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const changeLanguage = (language) => {
        setLanguage(language);
        handleClose();
    }


    return (<header>
        <Paper square className={classes.navigationPanel}>
            <Box display="flex" alignItems="flex-end" py={2} pl={6}>
                <WorkOutline className={classes.logoImage} color="primary"/>
                <Typography component={"h1"} variant={"h6"}>Портфолио</Typography>
                <Box ml={"auto"} mr={2}>
                        <Button className={classes.translateButton}
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleClick}>
                            <Translate className={classes.translateImg} color={"primary"}/>
                            {language}
                            <KeyboardArrowDownIcon className={classes.translateArrow} color={"primary"}/>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem classes={{root: classes.rootTranslateItemLanguage}}>
                                <Typography onClick={() => changeLanguage("English")}>English</Typography>
                            </MenuItem>
                            <MenuItem classes={{root: classes.rootTranslateItemLanguage}}>
                                <Typography onClick={() => changeLanguage("Русский")}>Русский</Typography>
                            </MenuItem>
                        </Menu>

                    <FormControlLabel
                        control={<Switch
                            checked={theme}
                            onChange={handleChangeTheme}
                            color="primary"
                            name="checkedA"
                        />}
                        label="Тёмная тема"
                    />
                </Box>
            </Box>


            <Tabs
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                aria-label="icon label tabs example"
            >
                <Tab label="Обо мне"
                     component={NavLink}
                     to={PATH.ABOUT_ME}/>
                <Tab label="Выполненные проекты"
                     component={NavLink}
                     to={PATH.MY_PROJECTS}/>
            </Tabs>
        </Paper>
    </header>);
}

export default Header;