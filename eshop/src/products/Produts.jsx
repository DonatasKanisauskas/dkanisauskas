import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setProducts(products);
      console.log(products);
    };

    getProducts();
  }, []);

  return (
    <ul className="flex flex-wrap justify-around">
      {products.map((product) => (
        <li className="p-3" key={product.id}>
          <div className="bg-white border w-64 h-90 hover:shadow-xl p-2">
            <div className="h-48 flex items-stretch">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full m-auto self-center"
              />
            </div>
            <div className="text-center font-semibold mt-3">
              {product.price}$
            </div>
            <div className="truncate text-center p-2" title={product.title}>
              {product.title}
            </div>
            <div className="grid justify-items-stretch">
              <button className="justify-self-center bg-gray-500 hover:bg-gray-600 w-32 h-10  text-white rounded">
                VIEW
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Products;
