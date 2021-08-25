import React from "react";
import AppWithRoutes from "./appWithRoutes";
import {Container, makeStyles} from "@material-ui/core";
import Navigation from "../Navigation";
import Header from "../Header";
import Footer from "../Footer";
import { withTranslation } from 'react-i18next';
import theme from "../../Theme/Theme";
import {ThemeProvider} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    wrapper: {
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: 0,
    },
    mainContainerContent: {
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
    const classes = useStyles();

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

export default withTranslation()(App);