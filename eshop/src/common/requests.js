export const getProducts = { method: "GET", url: `https://fakestoreapi.com/products` };
export const getProduct = (id) => ({ method: "GET", url: `https://fakestoreapi.com/products/${id}` });