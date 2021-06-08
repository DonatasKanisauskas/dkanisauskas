import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../common/components/Card";
import { getProduct } from "../common/requests";
import Counter from "../common/components/Counter";
import Button from "../common/components/Button";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      const { data } = await axios(getProduct(id));

      setIsLoading(false);
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (isLoading) {
    return <div>LOADING!!!</div>;
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
        <div className="text-3xl mb-4 font-bold">{product?.price}$</div>
        <p className="mb-4">{product?.description}</p>
        <div className="mb-2 font-semibold">Quantity</div>
        <Counter className="mb-4" />
        <Button
          className="bg-gray-500 hover:bg-gray-600 m-2 px-2 py-1 focus:outline-none"
          isRounded
        >
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}

export default ProductPage;
