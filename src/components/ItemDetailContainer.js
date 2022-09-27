import React from "react"
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { singleFetch } from "../utils/firebaseConfig"


const ItemDetailContainer = () => {

    const [dato, setDato] = useState([])
    const {id} = useParams(); 
    
    useEffect(() => {
        singleFetch(id)
         .then((result) => setDato(result))
         .catch(err => console.log(err))
    }, [id]);

    return (
    <>
    <ItemDetail item={dato}/>
    </>
    )
}

export default ItemDetailContainer