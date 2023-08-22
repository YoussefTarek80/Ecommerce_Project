import { createStore } from 'vuex';

import shopStore from './modules/shopStore/index.js';

const store = createStore({
  modules: {
    products: shopStore,
  }
});

export default store;