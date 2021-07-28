import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter} from "react-router-dom";
import theme from "./Theme/Theme";




ReactDOM.render(<BrowserRouter>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);