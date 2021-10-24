import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Select, Stack } from '@mui/material';
import { MenuItem } from '@mui/material';
import { FormControlLabel, Checkbox } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import GalleryPopup from './galleryPopup';

import './vendorPopup.css'

const names = ['restaurant', 'park', 'transportation center', 'shopping center'];

function VendorPopup(props: { id: String, vendor: Object, handleVendorCloseCallback: CallableFunction }) {

  const [hasGallery, setHasGallery] = useState(false);

  useEffect(() => {
    if (props.id != null) {
      console.log(props.vendor)
    }
  }, [props.id])

  useEffect(() => {
    console.log(props.vendor)
  }, [props.vendor])

  return (
    <div className="popupwindow">
      <Dialog open={props.id && props.vendor} onClose={props.handleAddVendorCloseCallback}>
        {props.vendor != null ? <DialogTitle><Typography color="black" sx={{ fontWeight: 'bold', fontSize: 25 }}>{props.vendor.name}</Typography></DialogTitle> : null}
        <DialogContent>
          <Grid container spacing={2} >
            <Grid item xs={hasGallery == true ? 8 : 12}>
              {props.vendor != null ? <div>A <b>{names[props.vendor.type]}</b> at<br /> <i>{props.vendor.addr}</i></div> : null}
            </Grid>
            
            {hasGallery ? <Grid item xs={4}>this is where the grid would go</Grid> : null}
            <Grid item xs={12}>
              <div class="accomodations">
                <Stack direction="row" spacing={5} sx={{ pt: 3 }}>
                  {listAccessibility(props.vendor, "mob", "Mobility")}
                  {listAccessibility(props.vendor, "park", "Parking")}
                  {listAccessibility(props.vendor, "animal", "Animal")}
                </Stack>
                <Stack direction="row" spacing={5} sx={{ pt: 3 }}>
                  {listAccessibility(props.vendor, "asl", "ASL Training")}
                  {listAccessibility(props.vendor, "curb", "Curbside Pickup")}
                  {listAccessibility(props.vendor, "braille", "Braille")}
                </Stack>
              </div>
              <Grid item xs={4}>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleVendorCloseCallback}>Done</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function listAccessibility(vendor, key, string) {
  if (!vendor) {
    return "";
  }
  if (vendor[key] === true) {
    return (
      <Stack direction="row" spacing={0.5}>
        <span class="material-icons">done</span>
        <Typography sx={{ mb: 20, fontSize: 16 }}>{string}</Typography>
      </Stack>
    );
  } else {
    return (
      <Stack direction="row" spacing={0.5}>
        <span class="material-icons" sx={{ color: "grey" }}>close</span>
        <Typography sx={{ mb: 20, fontSize: 16 }}>{string}</Typography>
      </Stack>
    );
  }
}

export default VendorPopup;