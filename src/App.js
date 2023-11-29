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
import Womenproduct1 from "./Womenproduct/Womenproduct1";
import Womenproduct2 from "./Womenproduct/Womenproduct2";
import Womenproduct3 from "./Womenproduct/Womenproduct3";
import Womenproduct4 from "./Womenproduct/Womenproduct4";
import Womenproduct5 from "./Womenproduct/Womenproduct5";
import Womenproduct6 from "./Womenproduct/Womenproduct6";
import Womenproduct7 from "./Womenproduct/Womenproduct7";
import Womenproduct8 from "./Womenproduct/Womenproduct8";
import Womenproduct9 from "./Womenproduct/Womenproduct9";
import Womenproduct10 from "./Womenproduct/Womenproduct10";
import Womenproduct11 from "./Womenproduct/Womenproduct11";
import Womenproduct12 from "./Womenproduct/Womenproduct12";
import Womenproduct13 from "./Womenproduct/Womenproduct13";
import Womenproduct14 from "./Womenproduct/Womenproduct14";
import Womenproduct15 from "./Womenproduct/Womenproduct15";
import Menproduct1 from "./Menproduct/Menproduct1";
import Menproduct2 from "./Menproduct/Menproduct2";
import Menproduct3 from "./Menproduct/Menproduct3";
import Menproduct4 from "./Menproduct/Menproduct4";
import Menproduct5 from "./Menproduct/Menproduct5";
import Menproduct6 from "./Menproduct/Menproduct6";
import Menproduct7 from "./Menproduct/Menproduct7";
import Menproduct8 from "./Menproduct/Menproduct8";
import Menproduct9 from "./Menproduct/Menproduct9";
import Menproduct10 from "./Menproduct/Menproduct10";
import Menproduct11 from "./Menproduct/Menproduct11";
import Menproduct12 from "./Menproduct/Menproduct12";
import Menproduct13 from "./Menproduct/Menproduct13";
import Menproduct14 from "./Menproduct/Menproduct14";
import Menproduct15 from "./Menproduct/Menproduct15";
import Girlsproduct1 from "./Girlsproduct/Girlsproduct1";
import Girlsproduct2 from "./Girlsproduct/Girlsproduct2";
import Girlsproduct3 from "./Girlsproduct/Girlsproduct3";
import Girlsproduct4 from "./Girlsproduct/Girlsproduct4";
import Girlsproduct5 from "./Girlsproduct/Girlsproduct5";
import Girlsproduct6 from "./Girlsproduct/Girlsproduct6";
import Girlsproduct7 from "./Girlsproduct/Girlsproduct7";
import Girlsproduct8 from "./Girlsproduct/Girlsproduct8";
import Girlsproduct9 from "./Girlsproduct/Girlsproduct9";
import Girlsproduct10 from "./Girlsproduct/Girlsproduct10";
import Girlsproduct11 from "./Girlsproduct/Girlsproduct11";
import Girlsproduct12 from "./Girlsproduct/Girlsproduct12";
import Girlsproduct13 from "./Girlsproduct/Girlsproduct13";
import Girlsproduct14 from "./Girlsproduct/Girlsproduct14";
import Girlsproduct15 from "./Girlsproduct/Girlsproduct15";
import Boysproduct1 from "./Boysproduct/Boysproduct1";
import Boysproduct2 from "./Boysproduct/Boysproduct2";
import Boysproduct3 from "./Boysproduct/Boysproduct3";
import Boysproduct4 from "./Boysproduct/Boysproduct4";
import Boysproduct5 from "./Boysproduct/Boysproduct5";
import Boysproduct6 from "./Boysproduct/Boysproduct6";
import Boysproduct7 from "./Boysproduct/Boysproduct7";
import Boysproduct8 from "./Boysproduct/Boysproduct8";
import Boysproduct9 from "./Boysproduct/Boysproduct9";
import Boysproduct10 from "./Boysproduct/Boysproduct10";
import Boysproduct11 from "./Boysproduct/Boysproduct11";
import Boysproduct12 from "./Boysproduct/Boysproduct12";
import Boysproduct13 from "./Boysproduct/Boysproduct13";
import Boysproduct14 from "./Boysproduct/Boysproduct14";
import Boysproduct15 from "./Boysproduct/Boysproduct15";

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

        <Route path="/Women1" element={<Womenproduct1 />} />
        <Route path="/Women2" element={<Womenproduct2 />} />
        <Route path="/Women3" element={<Womenproduct3 />} />
        <Route path="/Women4" element={<Womenproduct4 />} />
        <Route path="/Women5" element={<Womenproduct5 />} />
        <Route path="/Women6" element={<Womenproduct6 />} />
        <Route path="/Women7" element={<Womenproduct7 />} />
        <Route path="/Women8" element={<Womenproduct8 />} />
        <Route path="/Women9" element={<Womenproduct9 />} />
        <Route path="/Women10" element={<Womenproduct10 />} />
        <Route path="/Women11" element={<Womenproduct11 />} />
        <Route path="/Women12" element={<Womenproduct12 />} />
        <Route path="/Women13" element={<Womenproduct13 />} />
        <Route path="/Women14" element={<Womenproduct14 />} />
        <Route path="/Women15" element={<Womenproduct15 />} />

        <Route path="/men1" element={<Menproduct1 />} />
        <Route path="/men2" element={<Menproduct2 />} />
        <Route path="/men3" element={<Menproduct3 />} />
        <Route path="/men4" element={<Menproduct4 />} />
        <Route path="/men5" element={<Menproduct5 />} />
        <Route path="/men6" element={<Menproduct6 />} />
        <Route path="/men7" element={<Menproduct7 />} />
        <Route path="/men8" element={<Menproduct8 />} />
        <Route path="/men9" element={<Menproduct9 />} />
        <Route path="/men10" element={<Menproduct10 />} />
        <Route path="/men11" element={<Menproduct11 />} />
        <Route path="/men12" element={<Menproduct12 />} />
        <Route path="/men13" element={<Menproduct13 />} />
        <Route path="/men14" element={<Menproduct14 />} />
        <Route path="/men15" element={<Menproduct15 />} />

        <Route path="/Boys1" element={<Boysproduct1 />} />
        <Route path="/Boys2" element={<Boysproduct2 />} />
        <Route path="/Boys3" element={<Boysproduct3 />} />
        <Route path="/Boys4" element={<Boysproduct4 />} />
        <Route path="/Boys5" element={<Boysproduct5 />} />
        <Route path="/Boys6" element={<Boysproduct6 />} />
        <Route path="/Boys7" element={<Boysproduct7 />} />
        <Route path="/Boys8" element={<Boysproduct8 />} />
        <Route path="/Boys9" element={<Boysproduct9 />} />
        <Route path="/Boys10" element={<Boysproduct10 />} />
        <Route path="/Boys11" element={<Boysproduct11 />} />
        <Route path="/Boys12" element={<Boysproduct12 />} />
        <Route path="/Boys13" element={<Boysproduct13 />} />
        <Route path="/Boys14" element={<Boysproduct14 />} />
        <Route path="/Boys15" element={<Boysproduct15 />} />

        <Route path="/Girls1" element={<Girlsproduct1 />} />
        <Route path="/Girls2" element={<Girlsproduct2 />} />
        <Route path="/Girls3" element={<Girlsproduct3 />} />
        <Route path="/Girls4" element={<Girlsproduct4 />} />
        <Route path="/Girls5" element={<Girlsproduct5 />} />
        <Route path="/Girls6" element={<Girlsproduct6 />} />
        <Route path="/Girls7" element={<Girlsproduct7 />} />
        <Route path="/Girls8" element={<Girlsproduct8 />} />
        <Route path="/Girls9" element={<Girlsproduct9 />} />
        <Route path="/Girls10" element={<Girlsproduct10 />} />
        <Route path="/Girls11" element={<Girlsproduct11 />} />
        <Route path="/Girls12" element={<Girlsproduct12 />} />
        <Route path="/Girls13" element={<Girlsproduct13 />} />
        <Route path="/Girls14" element={<Girlsproduct14 />} />
        <Route path="/Girls15" element={<Girlsproduct15 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
