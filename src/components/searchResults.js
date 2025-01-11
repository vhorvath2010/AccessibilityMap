import { Container, Stack, Card, CardContent, Typography, Box, Grid } from "@mui/material";

import './searchResults.css'

function SearchResults(props) {
    if (props.vendors != null) {
        var vendors = [];
        for (const key of Object.keys(props.vendors)) {
            vendors = vendors.concat(props.vendors[key]);
        }

        console.log("searchResults.vendors: " + vendors);
        var cards = vendors.map((vendor) => (
            <Card variant="outlined" >
                <CardContent>
                    <Typography variant="h5">{vendor.name}</Typography>
                    <Typography variant="body" sx={{ color: "DimGray"}}>{vendor.addr}</Typography>
                    <Stack direction = "row" spacing={4} sx={{ pt: 3}}>
                        {listAccessibility(vendor, "mob", "Mobility")}
                        {listAccessibility(vendor, "park", "Parking")}
                        {listAccessibility(vendor, "animal", "Animal")}
                        {listAccessibility(vendor, "asl", "ASL")}
                        {listAccessibility(vendor, "braille", "Braille")}
                    </Stack>

                </CardContent>
            </Card>
        ));

        return (
            <Stack direction="row">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                    <Stack className="searchstack" spacing={2} >
                        {cards}
                    </Stack>
            </Stack>
        );
    }
    return null;
}

function listAccessibility(vendor, key, string) {
    if (vendor[key] === true) {
        return (
        <Stack direction="row" spacing={0.5}>
            <span class="material-icons">done</span>
            <Typography sx={{ mb: 20, fontSize: 16}}>{string}</Typography>
        </Stack>
        );
    } else {
        return (
            <Stack direction="row" spacing={0.5}>
                <span class="material-icons" sx={{color: "black"}}>close</span>
                <Typography sx={{ mb: 20, fontSize: 16}}>{string}</Typography>
            </Stack>
        );
    }
}

export default SearchResults;