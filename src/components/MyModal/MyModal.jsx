import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import storeModalWindow from "../../store/storeModalWindow";
import {observer} from "mobx-react";
import {AiOutlineClose} from "react-icons/all";
import {Box, Button, Paper} from "@material-ui/core";
import storeApp from "../../store/storeApp";
import clsx from "clsx";
import {grey, teal} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    darkModeBackground: {
        backgroundColor: props => props.darkMode ? grey[700] : grey[200]
    },
    root: {
        border: 0,
        borderRadius: 8,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButton: {
        color: props => props.darkMode ? grey[50] : grey[800],
        borderRadius: 0,
        border: "none",
        marginLeft: "auto",
        height: 35,
        minWidth: 35,
        fontSize: 20,
        padding: "0 12px",
        display: "flex",
    },
    closeButtonContainer: {

    },
    closeButtonIcon: {},
    closeButtonWrapper: {}
}));

const MyModal = () => {
    const classes = useStyles({darkMode: storeApp.darkMode});

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={storeModalWindow.isOpen}
                onClose={() => storeModalWindow.toggle(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={storeModalWindow.isOpen}>
                    <Paper className={classes.root}>
                        <div className={clsx(classes.closeButtonContainer, classes.darkModeBackground)}>
                            <Button variant="outlined"
                                    className={classes.closeButton}
                                    onClick={() => storeModalWindow.toggle(false)}
                            >
                                <AiOutlineClose className={classes.closeButtonIcon}/>
                            </Button>
                        </div>
                        {storeModalWindow.content}
                    </Paper>
                </Fade>
            </Modal>
        </div>
    );
}


export default observer(MyModal)