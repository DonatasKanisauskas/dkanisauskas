const fakeStoreApiUrl = `https://fakestoreapi.com`;

export const getProducts = { method: "GET", url: `${fakeStoreApiUrl}/products` };

export const getProduct = (id) => ({ method: "GET", url: `${fakeStoreApiUrl}/products/${id}` });

export const addToCart = (productId, quantity) => ({
  method: "POST", url: `${fakeStoreApiUrl}/carts`, data: {
    userId: 5,
    products: [{ productId, quantity }]
  }
});

export const getCart = {
  url: "https://fakestoreapi.com/carts/5",
  method: "GET"
};