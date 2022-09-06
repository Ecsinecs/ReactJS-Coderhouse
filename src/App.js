import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";


const App = () => {
  return (
    <>
    <Navbar />
    {/* <ItemListContainer/> */}
    <ItemDetailContainer/>
    </>
  );
}

export default App;
