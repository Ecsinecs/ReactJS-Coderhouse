import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path="/category/:category" element={<ItemListContainer/>}/>
    <Route path="/item/:id" element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
