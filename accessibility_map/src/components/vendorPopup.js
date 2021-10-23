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

function VendorPopup(props:{open:Boolean, handleAddVendorCloseCallback:CallableFunction}) {

  const services = ['Allow Service Animal', 
                    'ASL accommodations',
                    'Accessible Parking',
                    'Braille',
                    'Curbside Service',
                    'Mobility Access',
                ];
  const [checked, setChecked] = useState([]);

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleAddVendorCloseCallback}>
        <DialogTitle>Add New Vendor</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new ADA-supported vendor, please fill in the information below.
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Street"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="City"
            type="text"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="State"
            type="text"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Zipcode"
            type="text"
            variant="standard"
          />
          <h1></h1>
          <Select sx={{minWidth: '400px'}}>
            <MenuItem value={0}>Restaurant</MenuItem>
            <MenuItem value={1}>Park</MenuItem>
            <MenuItem value={2}>Public Transport</MenuItem>
            <MenuItem value={3}>Hair Dresser</MenuItem>
          </Select>
          {services.map((service, index) => (<FormControlLabel control={<Checkbox/>} label={service} checked={checked[index]}/>))}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleAddVendorCloseCallback}>Cancel</Button>
          <Button onClick={props.handleAddVendorCloseCallback}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default VendorPopup;