import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Aboutus from "./Aboutus";
import Shop from "./Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productdetails from "./Components/Shop/Productdetails";
import Women from "./Women";
import Men from "./Men";
import Boys from "./Boys";
import Girls from "./Girls";
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
        <Route path="/shop/:productId" element={<Productdetails />} />
        <Route path="/Girls" element={<Girls />} />
        <Route path="/Boys" element={<Boys />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Women" element={<Women />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
