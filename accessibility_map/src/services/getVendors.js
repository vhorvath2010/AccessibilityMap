import firebase from '../firebase';
import { isPointWithinRadius } from 'geolib';

const db = firebase.firestore().collection('vendors');

/*
    Function to return vendors within [radius] km from center
*/
export function getVendors(center, radius) {
    db.get().then(vendorsSnapshot => {
        const vendors = vendorsSnapshot.docs.map(doc => doc.data());
        const vendorsInRange = [];
        vendors.forEach(vendor => {
            const loc = vendor['latlng'];
            // Convert to geoloc
            const geoLoc = { latitude: loc['_lat'], longitude: loc['_long']};
            // Add vendor if it's within range
            if (isPointWithinRadius(geoLoc, center, radius)) {
                vendorsInRange.push(vendor);
            }
        });
        console.log("Found " + vendorsInRange.length + " nearby vendors");
        return vendorsInRange;
    });
};