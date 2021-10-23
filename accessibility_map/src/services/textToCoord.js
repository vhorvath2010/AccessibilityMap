import axios from 'axios'

export function handleNewVendor(address) {
    const api = "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(address.trim()) + "&key=AIzaSyA2ZpxnUNAG5JdjNi-jv7Ua3r8krKNjbgc";

    axios.get(api).then(res => {
        console.log("res = " + JSON.stringify(res.data.results[0].geometry.location.lat))
        let lat = res.data.results[0].geometry.location.lat;
        let lng = res.data.results[0].geometry.location.lng;

        return {lat: lat, lng: lng};
    });
}