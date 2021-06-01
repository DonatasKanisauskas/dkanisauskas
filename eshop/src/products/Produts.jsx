import axios from "axios";
import { useEffect, useState } from "react";
import { getProducts } from "../common/requests";
import ProductCard from "./components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios(getProducts);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <ul className="flex flex-wrap justify-around">
        {products.map((x) => (
          <ProductCard
            key={x.id}
            id={x.id}
            image={x.image}
            price={x.price}
            title={x.title}
          />
        ))}
      </ul>
    </div>
  );
}

export default Products;
