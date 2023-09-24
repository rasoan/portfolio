import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {ThemeProvider} from '@material-ui/core/styles';
import {HashRouter} from "react-router-dom";
import theme from "./Theme/Theme";

const rootHTMLElement = document.createElement('div');
rootHTMLElement.setAttribute('id', 'root');

document.body.appendChild(rootHTMLElement);

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
    ,
    root
);

