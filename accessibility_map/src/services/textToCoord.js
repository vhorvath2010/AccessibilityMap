import axios from 'axios'

export function handleNewVendor(address) {
    const api = "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(address.trim()) + "&key=AIzaSyA2ZpxnUNAG5JdjNi-jv7Ua3r8krKNjbgc";
    var lat, lng;

    return axios.get(api).then(res => {
        console.log("res = " + JSON.stringify(res.data.results[0].geometry.location.lat))
        lat = res.data.results[0].geometry.location.lat;
        lng = res.data.results[0].geometry.location.lng;
    }).then(() => {
        return {lat: [lat], lng: [lng]};
    });
}