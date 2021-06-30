import { useContext, useEffect } from "react";
import { CartContext } from "../common/providers/CartProvider";
import Spinner from "../common/components/Spinner";

function Cart() {
  const { cart, isLoading, refreshData } = useContext(CartContext);

  useEffect(() => {
    refreshData();
  }, []); //eslint-disable-line

  if (isLoading) {
    return <Spinner />;
  }

  return <div>{JSON.stringify(cart)}</div>;
}

export default Cart;
