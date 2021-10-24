import { Container, Stack, Card, CardContent, Typography, Box, Grid } from "@mui/material";

function SearchResult(props) {
    var vendors = {};
    for (const key of Object.key(props.vendors)) {
        vendors.concat(props.vendors[key]);
    }
    
    var cards = vendors.map((vendor) => (
        <Card variant="outlined" sx={{ width: 400, height: 150, padding: 2}}>
            <CardContent>
                <Typography variant="h4">{vendor.name}</Typography>
                <Typography variant="body" sx={{ color: "gray"}}>{vendor.addr}</Typography>
                <Stack direction = "row" spacing={5} sx={{ pt: 3}}>
                    {listAccessibility(vendor, "mob", "Mobility")}
                    {listAccessibility(vendor, "park", "Parking")}
                    {listAccessibility(vendor, "animal", "Animal")}
                </Stack>

            </CardContent>
        </Card>
    ));

    return (
        <Stack spacing={2} direction="row">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <Container padding={50} id="scroll" max-height="30px"> 
                <Stack spacing={2} overflow="auto" class="stack">
                    {cards}
                </Stack>
            </Container>
        </Stack>
    );
}

function listAccessibility(vendor, key, string) {
    if (vendor[key] === true) {
        return (
        <Stack direction="row" spacing={0.5}>
            <span class="material-icons">done</span>
            <Typography sx={{ mb: 20, fontSize: 10}}>{string}</Typography>
        </Stack>
        );
    } else {
        return (
            <Stack direction="row" spacing={0.5}>
                <span class="material-icons" sx={{color: "grey"}}>close</span>
                <Typography sx={{ mb: 20, fontSize: 16}}>{string}</Typography>
            </Stack>
        );
    }
}

export default SearchResults;