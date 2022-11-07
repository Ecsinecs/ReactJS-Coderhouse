import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import CheckoutBtn from "./CheckoutBtn";
import Counter from "./Counter";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ item }) => {
  const [bought, setBought] = useState(false);

  const Cartctx = useContext(CartContext);

  const whenAdd = (qty) => {
    if (!Cartctx.isInCart(item.name)) {
      setBought(true);
      Cartctx.addItem(item, qty);
      toast.success(`Se añadieron ${qty} ${item.name}(s) al carrito.`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    } else {
      Cartctx.sumQty(item.id, qty);
      toast.success(`Se añadió ${qty} unidad(es) más de ${item.name}(s) al carrito.`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      setBought(true);
    }
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
              {bought ? (
                <CheckoutBtn />
              ) : (
                <Counter max={item.stock} initial={0} whenAdd={whenAdd} />
              )}
            </div>
          </div>
        ) : (
          <h1 className="loading">Cargando...</h1>
        )}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="colored"
        />
      </div>
    </>
  );
};

export default ItemDetail;
