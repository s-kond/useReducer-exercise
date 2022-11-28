import React, { useReducer } from "react";
import HomeButton from "../components/HomeButton";

const ACTIONS = {
  DECREMENT: "decrement",
  INCREMENT: "increment",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <>
      <h1>Counter with useReducer</h1>
      <p>{state.count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <hr />
      <HomeButton />
    </>
  );
}
