import { createStore } from 'vuex';

import shopStore from './modules/shopStore/index.js';
import cartmodule from './modules/cart/index.js';
import admin from './modules/Admin/index.js';
const store = createStore({
  modules: {
    products: shopStore,
    cart: cartmodule,
    admins:admin
  }
});

export default store;