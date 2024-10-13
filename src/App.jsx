import './App.css';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Trusted from './Trusted';
import Contact from './Contact';
import Footer from './Footer';
import Error from './Error';
import Feature from './Feature';
import SingleProduct from './SingleProduct';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={
            <>
            <Home />
        <Feature/>
        <Services />
        <Trusted />
        <Contact/>
        </>
        
        
        } />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />

         
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;