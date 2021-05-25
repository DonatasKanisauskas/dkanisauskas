import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setProducts(products);
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
