import React, { useReducer, useState } from "react";

type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREMENT": {
      return state + 1;
    }
    case "DECREMENT": {
      return state - 1;
    }
    default: {
      throw new Error("Unhandled Action");
    }
  }
}

export function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: "INCREMENT" });
  const onDecrease = () => dispatch({ type: "DECREMENT" });

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}
