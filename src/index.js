import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter} from "react-router-dom";

const theme = createTheme({
    backgroundColors: {
    },
});

theme.overrides = {
    MuiInputBase: {
        root: {

        }
    }
}

theme.props = {
    MuiButton: {
    }
}

ReactDOM.render(<BrowserRouter>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);