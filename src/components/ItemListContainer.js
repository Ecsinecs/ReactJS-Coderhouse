import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { firestoreFetch } from "../utils/firebaseConfig";
import "../css/cards.css"

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    setProducts([]);
    firestoreFetch(category).then((result) => setProducts(result));
  }, [category]);

  return (
    <div className="container">
      {products.length > 0 ? (
        <div className="containercards">
          {products.map((item) => (
            <ItemList key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <h1 className="loading">Cargando...</h1>
      )}
    </div>
  );
};

export default ItemListContainer;
