import firebase from '../firebase';
import { isPointWithinRadius } from 'geolib';

const db = firebase.firestore().collection('vendors');

/*
    Function to return vendors within [radius] km from center
*/
export function getVendors(center, radius) {
    const names = ['restaurant', 'park', 'public transport', 'hair dresser'];
    var dict = {'restaurant': [], 'park': [], 'public transport': [], 'hair dresser': []};
    if (!center) {
        return dict;
    }
    db.get().then(vendorsSnapshot => {
        const vendors = vendorsSnapshot.docs.map(doc => doc.data());
        vendors.forEach(vendor => {
            const loc = vendor['latlng'];
            // Convert to geoloc
            const centerLoc = { latitude: center['lat'], longitude: center['long']}
            const geoLoc = { latitude: loc['_lat'], longitude: loc['_long']};
            // Add vendor if it's within range
            if (isPointWithinRadius(geoLoc, centerLoc, radius)) {
                dict[names[vendor['type']]].push(vendor);
            }
        });
        
    });
    return dict;
};