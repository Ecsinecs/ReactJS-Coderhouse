import React, { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [checkoutId, setCheckoutId] = useState("");

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
    toast.success(`Se eliminó ${name} del carrito.`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored"
  })
};

  const clear = () => {
    setCartList([]);
    toast.success(`Se eliminaron todos los productos del carrito.`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored"
})
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

  const getCheckoutId = (id) => {
    setCheckoutId(id)
  }

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
        getCheckoutId,
        checkoutId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
