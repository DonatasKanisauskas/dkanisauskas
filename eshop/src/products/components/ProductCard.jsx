import Button from "../../common/components/Button";
import Card from "../../common/components/Card";

function ProductCard({ id, image, price, title }) {
  return (
    <li className="p-3">
      <Card className="w-64 h-90" isRounded>
        <div className="h-48 flex items-stretch">
          <img src={image} alt={title} className="max-h-full m-auto self-center" />
        </div>
        <div className="truncate text-center p-2 pb-1 font-semibold" title={title}>
          {title}
        </div>
        <div className="text-center font-bold">${price}</div>
        <Button to={`/products/${id}`} className="w-20 self-center mx-auto m-2" isRounded>
          VIEW
        </Button>
      </Card>
    </li>
  );
}

export default ProductCard;
