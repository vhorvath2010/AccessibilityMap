import * as React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, Button, FormControlLabel, FormGroup, Container } from '@mui/material';
import { servicesVersion } from 'typescript';
import './vendor.css'


const Vendor = () => {
    const [name, setName] = useState('');
    const [addr, setAddr] = useState('');
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
    const updateAddr = (event) => {
        setAddr(event.target.value);
    }
    const updateDropdown = (event) => {
        setBusType(event.target.value);
    }
    const setService = (index) => {
        setChecked(prevState => prevState.map((item, idx) => idx === index ? !item : item));
    }
    const handleSubmit = () => {
        alert(`User Created! Name: ${name} Address: ${addr} Type: ${busType} Services: ${checked}`);
    } 
   
    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <Container className="container"/>
                <TextField id="outlined-basic" label="Name" variant="outlined" onChange={updateName} value={name} required/>
                <TextField id="outlined-basic" label="Address" variant="outlined" onChange={updateAddr} value={addr} required/>
            {/* </FormControl>
            <FormControl> */}
                {/* <InputLabel>Business type</InputLabel> */}
                <Select 
                    value={busType} 
                    displayEmpty
                    onChange={updateDropdown}
                >
                    <MenuItem value={0}>Restaurant</MenuItem>
                    <MenuItem value={1}>Park</MenuItem>
                    <MenuItem value={2}>Public Transport</MenuItem>
                    <MenuItem value={3}>Hair Dresser</MenuItem>
                </Select>
            {/* </FormControl>
            <FormGroup> */}
                {services.map((service, index) => (
                    <FormControlLabel control={<Checkbox/>} onChange={setService} label={service} checked={checked[index]}/>
                ))}
            
                <Button type="submit" variant="outlined" onChange={handleSubmit}>Sign Up</Button>
            </FormControl>
        </form>
    );
};

export default Vendor;