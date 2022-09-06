import React from "react"
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import promesa from "../utils/promesa"
import { productos } from "../utils/productos"


const ItemDetailContainer = () => {

    const [dato, setDato] = useState([])

    useEffect(() => {
        promesa(productos[8])
         .then(result => setDato(result))
         .catch(err => console.log(err))
    }, [])

    return (
    <>
    <ItemDetail item={dato}/>
    </>
    )
}

export default ItemDetailContainer