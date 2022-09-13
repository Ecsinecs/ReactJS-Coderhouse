import React, { useEffect, useState } from "react";
import promesa from "../utils/promesa";
import { productos } from "../utils/productos";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      promesa(productos.filter((item) => item.categoryId === category))
        .then((result) => setProducts(result))
        .catch((err) => console.log(err));
    } else {
      promesa(productos)
        .then((result) => setProducts(result))
        .catch((err) => console.log(err));
    }
  }, [category]);

  return (
    <div className="container">
      <div className="containercards">
        {products.map((item) => (
          <ItemList item={item}/>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;