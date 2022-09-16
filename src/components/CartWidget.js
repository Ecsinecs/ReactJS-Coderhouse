import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return(
      <Link to="/cart">
        <div className="NavbarW__div">
        <FontAwesomeIcon
        icon={faCartShopping}
        className="navbarW__cart"
      ></FontAwesomeIcon>
      <p className="navbarW__number">0</p>
      </div>
      </Link>
    )
}

export default CartWidget;