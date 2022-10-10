import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, qty) => {
    let itemQty = {
      ...item,
      qty 
    }; //Crea un nuevo item que le añade el qty.

    setCartList([...cartList, itemQty]); //Esto hace que sobrescriba el array con otro array que contenga lo que tenia el array anterior + item
  };

  const removeItem = (name) => {
    let newArray = cartList.filter((item) => item.name !== name);
    setCartList(newArray);
  };

  const clear = () => {
    setCartList([]);
  };

  const isInCart = (name) => {
    let find = cartList.find((item) => {
      return item.name === name;
    });
    return find !== undefined;
  };

  const sumQty = (id, addedqty) => {
    let product = cartList.find((item) => {
      return item.id === id;
    });
    product.qty = product.qty + addedqty;
    setCartList([...cartList])
  };

  const calcTotalItems = () => {
    let items = cartList.map((item) => item.qty);
    return items.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };

  const priceTotalAll = () => {
    let totalAll = cartList.map((item) => item.qty * item.price);
    return totalAll.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };

  const singleTotal = (id) => {
    let prod = cartList.find((item) => id === item.id);
    let total = prod.price * prod.qty;
    return total;
  };

  return (
    // Entre llaves porque value solo puede tener una cosa, con la llave se convierte en objeto y es una sola cosa con varias dentro.
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        removeItem,
        clear,
        isInCart,
        sumQty,
        calcTotalItems,
        priceTotalAll,
        singleTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
