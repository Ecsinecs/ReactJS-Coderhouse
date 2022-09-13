import React, { useState } from "react";
import CheckoutBtn from "./CheckoutBtn";
import Counter from "./Counter";

const ItemDetail = ({ item }) => {
  const [bought, setBought] = useState(false)
  const whenAdd = (qty) => {
    setBought(true)
    alert(`¡Has comprado ${qty} ${item.name}(s)!`);
  };

  return (
    <>
      <div className="iDC">
        {item && item.image ? (
          <div className="iDC__container">
            <img className="iDC__img" src={item.image} alt="" />
            <div className="iDC__div">
              <h1 className="iDC__name">{item.name}</h1>
              <hr className="iDC__hr" />
              <h2 className="iDC__desc">{item.desc}</h2>
              <div className="iDC__PyS">
                <p className="iDC__price">Precio: ${item.price}</p>
                <p className="iDC__stock">{item.stock} :Stock</p>
              </div>
              {bought ? <CheckoutBtn/>
                      : <Counter max={item.stock} initial={0} whenAdd={whenAdd} />
              }
            </div>
          </div>
        ) : (
          <h1 className="loading">Cargando...</h1>
        )}
      </div>
    </>
  );
};

export default ItemDetail;
