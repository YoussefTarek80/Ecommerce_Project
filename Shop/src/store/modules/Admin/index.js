import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      admins: [],
      totalAdmins:0,
      totalUsers:0,
      users:[],
    };
  },
  mutations,
  actions,
  getters
};