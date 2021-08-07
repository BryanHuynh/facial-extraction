
import Form from "./components/Form"
import {useState, useEffect} from 'react';
import './App.css'
import Cropper from 'react-cropper'
import "cropperjs/dist/cropper.css";


//import {fetch, post} from './actions/index'

function App() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    console.log(pictures);
  }, [setPictures])

  return (
    <div className="App">
      <div className="jumbotron text-center">
        <h1>Facial Extraction tool</h1>
        <p>Extract faces from Photos</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="">
            <Form setPictures={setPictures}/>
          </div>
          <div className="">
            <div className="images_container">
              {
                pictures.length === 0 ? <br/> :
                pictures.map((image, index) => (
                  image.faces.map((face, index) => (
                    <div className="image_container">
                    <div
                      className="crop"
                      style={
                        {
                          width:`${face.rectangle.right - face.rectangle.left + 10}px`,
                          height:`${face.rectangle.bottom - face.rectangle.top + 40}px`,
                        }
                      }
                    >
                      <img
                        src={URL.createObjectURL(image)}
                        className="face"
                        style={
                          {
                            top:`-${face.rectangle.top - 20}px`,
                            left:`-${face.rectangle.left - 5}px`,
                          }
                        }
                      />
                    </div>
                    </div>
                  ))

                ))
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
