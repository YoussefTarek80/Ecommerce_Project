import axios from "axios";
export default {
  async fetchAdmins({ commit }) {
    try {
      const response = await axios.get("http://localhost:3000/auth/getadmins");
      const userid = localStorage.getItem("UserID");
      const admins = response.data.users;
      const currentAdmin = admins.filter(user => user._id === userid);
      console.log(currentAdmin)
      if(currentAdmin){
        commit("setAdmins", currentAdmin);
      }else {
        console.log("User not found.");
      }
    } catch (err) {
      console.error(err);
    }
  },
  async fetchTotalAdmins({commit}){
    try {
      const response = await axios.get("http://localhost:3000/auth/getadmins");
      const admins = response.data.users;
      commit("CountTotalAdmins", admins.length);
    } catch (err) {
      console.error(err);
    }
  },
  async fetchUsers({commit}){
    try {
      const response = await axios.get("http://localhost:3000/auth/getusers");
      const users = response.data.users;
      commit("CountTotalUsers", users.length);
    } catch (err) {
      console.error(err);
    }
  },
  async fetchUsersArray({commit}){
    try {
      const response = await axios.get("http://localhost:3000/auth/getusers");
      const users = response.data.users;
      commit("Users", users);
    } catch (err) {
      console.error(err);
    }
  },
  async fetchAndDeleteUser({commit},id){
    try {
       await axios.delete(`http://localhost:3000/auth/deleteUser/${id}`);
      commit('REMOVE_USER', id);
    } catch (err) {
      console.error(err);
    }
  },
  // async fetchAllMessages({commit},id){
  //   try {
  //     const response = await axios.get(`http://localhost:3000/getuserMessage/${id}`);
  //     commit('GetMessage', id);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
};
