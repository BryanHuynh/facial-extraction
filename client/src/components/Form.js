import {React, useState} from 'react'
import ImageUploader from 'react-images-upload';
import {fetch_faces} from '../actions/index'
import './styles.css'

const Form = (props) => {

    const onDrop = async function(pics) {
        props.setPictures([]);
        pics.forEach(pic => {
            getBase64(pic, (base64) => {
                let _base64 = base64.substring(base64.indexOf(',') + 1);
                pic['base64'] = _base64;
                fetch_faces(_base64).then((res) => {
                  pic['faces'] = res.data;
                  props.setPictures(state => {
                      const list = state.concat(pic);
                      return list;
                  })
                });
            })
        })

      }

    const getBase64 = (file, callback) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            callback(reader.result);
        }
        reader.onError = function (e) {
            console.log('error:', e)
        }
    }

    return(
        <>
            <ImageUploader
                multiple
                withIcon={true}
                buttonText='Choose images'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif', 'jpeg']}
                label="UPLOAD"
                withPreview={true}
                maxFileSize={10242880}
            />
        </>
    );
}

export default Form;
