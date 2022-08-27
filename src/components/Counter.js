//Counter | + = +1 / - = -1 | if < stock = +1 / if > stock = do nothing | if > initial = -1 / if < initial = do nothing.

import React, { useEffect, useState } from "react"

const Counter = ({ max = 0, initial = 0, whenAdd}) => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        setCounter(initial);
    },[])

    const add = () => {
        if (counter < max) {
         setCounter (counter + 1) // si se hace counter++ o counter+1 se toma como una constante y tira error (?)
        }
    }

    const substract = () => {
        if (counter > 0) {
            setCounter (counter - 1)
        }
    }

    return (
        <>
        <button onClick={add}>+</button>
        {counter}
        <button onClick={substract}>-</button>
        <button onClick={() => whenAdd(counter)}>¡Añadir!</button>
        </>
    )

}

export default Counter