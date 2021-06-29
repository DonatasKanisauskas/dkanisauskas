import { createContext, useEffect } from "react";
import useApi from "../hooks/useApi";
import { getCart } from "../requests";

export const CartContext = createContext({});

function CartProvider({ children }) {
  const { data, isLoading, call } = useApi();

  useEffect(() => {
    call(getCart);
  }, []); //eslint-disable-line

  return <CartContext.Provider value={{ cart: data, isLoading, refreshData: () => call(getCart) }}>{children}</CartContext.Provider>;
}

export default CartProvider;
