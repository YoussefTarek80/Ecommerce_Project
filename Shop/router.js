import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  routes: [
    { path: "/", redirect: "/auth/login" },
    {
      path: "/auth/login",
      component: () => import("./src/views/Auth/login.vue"),
    },
    {
      path: "/auth/signup",
      component: () => import("./src/views/Auth/signup.vue"),
    },
    {
      path: "/client/home",
      component: () => import("./src/views/Home/HomePage.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/admin",
      component: () => import("./src/views/Dashboard/AdminDashboard.vue"),
      meta: { requiresAuth: true, requiresAdmin: true },
    },
    {
      path: "/client/shop",
      component: () => import("./src/views/shop/ShopPage.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/client/cart",
      component: () => import("./src/views/shop/ShopParts/cart.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/client/cart/payment",
      component: () => import("./src/views/Payment/paymentPage.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/client/cart/payment/successfully",
      component: () =>
        import("./src/views/Payment/PaymentParts/SuccessfulPay.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/client/contact",
      component: () =>
        import("./src/views/Contact_US/ContactAdmins.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/client/sale",
      component: () =>
        import("./src/views/Sale/Sale.vue"),
      meta: { requiresAuth: true },
    },
  ],
});
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
