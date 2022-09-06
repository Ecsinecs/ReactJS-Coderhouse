import React, { useEffect, useState } from "react";
import promesa from "../utils/promesa";
import {productos} from "../utils/productos";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        promesa(productos)
         .then(result => setProducts(result))
         .catch(err => console.log(err))
    }, [])

    return(
        <div className="container">
        <div className="containercards">
        {
            products.map(item => (
                //key={} sirve para solucionar el error.g
                <div className="card" key={item.id}>
                    <img className="card__img" src={item.image} alt=""/>
                    <p className="card__name">{item.name}</p>
                    <hr className="card__hr"/>
                    <div className="card__div">
                    <p>Precio: {item.price}$</p>
                    <p className="card__category">{item.categoryId}</p>
                    </div>
                    <button className="card__btn">Detalles</button>
                </div>
            ))
        }
        </div>
        </div>
    )
}

export default ItemListContainer