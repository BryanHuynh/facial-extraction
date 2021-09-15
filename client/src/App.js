
import Form from "./components/Form"
import {useState} from 'react';
import Face from './components/Face'
import './App.css'

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
					<div className="">
						<Form setPictures={setPictures} pictures={pictures}/>
					</div>
					<div className="">
						<div className="images_container">
							{
								pictures.length === 0 ? <br/> :
								pictures.map((image, index) => (
									image.faces.map((face, index) => (
										<Face baseImage={image} region={face.rectangle}/>
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
