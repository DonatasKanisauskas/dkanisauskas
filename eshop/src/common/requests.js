export const getProducts = { method: "GET", url: `https://fakestoreapi.com/products` };
export function getProduct(id){
  return { method: "GET", url: `https://fakestoreapi.com/products/${id}` };
}