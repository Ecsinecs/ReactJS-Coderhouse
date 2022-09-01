import React, { useEffect, useState } from "react";
import promesa from "../utils/promesa";
import Counter from "./Counter";
import {data} from "../utils/data";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const whenAdd = (qty) => {
        alert(`Usted compró ${qty} A's`)
    }

    useEffect(() => {
        promesa(data)
         .then(result => setProducts(result))
         .catch(err => console.log(err))
    }, [])

    return(
        <div className="container">
        <div className="containercards">
        {
            products.map(item => (
                <div className="card">
                    <img className="card__img" src={item.image} alt=""/>
                    <p className="card__name">{item.name}</p>
                    <hr className="card__hr"/>
                    <div className="card__div">
                    <p>Stock: {item.stock}</p>
                    <p className="card__category">{item.categoryId}</p>
                    </div>
                    <Counter max={item.stock} initial={0} whenAdd={whenAdd} />
                </div>
            ))
        }
        </div>
        </div>
    )
}

export default ItemListContainer