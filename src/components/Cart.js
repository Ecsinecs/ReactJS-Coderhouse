import {
  collection,
  serverTimestamp,
  doc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { db } from "../utils/firebaseConfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/cart.css";

const Cart = () => {
  const Cartctx = useContext(CartContext);

  const buy = () => {
    let itemsBought = Cartctx.cartList.map((item) => ({
      id: item.id,
      title: item.name,
      price: Cartctx.singleTotal(item.id),
      qty: item.qty,
    }));
    let bought = {
      buyer: {
        name: "Yi Long Musk",
        email: "yilongmusk@notmusk.com",
        phone: "41 4920-1924",
      },
      date: serverTimestamp(), //Saca la fecha y tiempo del servidor.
      items: itemsBought,
    };

    const createOrder = async () => {
      const newOrder = doc(collection(db, "orders")); //Crea la colección
      await setDoc(newOrder, bought); //Crea nuevo documento
      return newOrder;
    };

    createOrder()
      .then((result) =>
        Cartctx.cartList.forEach(async (item) => {
          const itemRef = doc(db, "productos", item.id);
          await updateDoc(itemRef, {
            stock: increment(-item.qty),
          });
          Cartctx.getCheckoutId(result.id);
          Cartctx.clear();
        })
      )
      .catch((err) =>
        console.log(err)
      );
  };

  return (
    <>
      <div className="list__background">
        <div className="list__container">
          {Cartctx.cartList.map((item) => (
            <div key={item.id} className="obj__div">
              <img src={item.image} alt="" className="obj__img" />
              <p className="obj__nameQty">
                {item.qty} {item.name}
              </p>
              <p className="obj__price">Precio: ${item.price} c/u</p>
              <p className="obj__totalPrice">
                Total: ${Cartctx.singleTotal(item.id)}
              </p>
              <button
                className="obj__remove"
                onClick={() => Cartctx.removeItem(item.name)}
              >
                Eliminar
              </button>
              {/* Se envuelve en funcion anonima porque le pasas parametros. */}
            </div>
          ))}
        </div>
        {Cartctx.cartList.length > 0 ? (
          <div className="list__buttons">
            <div className="list__pucharse">
              <p className="list__total">Total: ${Cartctx.priceTotalAll()}</p>
              <Link to="/ReactJS-Coderhouse/checkout">
                <button className="list__buy" onClick={buy}>
                  Realizar compra
                </button>
              </Link>
            </div>
            <button className="list__clear" onClick={Cartctx.clear}>
              Eliminar todo
            </button>
          </div>
        ) : (
          <div className="noCart">
            <p className="noCart__text">
              Actualmente no hay nada en el carrito...
            </p>
            <Link to="/ReactJS-Coderhouse">
              <button className="noCart__btn">
                Volver a la pagina principal
              </button>
            </Link>
          </div>
        )}
        <ToastContainer
          position="bottom-right"
          autoClose={8000}
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

export default Cart;
