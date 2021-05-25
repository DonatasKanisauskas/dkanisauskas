import Button from "../../common/components/Button";
import Card from "../../common/components/Card";

function ProductCard({ id, image, price, title }) {
  return (
    <li className="p-3">
      <Card className="w-64 h-90">
        <div className="h-48 flex items-stretch">
          <img
            src={image}
            alt={title}
            className="max-h-full m-auto self-center"
          />
        </div>
        <div className="truncate text-center p-2" title={title}>
          {title}
        </div>
        <div className="text-center font-semibold">{price}$</div>
        <Button to={`/products/${id}`} className="flex">
          VIEW
        </Button>
      </Card>
    </li>
  );
}

export default ProductCard;
