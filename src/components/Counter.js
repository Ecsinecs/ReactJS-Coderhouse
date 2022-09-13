import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Counter = ({ max = 0, initial = 0, whenAdd }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(initial);
  }, []);

  const add = () => {
    if (counter < max) {
      setCounter((prev) => prev + 1); // si se hace counter++ o counter+1 se toma como una constante y tira error (?)
    }
  };

  const substract = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="counter">
        <button className="counter__sub" onClick={substract}>
          -
        </button>
        <div className="counter__number">{counter}</div>
        <button className="counter__add" onClick={add}>
          +
        </button>
      </div>
      {counter ? (
        <button className="counter__buybutton" onClick={() => whenAdd(counter)}>
          ¡Añadir!
          <FontAwesomeIcon
            icon={faCartShopping}
            className="counter__cart"
          ></FontAwesomeIcon>
        </button>
      ) : (
        <button disabled className="counter__buybutton" onClick={() => whenAdd(counter)}>
          ¡Añadir!
          <FontAwesomeIcon
            icon={faCartShopping}
            className="counter__cart"
          ></FontAwesomeIcon>
        </button>
      )}
    </>
  );
};

export default Counter;
