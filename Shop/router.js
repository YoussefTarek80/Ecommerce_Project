import { createRouter,createWebHistory } from "vue-router";
import axios from "axios";
import HomePage from './src/views/Home/HomePage.vue'
import AdminDashboard from './src/views/Dashboard/AdminDashboard.vue'
import shop from './src/views/shop/ShopPage.vue'
import login from './src/views/Auth/login.vue'
import signup from './src/views/Auth/signup.vue'
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',redirect:'/auth/login'},
        { path: '/auth/login', component: login},
        { path: '/auth/signup', component: signup },
        { path: '/client/home', component: HomePage,meta: { requiresAuth: true } },
        { path: '/admin', component: AdminDashboard,meta: { requiresAuth: true, requiresAdmin: true }  },
        { path: '/client/shop', component: shop,meta: { requiresAuth: true } },
    ],

})
// router.beforeEach(async (to, from, next) => {
  
//     try {
//       const users=[];
//       const response = await axios.get("http://localhost:3000/auth/getusers");
//       // users.push(...response.data);
//       console.log(response);
//       if (to.meta.requiresAdmin && !adminrole) {
//         next({ path: '/client/home' }); 
//       } 
//       else if(adminrole) {
//         next({ path: '/admin' }); 
//       }
//       else{
//         next();
//       }
//     } catch (error) {
//       console.error(error);
//       next(); 
//     }
  
//   });
  
  
  
  
  
  
export default router