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
import { handleNewVendor } from '../services/handleNewVendor';

function AddVendorPopup(props:{open:Boolean, handleAddVendorCloseCallback:CallableFunction}) {
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [busType, setBusType] = useState('');
  const [error1, setError1] = useState(true);
  const [error2, setError2] = useState(true);
  const services = ['Allow Service Animal', 
                  'ASL accommodations',
                  'Accessible Parking',
                  'Braille',
                  'Curbside Service',
                  'Mobility Access',
              ];
  const [checked, setChecked] = useState([false, false, false, false, false, false]);

  const updateName = (event) => {
    if (event.target.value !== '') {
      setError1(false);
    } else {
      setError1(true);
    }
    setName(event.target.value);
  }
  const updateStreet = (event) => {
    if (event.target.value !== '') {
      setError2(false);
    } else {
      setError2(true);
    }
    setStreet(event.target.value);
  }
  const updateCity = (event) => {
    setCity(event.target.value);
  }
  const updateState = (event) => {
    setState(event.target.value);
  }
  const updateZip = (event) => {
    setZip(event.target.value);
  }
  const updateDropdown = (event) => {
    setBusType(event.target.value);
  }
  const setService = (event) => {
    console.log(checked)
    // setChecked(prevState => prevState.map((item, idx) => idx === index ? !item : item));
    let newArr = [...checked]; 
    // console.log(event.target.checked)
    newArr[event.target.value] = event.target.checked; 
    setChecked(newArr);
  }
  const handleSubmit = () => {
    if (error1 || error2) {
      alert("Invalid input");
    } else {
      var addr = street + ', ' + city + ', ' + state + ', ' + zip;
      var serviceRes = {};
      services.forEach((key, i) => serviceRes[key] = checked[i]);
      console.log(serviceRes);
      handleNewVendor(name, addr, busType, serviceRes);
      props.handleAddVendorCloseCallback();
    }
  } 


  return (
    <div>
      <Dialog open={props.open} onClose={props.handleAddVendorCloseCallback}>
        <DialogTitle>Add New Vendor</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new ADA-supported vendor, please fill in the information below.
          </DialogContentText>
          <TextField
            required
            error={error1}
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={updateName} 
            value={name}
          />
          <TextField
            required
            error={error2}
            margin="dense"
            id="name"
            label="Street"
            type="text"
            fullWidth
            variant="standard"
            onChange={updateStreet} 
            value={street}
          />
          <TextField
            margin="dense"
            id="name"
            label="City"
            type="text"
            variant="standard"
            onChange={updateCity} 
            value={city}
          />
          <TextField
            margin="dense"
            id="name"
            label="State"
            type="text"
            variant="standard"
            onChange={updateState} 
            value={state}
          />
          <TextField
            margin="dense"
            id="name"
            label="Zipcode"
            type="text"
            variant="standard"
            onChange={updateZip} 
            value={zip}
          />
          <h1></h1>
          <Select 
            value={busType} 
            onChange={updateDropdown}
            sx={{minWidth: '400px'}}
            >
            <MenuItem value={0}>Restaurant</MenuItem>
            <MenuItem value={1}>Park</MenuItem>
            <MenuItem value={2}>Public Transport</MenuItem>
            <MenuItem value={3}>Shopping</MenuItem>
          </Select>
          {services.map((service, index) => (<FormControlLabel control={<Checkbox onClick={setService} value={index} checked={checked[index]}/>} 
          key={index} label={service} />))}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleAddVendorCloseCallback}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddVendorPopup;