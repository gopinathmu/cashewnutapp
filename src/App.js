import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Cart from "./components/cart/cart";
import Slider from "./components/slider/slider";
import Footer from "./components/Footer/Footer";
import "./App.css"
import Product from "./components/Product/Product";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
        />
        <Route
          path="/"
          element={
            <div>
              <Navbar setShow={setShow} size={cart.length} />
              <Slider />
              <Product handleClick={handleClick} />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
