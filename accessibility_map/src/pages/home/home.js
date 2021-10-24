import { useState } from 'react';
import './home.css';

import { TextField } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useRouteMatch, Link, Redirect } from 'react-router-dom'
import { textToCoord } from '../../services/textToCoord';

function HomePage(props:{updateCenterCallback:CallableFunction}) {
    const [stage, setStage] = useState(0);
    const [location, setLocation] = useState('')
    const [submitted, setSubmitted] = useState(false);

    const updateLocation = (event) => {
        setLocation(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        textToCoord(location).then(latlng => {
            console.log(latlng);
            props.updateCenterCallback(latlng);
        });
        fetch('http://localhost:3000')
        .then(response => {
            setSubmitted(true)
            return response.json()
        })
        .then(data => {
            
        })
    }
    if (submitted) {
        return <Redirect push to={{
            pathname: '/test',
        }}
        />
    }   
    

    if (stage === 0) {
        return (
            <div class="titleSlide">
                <h1>Access your world.</h1>
                <Button onClick={() => setStage(stage + 1)}>Explore</Button>
            </div>
        );
    } else  {
        return (
            <div class="titleSlide">
                <h1>Where are you?</h1>
                <TextField 
                    hiddenLabel
                    className="searchbox" 
                    id="outlined-basic" 
                    // label="Location" 
                    variant="standard"
                    inputProps={{
                        style: { textAlign: 'center', fontSize: '40px', fontWeight: 'bold', 
                        backgroundColor: 'white', width: 'fit-content'}}}
                    onChange={updateLocation} 
                    value={location}
                    />
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        );
    } 
}

export default HomePage;
