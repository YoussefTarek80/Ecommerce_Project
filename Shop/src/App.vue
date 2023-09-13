<template>
  
  <router-view></router-view>
</template>

<script>

export default {
  data() {
    return {
      isAuthenticated: false,
    };
  },
  created() {
    const storedAuthStatus = localStorage.getItem("isAuthenticated");
    if (storedAuthStatus === "true") {
      this.$root.isAuthenticated = true;
    }
  },
  watch: {
    $route(to) {
      if (to.meta.requiresAuth && !this.isAuthenticated) {
        this.$router.replace("/auth/login");
      }
    },
  },

};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
section {
  padding-top: 60px;
}
::-webkit-scrollbar{
  width: 10px;
}
::-webkit-scrollbar-thumb{
  background-color: black;
  border-radius: 10px;
}
</style>
