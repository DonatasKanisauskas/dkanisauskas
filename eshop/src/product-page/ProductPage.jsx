import { useParams } from "react-router";

function ProductPage() {
  const { productId } = useParams();

  return (
    <div className="bg-white border w-64 h-90 hover:shadow-xl p-2">
      <div>
        <p>ProductPage {productId}</p>
      </div>
    </div>
  );
}

export default ProductPage;
