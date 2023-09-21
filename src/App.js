import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Aboutus from "./Aboutus";
import Shop from "./Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productdetails from "./Components/Shop/Productdetails";

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
