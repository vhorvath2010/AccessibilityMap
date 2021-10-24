import { useState } from 'react';
import { Grid, Box, Container, Stack } from "@mui/material";
import './home.css';
import SearchResult from '../../components/searchResults';
import { getVendors } from '../../services/getVendors';

function HomePage() {
    const vendors = [{
        addr: "24 Sussex Drive, Ottawa, ON",
        asl: false,
        animal: false,
        braille: false,
        curb: false,
        mob: false,
        name: "John",
        park: false,
        type: 0
    }, {
        addr: "24 Sussex Drive, Ottawa, ON",
        asl: false,
        animal: false,
        braille: false,
        curb: false,
        mob: false,
        name: "John",
        park: false,
        type: 0
    }, {
        addr: "24 Sussex Drive, Ottawa, ON",
        asl: false,
        animal: false,
        braille: false,
        curb: false,
        mob: false,
        name: "John",
        park: false,
        type: 0
    }, {
        addr: "24 Sussex Drive, Ottawa, ON",
        asl: false,
        animal: false,
        braille: false,
        curb: false,
        mob: false,
        name: "John",
        park: false,
        type: 0
    }, {
        addr: "24 Sussex Drive, Ottawa, ON",
        asl: false,
        animal: false,
        braille: false,
        curb: false,
        mob: false,
        name: "John",
        park: false,
        type: 0
    }, {
        addr: "24 Sussex Drive, Ottawa, ON",
        asl: false,
        animal: false,
        braille: false,
        curb: false,
        mob: false,
        name: "John",
        park: false,
        type: 0
    }, {
        addr: "24 Sussex Drive, Ottawa, ON",
        asl: false,
        animal: false,
        braille: false,
        curb: false,
        mob: false,
        name: "John",
        park: false,
        type: 0
    }];

    // const [stage, setStage] = useState(0);
    // const [loc, setLoc] = useState();

    // if (stage === 0) {
    //     return (
    //         <div class="titleSlide">
    //             <h1>Access your world.</h1>
    //             <button onClick={() => setStage(stage + 1)}>Explore</button>
    //         </div>
    //     );
    // } else if (stage === 1) {
    //     return (
    //         <div class="titleSlide">
    //             <h1>Where are you?</h1>
    //             <input type="text" placeholder="Enter your location"></input>
    //             <button type="submit" onClick={() => {
    //                 setStage(stage + 1);
    //             }}>Submit</button>
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div class="titleSlide">
    //             <h1>What are you looking for?</h1>
    //             <br></br>
    //             <div class="buttonGroup">
    //                 <button id="food"></button>
    //                 <button id="transit"></button>
    //                 <button id="services"></button>
    //             </div>
    //         </div>
    //     );
    // }
    return (
        <Box><SearchResult vendors={vendors}></SearchResult></Box>
    )
}

export default HomePage;
