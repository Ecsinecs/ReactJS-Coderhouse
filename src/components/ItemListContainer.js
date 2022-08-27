import React from "react";
import Counter from "./Counter";

const ItemListContainer = () => {

    const whenAdd = (qty) => {
        alert(`Usted compró ${qty} A's`)
        console.log(qty)
    }

    return(
        <>
        <h1 className="Huh">A</h1>
        <Counter max={10} initial={0} whenAdd={whenAdd} />
        </>
    )
}

export default ItemListContainer