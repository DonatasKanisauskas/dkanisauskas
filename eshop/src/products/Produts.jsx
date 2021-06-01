import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios({
        method: "GET",
        url: `https://fakestoreapi.com/products`,
      });
      setProducts(data);
    };

    getProducts();
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
