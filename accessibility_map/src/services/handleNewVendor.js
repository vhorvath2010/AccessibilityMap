import firebase from '../firebase';
import { GeoPoint } from '@firebase/firestore';
import axios from 'axios'

const db = firebase.firestore().collection('vendors');

export function handleNewVendor(name, addr, busType, serviceRes) {
    const api = "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(addr.trim()) + "&key=AIzaSyA2ZpxnUNAG5JdjNi-jv7Ua3r8krKNjbgc";

    axios.get(api).then(res => {
        console.log("res = " + JSON.stringify(res.data.results[0].geometry.location.lat))
        let lat = res.data.results[0].geometry.location.lat;
        let lng = res.data.results[0].geometry.location.lng;
        console.log("lat 1 =" + lat);

        console.log("lat 2 =" + lat);
        console.log("addr = " + addr);

        const latlng = new GeoPoint(lat, lng);
        console.log("Geopoint: " + latlng);

        db.doc().set({
            addr: addr,
            animal: serviceRes['Allow Service Animal'],
            asl: serviceRes['ASL accommodations'],
            braille: serviceRes['Braille'],
            curb: serviceRes['Curbside Service'],
            latlng: latlng,
            mob: serviceRes['Mobility Access'],
            name: name,
            park: serviceRes['Accessible Parking'],
            type: busType
        })

    });
}