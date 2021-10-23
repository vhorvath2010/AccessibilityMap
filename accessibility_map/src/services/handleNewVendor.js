import firebase from '../firebase';
import { GeoPoint } from '@firebase/firestore';
import axios from 'axios'

const db = firebase.firestore().collection('vendors');

export function handleNewVendor(inputs) {
    const api = "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(inputs.addr.trim()) + "&key=AIzaSyA2ZpxnUNAG5JdjNi-jv7Ua3r8krKNjbgc";

    axios.get(api).then(res => {
        console.log("res = " + JSON.stringify(res.data.results[0].geometry.location.lat))
        let lat = res.data.results[0].geometry.location.lat;
        let lng = res.data.results[0].geometry.location.lng;
        console.log("lat 1 =" + lat);

        console.log("lat 2 =" + lat);
        console.log("addr = " + inputs.addr);

        const latlng = new GeoPoint(lat, lng);
        console.log("Geopoint: " + latlng);

        db.doc().set({
            addr: inputs.addr,
            animal: inputs.animal,
            asl: inputs.asl,
            braille: inputs.braille,
            curb: inputs.curb,
            latlng: latlng,
            mob: inputs.mob,
            name: inputs.name,
            park: inputs.park,
            type: inputs.type
        })

    });
}