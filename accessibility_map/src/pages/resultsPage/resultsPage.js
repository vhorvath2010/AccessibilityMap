import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';

import Map from '../../components/map';

import styles from './resultsPage.css'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ResultsPage(props:{updateCenterCallback:CallableFunction, updateLocationCallback:CallableFunction}) {
    
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
                    <Item className="mapitem"><Map updateCenterCallback={updateCenterCallback}/></Item>
                </Grid>
                <Grid item xs={4} className="sidepane">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Item ><TextField className="searchbox" id="outlined-basic" label="Location" variant="outlined" onKeyDown={handleLocationChange}/></Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item><div className="results">Results Placeholder</div></Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>

    );
}

export default ResultsPage;