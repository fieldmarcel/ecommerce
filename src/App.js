import './App.css';
import Nav from './Nav';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home';
function App() {
  return (
    <div >
      
<BrowserRouter>
<Nav/>
<Routes>

<Route   path= "/"  element= {<Home/>}/>



</Routes>






</BrowserRouter>


    </div>
  );
}

export default App;
