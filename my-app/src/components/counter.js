// Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();

    const increment = () => {
        dispatch({type: 'INCREMENT', payload: 1})
    }
    const decrement = () => {
        dispatch({type: 'DECREMENT', payload: 1})
    }
    const reset = () => {
        dispatch({type: 'RESET'})
    }


  return (
    <div>
      <h1>Compteur</h1>
      <p>Nom: {name}</p>
      <p>Valeur du compteur: {count}</p>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>
      <button onClick={reset}>Réinitialiser</button>
      {/* <button onClick={() => changeName("Nouveau Nom")}>Changer le nom</button> */}
    </div>
  );
};

export default Counter;



