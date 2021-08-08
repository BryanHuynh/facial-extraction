import {react, useState} from 'react';
import Jimp from 'jimp'


const Face = (props) => {
    const [buffer, setBuffer] = useState(null);

    Jimp.read(URL.createObjectURL(props.baseImage), (err, image) => {
        if (err) {
            console.log(err);
        }
        image
            .crop(props.region.left, props.region.top, props.region.right - props.region.left, props.region.bottom - props.region.top)
            .resize(Jimp.AUTO, 100)
            .getBase64(Jimp.AUTO, (err, buffer) => {
                if (err) {
                    console.log(err);
                }
                setBuffer(buffer);
            });
    });



    return (
        buffer === null ? (<p>Loading face...</p>) : (<img src={buffer}/>)
    );   
}

export default Face;