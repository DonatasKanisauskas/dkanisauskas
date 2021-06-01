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

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios(getProduct(id));
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

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
        <Counter />
        <Button>ADD TO CART</Button>
      </div>
    </div>
    // <div className="border max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-4xl">
    //   <div className="md:flex p-2">
    //     <div className="md:flex-shrink-0 border">
    //       <Card >
    //         <img
    //           className="w-48 self-center m-auto"
    //           src={product?.image}
    //           alt={product?.title}
    //         />
    //       </Card>
    //     </div>
    //     <div className="p-8">
    //       <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
    //         {product.title}
    //       </div>
    //       <p className="mt-1 text-gray-500 font-semibold">{product.price}$</p>
    //       <p className="mt-2 text-gray-500">{product.description}</p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ProductPage;
