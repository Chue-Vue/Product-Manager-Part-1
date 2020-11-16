import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Link} from '@reach/router';
import Main from './views/Main';


function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center flex-column">
        {/* <h1 className="text-center">All Products:</h1>
        <Link to ="/">Home</Link> */}
      </div>
      <Router>
        <Main path ="/" />
      </Router>
    </div>
  );
}

export default App;
