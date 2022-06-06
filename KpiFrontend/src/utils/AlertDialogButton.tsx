import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Alert, AlertTitle } from '@mui/material';


type InputParamsButton = {
  buttonName: string
  isDisabled: boolean
  onDisagree: () => any
  onAgree: () => any
  dialogQuestion:string
};

export default function AlertDialogButton(props: InputParamsButton) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        disabled={props.isDisabled}>

        {props.buttonName}

      </Button>
      <Dialog
        open={open}

        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Alert variant="filled" severity="info">
              <AlertTitle>Info</AlertTitle>
              {props.dialogQuestion}
            </Alert>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { props.onDisagree(); setOpen(false); }}>Anuluj</Button>
          <Button onClick={() => { props.onAgree(); setOpen(false); }}>Tak </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}