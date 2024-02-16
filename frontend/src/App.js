import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import Show from "./Components/Show/Show";
import AllProduct from "./Pages/AllProduct";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Show/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/classics" element={<ShopCategory category='Classics'/>}/>
          <Route path="/sport" element={<ShopCategory category='Sport'/>}/>
          <Route path="/casual" element={<ShopCategory category='Casual'/>}/>
          <Route path="/allProduct" element={<AllProduct/>}/>
          <Route path="product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
