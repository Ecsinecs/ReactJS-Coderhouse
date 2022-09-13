import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({item}) => {
    return (
        <>
        {/* key={} sirve para solucionar el error */}
                  <div className="card" key={item.id}>
                  <img className="card__img" src={item.image} alt="" />
                  <p className="card__name">{item.name}</p>
                  <hr className="card__hr" />
                  <div className="card__div">
                    <p>Precio: {item.price}$</p>
                    <p className="card__category">{item.categoryId}</p>
                  </div>
                  <Link to={`/item/${item.id}`}>
                    <button className="card__btn">Detalles</button>
                  </Link>
                  </div>
                  </>
)}

export default ItemList