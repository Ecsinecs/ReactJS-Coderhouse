import "./App.css";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faLeaf } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__logo">
          <FontAwesomeIcon
            icon={faLeaf}
            className="navbar__leaf"
          ></FontAwesomeIcon>
          <h1 className="navbar__title">Natura Shop</h1>
        </div>
        <ul className="navbar__ul">
          <li>Verduras</li>
          <li>Frutas</li>
          <li>Packs</li>
        </ul>
        <FontAwesomeIcon
          icon={faCartShopping}
          className="navbar__cart"
        ></FontAwesomeIcon>
      </nav>
    </header>
  );
}

export default App;
