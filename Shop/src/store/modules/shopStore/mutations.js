export default {
  setProducts(state, products) {
    state.products.splice(0, state.products.length, ...products);
  },
};