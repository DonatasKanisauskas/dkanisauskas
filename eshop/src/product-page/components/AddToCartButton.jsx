import useLoadingDots from "../../common/hooks/useLoadingDots";
import Button from "../../common/components/Button";

function LoadingButton(){
  const dots = useLoadingDots();
  return (
    <Button disabled type="primary">
      ADDING TO CART{dots}
    </Button>
  ) 
}

function Btn({onClick}) {
  return <Button onClick={onClick}>ADD TO CART</Button>
}

function AddToCartButton({ isLoading, onClick }){
  console.log("rendering");
  if(isLoading) return <LoadingButton />
  else return <Btn onClick={onClick} />
}

export default AddToCartButton;