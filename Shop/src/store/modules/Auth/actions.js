import axios from "axios";
export default {
  async fetchUsers({ commit }) {
    try {
      const response = await axios.get('http://localhost:3000/users');
      commit('setUsers', response.data);
    } catch (error) {
      console.error(error);
    }
  },
};
