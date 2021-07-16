import {React, useState} from 'react'
import ImageUploader from 'react-images-upload';
import './styles.css'

const Form = () => {
    const [pictures, setPictures] = useState([])

    const onDrop = (picture) => {
        setPictures(pictures.concat(picture))
        console.log(picture)
    }

    return(
        <>
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                label="UPLOAD"
                withPreview={true}
                maxFileSize={10242880}
            />
        </>
    );
}

export default Form;