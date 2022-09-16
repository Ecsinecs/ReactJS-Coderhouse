import React, { useContext } from "react"
import { CartContext } from "./CartContext"

const Cart = () => {

    const Cartctx = useContext(CartContext)
    console.log(Cartctx)

    const buy = () => {
        alert("Se realizó tu compra.")
        Cartctx.clear()
    }

    return (
        <>
        <div className="list__background">
        <div className="list__container">
        {
            Cartctx.cartList.map(item => 
                <div className="obj__div">
                <img src={item.image} alt="" className="obj__img"/>
                <p className="obj__nameQty">{item.qty} {item.name}</p>
                <p className="obj__price">Precio: ${item.price} c/u</p>
                <button className="obj__remove" onClick={() => Cartctx.removeItem(item.id)}>Eliminar</button> 
                {/* Se envuelve en funcion anonima porque le pasas parametros. */}
                </div>
                )
        }
        <div className="list__buttons">
        <button className="list__clear" onClick={Cartctx.clear}>Clear</button>
        <button className="list__buy" onClick={buy}>Realizar compra</button>
        </div>
        </div>
        </div>
        </>
    )
}

export default Cart