import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProduct } from "../common/requests";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios(getProduct(id));
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="border max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-4xl">
      <div className="md:flex p-2">
        <div className="md:flex-shrink-0 border">
          <img
            className="w-48 self-center m-auto"
            src={product.image}
            alt="Man looking at item at a store"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {product.title}
          </div>
          <p className="mt-1 text-gray-500 font-semibold">{product.price}$</p>
          <p className="mt-2 text-gray-500">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
