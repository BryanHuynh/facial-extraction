
import Form from "./components/Form"
import {useState} from 'react';

//import {fetch, post} from './actions/index'

function App() {
  const [pictures, setPictures] = useState([]);

  return (
    <div className="App">
      <div className="jumbotron text-center">
        <h1>Facial Extraction tool</h1>
        <p>Extract faces from Photos</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Form setPictures={setPictures}/>
          </div>
          <div className="col-sm-4">
            {pictures.length === 0 ? <br/> :
              pictures.map((image, index) => (
                <img src={URL.createObjectURL(image)} />
              ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
