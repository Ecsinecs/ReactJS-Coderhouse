import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "../css/navbar.css"

const Navbar = () => {
    return (
        <header>
        <nav className="navbar">
          <div className="navbar__logo">
            <FontAwesomeIcon
              icon={faLeaf}
              className="navbar__leaf"
            ></FontAwesomeIcon>
             <Link to="/ReactJS-Coderhouse"><h1 className="navbar__title">Natura Shop</h1></Link>
          </div>
          <ul className="navbar__ul">
            <Link to="/ReactJS-Coderhouse/category/Verdura"><li>Verduras</li></Link>
            <Link to="/ReactJS-Coderhouse/category/Fruta"><li>Frutas</li></Link>
            <Link to="/ReactJS-Coderhouse/category/Pack"><li>Packs</li></Link>
          </ul>
          <CartWidget/>
        </nav>
      </header>
    );
}

//el componente tiene que ser en mayuscula

export default Navbar