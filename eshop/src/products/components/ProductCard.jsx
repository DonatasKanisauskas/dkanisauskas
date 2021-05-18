import { Link } from "react-router-dom";

function ProductCard({ id, image, name, price, title }) {
  return (
    <li className="p-3">
      <div className="bg-white border w-64 h-90 hover:shadow-xl p-2">
        <div className="h-48 flex items-stretch">
          <img
            src={image}
            alt={name}
            className="max-h-full m-auto self-center"
          />
        </div>
        <div className="text-center font-semibold mt-3">{price}$</div>
        <div className="truncate text-center p-2" title={title}>
          {title}
        </div>
        <div className="grid justify-items-stretch">
          <Link
            className="justify-self-center bg-gray-500 hover:bg-gray-600 w-24 text-white rounded text-center"
            to={`/products/${id}`}
          >
            VIEW
          </Link>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
