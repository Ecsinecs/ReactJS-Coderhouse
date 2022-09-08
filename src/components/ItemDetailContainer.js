import React from "react"
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import promesa from "../utils/promesa"
import { productos } from "../utils/productos"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

    const [dato, setDato] = useState([])
    const {id} = useParams(); 
    useEffect(() => {
            promesa(productos.find(item => item.id === parseInt(id)))
         .then(result => setDato(result))
         .catch(err => console.log(err))
    }, [id]);

    return (
    <>
    <ItemDetail item={dato}/>
    </>
    )
}

export default ItemDetailContainer