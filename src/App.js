import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Aboutus from './Aboutus';
import Shop from './Shop';
import {BrowserRouter , NavLink , Routes , Route} from "react-router-dom";


function App() {
 
  return (
      <BrowserRouter>
          <div className="App">

      <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Aboutus" element={<Aboutus />} />
      </Routes>
      <Footer />
    </BrowserRouter>    
  );
}

export default App;
