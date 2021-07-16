
import Form from "./components/Form"
import {fetch, post} from './actions/index'

function App() {

  fetch().then(({data}) => console.log(data))
  post('Hello from client').then((data) => console.log(data))


  return (
    <div className="App">
      <div className="jumbotron text-center">
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p> 
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Form/>
          </div>
          <div className="col-sm-4">
            <h3>Column 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
