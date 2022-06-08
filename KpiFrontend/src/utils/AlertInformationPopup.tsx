import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Alert, AlertTitle } from '@mui/material';

type InputParamsAlertProps = {
  information: string,
  isOpen: boolean,
  statusFromDb: number
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

  function returnMessagePopup() {
    if (props.statusFromDb === 1) {
      return (
        <Alert variant="filled" severity="success">
          <AlertTitle>Success</AlertTitle>
          {props.information}
        </Alert>
      )
    } else if (props.statusFromDb === -2) {
      return (
        <Alert variant="filled" severity="warning">
          <AlertTitle>Warning</AlertTitle>
          {props.information}
        </Alert>
      )
    } else if (props.statusFromDb === -1) {
      return (
        <Alert variant="filled" severity="error">
          <AlertTitle>Error</AlertTitle>
          {props.information}
        </Alert>
      )
    } else if (props.statusFromDb === 0) {
      return (
        <Alert variant="filled" severity="info">
          <AlertTitle>Info</AlertTitle>
          {props.information}
        </Alert>
      )
    }
  }
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          {returnMessagePopup()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}