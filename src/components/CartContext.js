import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, qty) => {
    let itemQty = {
      ...item,
      qty,
    }; //Crea un nuevo item que le añade el qty.

    setCartList([...cartList, itemQty]); //Esto hace que sobrescriba el array con otro array que contenga lo que tenia el array anterior + item
  };

  const removeItem = (id) => {
    let newArray = cartList.filter((item) => item.id !== id);
    setCartList(newArray);
  };

  const clear = () => {
    setCartList([]);
  };

  const isInCart = (name) => {
    let find = cartList.find((item) => {
      return item.name === name;
    });
    return find !== undefined
  };

  const sumQty = (id, addedqty) => {
    let product = cartList.find((item) => {
        return item.id === id;
    })
    product.qty = product.qty + addedqty
  }

  return (
    // Entre llaves porque value solo puede tener una cosa, con la llave se convierte en objeto y es una sola cosa con varias dentro.
    <CartContext.Provider
      value={{ cartList, addItem, removeItem, clear, isInCart, sumQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
