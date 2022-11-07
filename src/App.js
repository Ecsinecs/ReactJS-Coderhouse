import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckoutContainer from "./components/CheckoutContainer";
import CartContextProvider from "./components/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <CartContextProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/ReactJS-Coderhouse" element={<ItemListContainer/>}/>
    <Route path="/ReactJS-Coderhouse/category/:category" element={<ItemListContainer/>}/>
    <Route path="/ReactJS-Coderhouse/item/:id" element={<ItemDetailContainer/>}/>
    <Route path="/ReactJS-Coderhouse/cart" element={<Cart/>}/>
    <Route path="/ReactJS-Coderhouse/checkout" element={<CheckoutContainer/>}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
