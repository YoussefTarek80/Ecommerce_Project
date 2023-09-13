<template>
  <div class="sidebar text-center shadow-lg">
    <h3>Admin Dashboard</h3>
    <ul class="text-start pt-5 d-flex flex-column">
      <li
        @click="select('Dashboard')"
        :class="{ active: isSelected === 'Dashboard' }"
        class="rounded-2"
      >
        <a href="#"><i class="fa-solid fa-house pe-3"></i>Dashboard</a>
      </li>
      <li
        @click="select('Products')"
        :class="{ active: isSelected === 'Products' }"
        class="rounded-2"
      >
        <a href="#"><i class="fa-solid fa-shop pe-3"></i>Products</a>
      </li>
      <li
        @click="select('Customers')"
        :class="{ active: isSelected === 'Customers' }"
        class="rounded-2"
      >
        <a href="#"><i class="fa-solid fa-people-line pe-3"></i>Customers</a>
      </li>
      <li class="rounded-2 mt-auto p-2">
        <router-link to="/auth/login" @click="LogoutAuth"
          ><i class="fa-solid fa-right-from-bracket pe-3"></i>Logout
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["isSelected"],
  data() {
    return {
      isSelected: "Dashboard",
    };
  },
  methods: {
    select(componentName) {
      this.isSelected = componentName;
      this.$emit("selectComponent", componentName);
    },
    LogoutAuth() {
      localStorage.removeItem("isAuthenticated");
      this.$root.isAuthenticated = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: auto;
  background-color: #2a3447;
  padding: 20px;
  height: 100vh;
  position: fixed;
  z-index: 1;
  color: white;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  li {
    font-size: 20px;
  }
}
.sidebar li {
  margin-bottom: 10px;
  transition: 0.3s ease;
  color: #5d87ff;
}
.sidebar li:hover {
  background-color: #333f55;
  border-radius: 5px;
  color: white;
}
.sidebar a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: white;
  // color: #5D87FF;
}

.comp {
  padding-left: 300px;
}
ul {
  height: 94%;
}
li.active {
  background-color: #5d88ffa9;
  &:hover {
    background-color: #5d88ffa9;
  }
}
img {
  width: 5%;
}
</style>
