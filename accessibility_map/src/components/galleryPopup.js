import ImageGallery from 'react-image-gallery';
import firebase from '../firebase';

const storage = firebase.storage();

function GalleyPopup(props) {
    const images = [];
    var photosFile = storage.ref('photos/' + props.id);
    console.log();
    return(
        <ImageGallery items={images} />
    );
}