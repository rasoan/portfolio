import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import storeModalWindow from "../../store/storeModalWindow";
import {observer} from "mobx-react";
import {AiOutlineClose} from "react-icons/all";
import {Box, Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "white",
        border: 0,
        borderRadius: 8,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButton: {
        marginLeft: "auto",
        display: "block",
        height: 30,
    },
    closeButtonIcon: {},
    closeButtonWrapper: {}
}));

const MyModal = () => {
    const classes = useStyles();


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
                    <div className={classes.root}>

                        <Button
                            classes={{root: classes.closeButton}}
                            onClick={() => storeModalWindow.toggle(false)}
                        >
                            <AiOutlineClose className={classes.closeButtonIcon}/>
                        </Button>
                        {storeModalWindow.content}
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}


export default observer(MyModal)