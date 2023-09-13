import axios from "axios";
export default {
  async fetchUserCart({ commit }) {
    try {
      const response = await axios.get("http://localhost:3000/auth/getusers");
      const userid = localStorage.getItem("UserID");
      const users = response.data.users;
      const currentUser = users.find((user) => user._id === userid);
      if (currentUser) {
        commit("setUserCart", currentUser.cart);
      } else {
        console.log("User not found.");
      }
    } catch (error) {
      console.error("Error fetching user's cart:", error);
    }
  },
  async deleteFromCart({ commit }, productId) {
    try {
      const userid = localStorage.getItem('UserID');
      await axios.delete(`http://localhost:3000/auth/deleteFromCart/${userid}/${productId}`);
      console.log('Deleted from cart');
      commit('REMOVE_ITEM_FROM_CART', productId);
    } catch (error) {
      console.error('Error deleting from cart:', error);
    }
  },
};
