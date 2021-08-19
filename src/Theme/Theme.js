import {createTheme} from "@material-ui/core/styles";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 520,
            md: 760,
            lg: 960,
            xl: 1280,
        },
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

export default theme;