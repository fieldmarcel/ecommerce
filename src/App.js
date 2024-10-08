import './App.css';
import Nav from './Nav';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home';
import Services from './Services';
import Trusted from './Trusted';
function App() {
  return (
    <div >
      
<BrowserRouter>
<Nav/>
<Home/>
<Services/>
<Trusted/>
<Routes>




</Routes>






</BrowserRouter>


    </div>
  );
}

export default App;
