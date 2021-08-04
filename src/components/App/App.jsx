import React, {createContext} from "react";
import AppWithRoutes from "./appWithRoutes";
import {Container, makeStyles} from "@material-ui/core";
import Navigation from "../Navigation";
import Header from "../Header";
import Footer from "../Footer";
import {observer} from "mobx-react";
import { withTranslation } from 'react-i18next';

const MyContext = createContext({});




const useStyles = makeStyles(theme => ({
    wrapper: {
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: 0,
        // [theme.breakpoints.up('xs')]: {
        //     maxWidth: 576,
        // },
        // [theme.breakpoints.up('sm')]: {
        //     maxWidth: 768,
        // },
        // [theme.breakpoints.up('md')]: {
        //     maxWidth: 1192,
        // },
        // [theme.breakpoints.up('lg')]: {
        //     maxWidth: 1400,
        // },
        // [theme.breakpoints.up('xl')]: {
        //     maxWidth: 1600,
        // },
    },
    mainContainerContent: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));

const App = observer((props) => {
    const classes = useStyles();

    return (<>
        <MyContext.Provider value={{i: 1}}>
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
        </MyContext.Provider>
    </>);
});

export default withTranslation()(App);