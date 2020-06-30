import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));
  

function ModalWrapper({children, isOpen, handleClose}) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby='model-wrapper-title'
            aria-describedby='modal-description'
        >
            <div style={modalStyle} className={classes.paper}>
                { children }
            </div>
        </Modal>

    )
}

export { ModalWrapper };