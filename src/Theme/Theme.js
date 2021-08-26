import {createTheme} from "@material-ui/core/styles";

export const themeDefault = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 400,
            md: 600,
            lg: 760,
            xl: 1280,
        },
    }
});

// themeDefault.overrides = {
//     MuiInputBase: {
//         root: {
//
//         }
//     }
// }

// themeDefault.props = {
//     MuiButton: {
//     }
// }

export const themeDarkMode = createTheme({
    palette: {
        type: "dark",
    }
})
