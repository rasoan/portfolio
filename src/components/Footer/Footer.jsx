import React from "react";
import {Box, List, ListItem, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    wrapperFooter: {
        backgroundColor: theme.palette.grey[100],
    },
}));

const Footer = () => {
    const classes = useStyles();

    return <Paper className={classes.wrapperFooter} elevation={3}>
        <Box p={4} display={"flex"}>
            <Typography component="h5">Контакты</Typography>
            <List>
                <ListItem>
                    <Typography>Телефон: </Typography><Typography>+375 25 664 30 70</Typography>
                </ListItem>
                <ListItem>
                    <Typography>Почта: </Typography><Typography>araikrasoian@gmail.com</Typography>
                </ListItem>
                <ListItem>
                    <Typography>Инстаграмм: </Typography><Typography>https://www.instagram.com/araiikk</Typography>
                </ListItem>
            </List>
        </Box>
    </Paper>
}

export default Footer;