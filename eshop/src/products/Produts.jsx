import { useEffect, useState } from "react";

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
    <ul className="flex flex-wrap">
      {products.map((product) => (
        <li className="p-3" key={product.id}>
          <div className="bg-white border w-64 h-80 hover:shadow-lg rounded">
            <div>{product.title}</div>
            <div></div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Products;
