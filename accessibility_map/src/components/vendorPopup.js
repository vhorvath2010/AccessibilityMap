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
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';

import './vendorPopup.css'

function VendorPopup(props:{id:String, handleVendorCloseCallback:CallableFunction}) {

  const [hasGallery, setHasGallery] = useState(false);

  return (
    <div className="popupwindow">
      <Dialog open={props.id != null} onClose={props.handleAddVendorCloseCallback}>
        <DialogTitle>{props.id}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} >
            <Grid item xs={hasGallery ? 8 : 12}>
              <Typography variant="h5" component="div">
                TEST
              </Typography>
            </Grid>
            <Grid item xs={hasGallery ? 4 : 0}>this is where the grid would go</Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleVendorCloseCallback}>Done</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default VendorPopup;