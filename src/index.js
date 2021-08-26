import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {ThemeProvider} from '@material-ui/core/styles';
import {HashRouter} from "react-router-dom";
import theme from "./Theme/Theme";


ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>
    ,
    document.getElementById('root')
);