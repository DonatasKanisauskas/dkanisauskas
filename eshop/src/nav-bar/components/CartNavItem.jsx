import NavItem from "./NavItem";
import { ReactComponent as CartIcon } from "../../common/assets/cart.svg";

function CartInconWithNumber() {
  return (
    <div>
      <CartIcon className="w-8 h-8" />
    </div>
  );
}

function CartNavmItem() {
  return <NavItem route="/cart" content={<CartInconWithNumber />}></NavItem>;
}

export default CartNavmItem;
