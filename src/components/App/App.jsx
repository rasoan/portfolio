import React from "react";
import AppWithRoutes from "./appWithRoutes";
import {Container, makeStyles} from "@material-ui/core";
import Navigation from "../Navigation";
import Header from "../Header";
import Footer from "../Footer";
import {withTranslation} from 'react-i18next';
import {themeDarkMode, themeDefault} from "../../Theme/Theme";
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import storeApp from "../../store/storeApp";
import {observer} from "mobx-react";


const useStyles = makeStyles(theme => ({
    wrapper: {
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: 0,
    },
    mainContainerContent: {
        backgroundColor: props => props.palette.background.default,
        flexGrow: 1,
        padding: theme.spacing(4),
        [theme.breakpoints.down('lg')]: {
            padding: theme.spacing(3),
        },
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(2),
        },
    },
    toolbar: theme.mixins.toolbar,
}));

const App = () => {
    const theme =  createTheme(storeApp.darkMode ? {...themeDefault, palette: themeDarkMode.palette}: {...themeDefault})
    const classes = useStyles(theme);

    return (<>
        <ThemeProvider theme={theme}>
            <Container
                className={classes.wrapper}
                maxWidth={"xl"}
            >
                <Header/>
                <div style={{display: "flex", flexGrow: 1}}>
                    <Navigation/>
                    <main className={classes.mainContainerContent}>
                        <AppWithRoutes/>
                    </main>
                </div>
                <Footer/>
            </Container>
        </ThemeProvider>
    </>);
};

export default withTranslation()(observer(App));