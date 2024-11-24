const localStorageMiddleware = (storeAPI) => (next) => (action) => {
  const result = next(action);
  const state = storeAPI.getState();
  const cartState = state.cart;

  localStorage.setItem('cart', JSON.stringify(cartState));
  return result;
};

export default localStorageMiddleware;
