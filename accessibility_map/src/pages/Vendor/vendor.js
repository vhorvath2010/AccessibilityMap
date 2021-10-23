import * as React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, Button, 
    FormControlLabel, FormGroup, Grid } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { servicesVersion } from 'typescript';


const Vendor = () => {
    const [name, setName] = useState('');
    const [street, setStreet] = useState('');
    const [state, setState] = useState('');
    let addr = street + ', ' + state;
    const [busType, setBusType] = useState('');
    const services = ['Allow Service Animal', 
                    'ASL accommodations',
                    'Accessible Parking',
                    'Braille',
                    'Curbside Service',
                    'Mobility Access',
                ];
    const [checked, setChecked] = useState([]);

    const updateName = (event) => {
        setName(event.target.value);
    }
    const updateStreet = (event) => {
        setStreet(event.target.value);
    }
    const updateState = (event) => {
        setState(event.target.value);
    }
    const updateDropdown = (event) => {
        setBusType(event.target.value);
    }
    const setService = (index) => {
        setChecked(prevState => prevState.map((item, idx) => idx === index ? !item : item));
    }
    const handleSubmit = () => {
        alert(`Name: ${name} Address: ${addr} Type: ${busType} Services: ${checked}`);
    } 
   
    return (
        <form onSubmit={handleSubmit}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} md={8}>
                    <TextField sx={{minWidth: '400px'}} id="outlined-basic" label="Name" variant="outlined" onChange={updateName} value={name} required/>
                </Grid>
                <Grid item xs={6} md={8}>
                    <TextField sx={{minWidth: '400px'}} id="outlined-basic" label="Street" variant="outlined" onChange={updateStreet} value={street} required/>
                    <TextField sx={{minWidth: '400px'}} id="outlined-basic" label="State" variant="outlined" onChange={updateState} value={state} required/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Select 
                        value={busType} 
                        displayEmpty
                        onChange={updateDropdown}
                        sx={{minWidth: '400px'}}
                    >
                        <MenuItem value={0}>Restaurant</MenuItem>
                        <MenuItem value={1}>Park</MenuItem>
                        <MenuItem value={2}>Public Transport</MenuItem>
                        <MenuItem value={3}>Hair Dresser</MenuItem>
                    </Select>
                </Grid>
                {services.map((service, index) => (
                    <Grid item xs={12} md={8}>
                        <FormControlLabel control={<Checkbox/>} onChange={setService} label={service} checked={checked[index]}/>
                    </Grid>
                ))}
                <Grid item xs={6} md={8}>
                    <Button type="submit" variant="outlined" onChange={handleSubmit}>Sign Up</Button>
                </Grid>
            {/* </FormGroup>
            </FormControl> */}
            </Grid>
        </form>
    );
};

export default Vendor;