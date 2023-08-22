import axios from "axios";
export default {
  async fetchProducts({ commit }) {
    try {
      const response = await axios.get('http://localhost:3000/product');
      
      commit('setProducts', response.data);
      
    } catch (error) {
      console.error(error);
    }
  },
};
