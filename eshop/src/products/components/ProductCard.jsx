import { Link } from "react-router-dom";
import Card from "../../common/components/Card";

function ProductCard({ id, image, name, price, title }) {
  return (
    <li className="p-3">
      <Card className="w-64 h-90" iSRounded>
        <div className="h-48 flex items-stretch">
          <img
            src={image}
            alt={name}
            className="max-h-full m-auto self-center"
          />
        </div>
        <div className="truncate text-center p-2" title={title}>
          {title}
        </div>
        <div className="text-center font-semibold">{price}$</div>
        <div className="grid justify-items-stretch pt-3 p-2">
          <Link
            className="justify-self-center bg-gray-500 hover:bg-gray-600 w-24 text-white rounded text-center"
            to={`/product/${id}`}
          >
            VIEW
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default ProductCard;
