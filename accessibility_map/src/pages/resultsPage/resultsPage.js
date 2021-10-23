import React from 'react';
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

const ResultsPage = () => {

    return (
        // <Grid container spacing={2}>
        //     <Grid item xs={8}>
        //         <Item>xs=8</Item>
        //     </Grid>
        //     <Grid item xs={4}>
        //         <Item>xs=4</Item>
        //     </Grid>
        //     <Grid item xs={4}>
        //         <Item>xs=4</Item>
        //     </Grid>
        //     <Grid item xs={8}>
        //         <Item>xs=8</Item>
        //     </Grid>
        //     </Grid>
        //<Map />

        <Box>
            <Grid container spacing={2} className="resultsgrid">
                <Grid item xs={8}>
                    <Item className="mapitem"><Map /></Item>
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