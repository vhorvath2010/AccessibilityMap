import { useState } from 'react';
import './home.css';

import { TextField } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useRouteMatch, Link, Redirect } from 'react-router-dom'
import { textToCoord } from '../../services/textToCoord';

function HomePage() {
    const [stage, setStage] = useState(0);
    const [center, setCenter] = useState('');
    // const [loc, setLoc] = useState();
    let { path, url } = useRouteMatch();

    const updateCenter = (event) => {
        setCenter(event.target.value);
    }
    const handleSubmit = () => {
        // <Redirect to="/test" />
        // ({ lat, lng } = textToCoord(center));
        // console.log(lat, lng);
        // <Link to={`${url}/test`}></Link>
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
                <TextField className="searchbox" 
                    id="outlined-basic" 
                    label="Location" 
                    variant="filled"
                    onChange={updateCenter} 
                    defaultValue="Atlanta"
                    value={center}
                    />
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        );
    } 
}

export default HomePage;
