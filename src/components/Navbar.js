import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import CartWidget from "./CartWidget";

const Navbar = () => {
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
          <CartWidget/>
        </nav>
      </header>
    );
}

//el componente tiene que ser en mayuscula

export default Navbar