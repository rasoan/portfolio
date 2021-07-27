import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import WorkOutline from '@material-ui/icons/WorkOutline';
import Translate from '@material-ui/icons/Translate';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {NavLink} from "react-router-dom";
import PATH from "../../constants/path";
import logo from "../../images/logo.png";
import {Box, Button, FormControl, InputLabel, Menu, MenuItem, Select, Switch, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    logo: {
        marginRight: 10,
        fontSize: 30,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    translateImg: {
        marginRight: 8,
    },
    translateButton: {
        minWidth: 160,
    },
    translateArrow: {
        marginLeft: "auto",
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
        <Paper>
            <Box display="flex" alignItems="flex-end" py={2} pl={6}>
                <WorkOutline className={classes.logo} color="primary" />
                <Typography component={"h1"} variant={"h5"}>Портфолио</Typography>
                <Switch
                    checked={theme}
                    onChange={handleChangeTheme}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <Button className={classes.translateButton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <Translate className={classes.translateImg} color={"primary"} />
                    {language}
                    <KeyboardArrowDownIcon className={classes.translateArrow} color={"primary"} />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem>
                        <Typography onClick={() => changeLanguage("English")}>English</Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography onClick={() => changeLanguage("Русский")}>Русский</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        </Paper>
        <Paper square className={classes.root}>
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