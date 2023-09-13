export default {
  setAdmins(state, admins) {
    state.admins = admins;
  },
  CountTotalAdmins(state, count) {
    state.totalAdmins = count;
  },
  CountTotalUsers(state, count) {
    state.totalUsers = count;
  },
  Users(state, users) {
    state.users = users;
  },
  REMOVE_USER(state, id) {
    const index = state.users.findIndex((item) => item._id === id);
    if (index !== -1) {
      state.users.splice(index, 1);
    }
  },
};
