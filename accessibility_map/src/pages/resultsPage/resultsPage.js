import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Map from '../../components/map';

import styles from './resultsPage.css'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ResultsPage(props:{updateCenterCallback:CallableFunction}) {
    
    function updateCenterCallback(center) {
        props.updateCenterCallback(center)
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
                            <Item >Search Bar Placeholder</Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>Results Placeholder</Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>

    );
}

export default ResultsPage;