import firebase from '../firebase';
import { isPointWithinRadius } from 'geolib';

const db = firebase.firestore().collection('vendors');

/*
    Function to return vendors within [radius] km from center
*/
export function getVendors(center, radius) {
    const names = ['restaurant', 'park', 'transportation', 'shopping'];
    var dict = { 'restaurant': [], 'park': [], 'transportation': [], 'shopping': [] };
    if (!center) {
        return dict;
    }
    var vendors, vendorIds;
    return db.get().then(vendorsSnapshot => {
        vendors = vendorsSnapshot.docs.map(doc => doc.data());
        vendorIds = vendorsSnapshot.docs.map(doc => doc.id);
    }, error => {
        console.log(error);
    }).then(() => {
        var i = 0;
        vendors.forEach(vendor => {
            const loc = vendor['latlng'];
            // Convert to geoloc
            const centerLoc = { latitude: center['lat'], longitude: center['lng'] }
            const geoLoc = { latitude: loc['_lat'], longitude: loc['_long'] };
            vendor['latlng'] = {lat : loc['_lat'], lng: loc['_long']}
            vendor['id'] = vendorIds[i++];
            // Add vendor if it's within range
            if (isPointWithinRadius(geoLoc, centerLoc, radius)) {
                dict[names[vendor['type']]].push(vendor);
            }
        });
    }).then(() => {
        return dict;
    });
};