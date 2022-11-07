import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { getCheckout } from "../utils/firebaseConfig";
import { Link } from "react-router-dom";
import "../css/checkout.css";

const CheckoutContainer = () => {
  const [order, setOrder] = useState([]);
  const Cartctx = useContext(CartContext);

  useEffect(() => {
    getCheckout(Cartctx.checkoutId)
      .then((result) => setOrder([result]))
      .catch((err) => console.log(err));
  }, [Cartctx.checkoutId]);

  return (
    <>
      <div className="background">
        <div className="checkoutContainer">
          {order[0] ? (
            <>
              <div className="checkout">
                <h1 className="checkoutTitle">Datos de la compra</h1>
                <hr />
                <div className="checkoutInfoContainer">
                  <div className="checkoutBuyer">
                    <h2 className="buyerTitle">Comprador</h2>
                    <p>Nombre: {order[0].buyer.name}</p>
                    <p>Email: {order[0].buyer.email}</p>
                    <p>Telefono: {order[0].buyer.phone}</p>
                  </div>
                  <div className="checkoutBought">
                    <h3 className="boughtTitle">La compra:</h3>
                    <div className="checkoutItemList">
                      {order[0].items.map((item) => (
                        <div key={item.id} className="checkoutItem">
                          <p>
                            {item.qty} {item.title}(s)
                          </p>
                          <p>${item.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="dataTitle">Datos adicionales:</h4>
                    <p className="dataID">ID de la compra: {order[0].id}</p>
                  </div>
                </div>
              </div>
              <Link to="/ReactJS-Coderhouse">
                <button className="homepageBtn">
                  Volver a la pagina principal
                </button>
              </Link>
            </>
          ) : (
            <h1 className="loading">Cargando...</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckoutContainer;
