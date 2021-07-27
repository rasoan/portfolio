import {createTheme} from "@material-ui/core/styles";

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

export default theme;