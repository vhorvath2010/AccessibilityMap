import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardContent } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


import Map from '../../components/map';

import styles from './resultsPage.css'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ResultsPage(props:{vendors:Object, handleAddVendorClickCallback:CallableFunction, updateCenterCallback:CallableFunction, updateLocationCallback:CallableFunction}) {
    
    function updateCenterCallback(center) {
        props.updateCenterCallback(center)
    }

    function handleLocationChange(e) {
        if (e.keyCode == 13) {
            props.updateLocationCallback(e.target.value);
        }
    }

    return (

        <Box>
            <Grid container spacing={2} className="resultsgrid">
                <Grid item xs={8}>
                    <Item className="mapitem"><Map vendors={props.vendors} updateCenterCallback={updateCenterCallback}/></Item>
                </Grid>
                <Grid item xs={4} className="sidepane">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Item ><TextField className="searchbox" id="outlined-basic" label="Location" variant="outlined" onKeyDown={handleLocationChange}/></Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Card variant="outlined" className="results">
                                <CardContent>
                                    <div>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day
                                        </Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" className="addvendorbutton" onClick={props.handleAddVendorClickCallback}>Add New Vendor</Button>
                            {/* <Fab color="primary" aria-label="add" className="addvendorbutton">
                                <AddIcon />
                            </Fab> */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
        </Box>

    );
}

export default ResultsPage;