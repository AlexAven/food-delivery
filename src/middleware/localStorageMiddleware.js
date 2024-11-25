const localStorageMiddleware = (storeAPI) => (next) => (action) => {
  const result = next(action);
  const state = storeAPI.getState();
  const cartState = state.cart;
  const currentItemState = state.catalog.currentItem;

  localStorage.setItem('cart', JSON.stringify(cartState));
  localStorage.setItem('currentItem', JSON.stringify(currentItemState));
  return result;
};

export default localStorageMiddleware;
