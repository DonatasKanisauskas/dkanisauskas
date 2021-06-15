import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../common/components/Card";
import { addToCart, getProduct } from "../common/requests";
import Counter from "../common/components/Counter";
import Button from "../common/components/Button";
import Spinner from "../common/components/Spinner";
import useCounter from "../common/hooks/useCounter";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const counterProps = useCounter();

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      const { data } = await axios(getProduct(id));

      setIsLoading(false);
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  const handleAddToCartClick = () => {
    console.log("handle add to cart", counterProps.count);
    axios(addToCart());
  };

  if (isLoading) {
    return <Spinner text="Fetching product info" />;
  }

  return (
    <div className="flex m-auto px-2" style={{ maxWidth: 1000 }}>
      <div className="pr-6 max-w-1/2">
        <Card>
          <img src={product?.image} alt={product?.title} />
        </Card>
      </div>
      <div className="pl-6 max-w-1/2">
        <h1 className="text-2xl mb-4 font-semibold">{product?.title}</h1>
        <div className="text-3xl mb-4 font-bold">${product?.price}</div>
        <p className="mb-4">{product?.description}</p>
        <div className="mb-2 font-semibold">Quantity</div>
        <Counter className="mb-4" {...counterProps} />
        <Button type="primary" isRounded onClick={handleAddToCartClick}>
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}

export default ProductPage;
