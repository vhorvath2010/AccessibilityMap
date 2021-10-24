import ImageGallery from 'react-image-gallery';
import listReactFiles from 'list-react-files';
import React from 'react';

async function getImages(id) {
    const imageDir = '../assets/photos/' + id;
    try {
        let originalImages = await listReactFiles(imageDir);
        return originalImages;
    } catch (e) {
        console.log(e);
        throw (e);
    }
}

// Needs a prop id to function
const GalleryPopup = props => {
    const [images, setImages] = React.useState("");

    function loadImages(originalImages) {
        setImages(originalImages);
    }

    React.useEffect(() => {
        getImages(props.id).then(originalImages => {
            loadImages(originalImages);
        });
    });

    return (
        <div>{images}</div>
    );
}

export default GalleryPopup;
