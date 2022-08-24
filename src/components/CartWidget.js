import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
    return(
        <div className="NavbarW__div">
        <FontAwesomeIcon
        icon={faCartShopping}
        className="navbarW__cart"
      ></FontAwesomeIcon>
      <p className="navbarW__number">0</p>
      </div>
    )
}

export default CartWidget;