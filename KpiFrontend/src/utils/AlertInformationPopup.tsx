import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type InputParamsAlertProps = {
  information: string,
  isOpen: boolean,
  onClosePopup: () => boolean
};

export default function AlertInformationPopup(props: InputParamsAlertProps) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(props.isOpen);
  }, [props]);

  const handleClose = () => {
    setOpen(false);
    props.onClosePopup(); // odpowiedzialne aby znikał popup
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Informacja"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.information}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}