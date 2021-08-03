import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter} from "react-router-dom";
import theme from "./Theme/Theme";
import i18next from "./translations/i18next/i18next";
import {I18nextProvider} from "react-i18next";


ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </I18nextProvider>,
    document.getElementById('root')
);