import NavItem from "./NavItem";
import { ReactComponent as CartIcon } from "../../common/assets/cart.svg";

function CartInconWithNumber() {
  return (
    <div>
      <CartIcon className="w-8 h-8" />
      <span className="absolute text-yellow-400 text-xs font-bold top-7 right-2">2</span>
    </div>
  );
}

function CartNavmItem() {
  return <NavItem route="/cart" content={<CartInconWithNumber />}></NavItem>;
}

export default CartNavmItem;
