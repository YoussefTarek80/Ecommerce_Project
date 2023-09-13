export default {
    cartItems(state) {
      return state.cart;
    },
    totalQuantity(state) {
      let quantity = 0;
      if (state.cartItems) {
        state.cartItems.forEach((item) => {
          quantity += item.quantity;
        });
      }
      return quantity;
    },
    totalCheckOut(state){
      let total=0;
      if(state.cartItems){
        state.cartItems.forEach((item)=>{
          total+=item.total;
        })
      }
      return total;
    }
  };
  