import firebase from '../firebase';

const db = firebase.firestore().collection('vendors');

export function getVendorFromID(id) {
    return db.doc(id).get().then(snapshot=>{
        var data = snapshot.data();
        data['id'] = id;
        return data;
    });
}