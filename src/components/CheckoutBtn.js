import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CheckoutBtn = () => {
  return (
    <Link to="/">
      <button className="counter__buybutton">
        Ir al carrito
        <FontAwesomeIcon
          icon={faCartShopping}
          className="counter__cart"
        ></FontAwesomeIcon>
      </button>
    </Link>
  );
};

export default CheckoutBtn;
