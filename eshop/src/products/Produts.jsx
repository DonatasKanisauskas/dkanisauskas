import { useEffect } from "react";
import Spinner from "../common/components/Spinner";
import useApi from "../common/hooks/useApi";
import { getProducts } from "../common/requests";
import ProductCard from "./components/ProductCard";

function Products() {
  const {data: products, isLoading, call } = useApi();

  useEffect(() => {
    call(getProducts);
  }, []); //eslint-disable-line

  if (isLoading || !products) {
    return <Spinner text="Fetching products" />;
  }

  return (
    <ul className="flex flex-wrap justify-around">
      {products.map((x) => (
        <ProductCard key={x.id} id={x.id} image={x.image} price={x.price} title={x.title} />
      ))}
    </ul>
  );
}

export default Products;
