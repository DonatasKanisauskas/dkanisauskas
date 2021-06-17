import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../common/components/Spinner";
import { getProducts } from "../common/requests";
import ProductCard from "./components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const { data } = await axios(getProducts);

      setIsLoading(false);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <Spinner text="Fetching products" />;
  }

  return (
    <div>
      <ul className="flex flex-wrap justify-around">
        {products.map((x) => (
          <ProductCard key={x.id} id={x.id} image={x.image} price={x.price} title={x.title} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
