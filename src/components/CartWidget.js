import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const Cartctx = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="NavbarW__div">
        <FontAwesomeIcon
          icon={faCartShopping}
          className="navbarW__cart"
        ></FontAwesomeIcon>
        <p className="navbarW__number">{Cartctx.calcTotalItems()}</p>
      </div>
    </Link>
  );
};

export default CartWidget;
