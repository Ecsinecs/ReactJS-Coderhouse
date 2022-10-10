import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/ReactJS-Coderhouse" element={<ItemListContainer/>}/>
    <Route path="/category/:category" element={<ItemListContainer/>}/>
    <Route path="/item/:id" element={<ItemDetailContainer/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
