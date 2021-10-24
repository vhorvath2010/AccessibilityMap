import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { FormControlLabel, Checkbox } from '@mui/material';

function VendorPopup(props:{id:String, handleVendorCloseCallback:CallableFunction}) {

  return (
    <div>
      <Dialog open={props.id != null} onClose={props.handleAddVendorCloseCallback}>
        <DialogTitle>Add New Vendor</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Pulling information for {props.id}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleVendorCloseCallback}>Cancel</Button>
          <Button onClick={props.handleVendorCloseCallback}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default VendorPopup;