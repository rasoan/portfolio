import {createTheme} from "@material-ui/core/styles";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 400,
            md: 600,
            lg: 760,
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