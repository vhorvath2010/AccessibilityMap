import ImageGallery from 'react-image-gallery';
import listReactFiles from 'list-react-files';

async function getImages(id) {
    const imageDir = '../assets/photos/' + id;
    try {
        let originalImages = await listReactFiles(imageDir);
        return originalImages;
    } catch(e) {
        console.log(e);
        throw(e);
    }
}

// Needs a prop id to function
function GalleyPopup(props) {
    return <div>Test</div>;
    /*if (!props.id) {
        return;
    }    
    (async () => {
        const originalImages = await getImages(props.id);
        const images = [];
        originalImages.forEach(image => {
            // Add original image
            console.log(image);
            images.push(image);
        });
        return(
            <p>Test</p>
        );
    })()    */
}

export default GalleyPopup;
