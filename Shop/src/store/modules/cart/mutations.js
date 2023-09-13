export default {
    setUserCart(state, cartItems) {
      state.cartItems = cartItems;
    },
    REMOVE_ITEM_FROM_CART(state, productId) {
      const index = state.cartItems.findIndex(item => item.product === productId);
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
    },
  };
