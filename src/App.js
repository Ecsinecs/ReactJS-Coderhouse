import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import ItemListContainer from "./components/ItemListContainer";


const App = () => {
  return (
    <>
    <Navbar />
    <ItemListContainer/>
    </>
  );
}

export default App;
