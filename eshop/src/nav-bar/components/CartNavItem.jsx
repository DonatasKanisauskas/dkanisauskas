import NavItem from "./NavItem";
import { ReactComponent as CartIcon } from "../../common/assets/cart.svg";
import { useContext } from "react";
import { CartContext } from "../../common/providers/CartProvider";

function CartIconWithNo() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <CartIcon className="w-8 h-8" />
      <span className="absolute text-yellow-400 text-xs font-bold top-7 right-2">{cart?.products?.length}</span>
    </>
  );
}

function CartNavmItem() {
  return <NavItem route="/cart" content={<CartIconWithNo />} className="ml-auto mr-2 relative" />;
}

export default CartNavmItem;
