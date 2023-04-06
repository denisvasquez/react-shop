import { useState } from "react";

const initialState = {
  cart: []
}

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    });
  }

  const removeItem = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id != payload.id)
    })
  }

  return {
    state,
    addToCart,
    removeItem
  }
}

export default useInitialState;
