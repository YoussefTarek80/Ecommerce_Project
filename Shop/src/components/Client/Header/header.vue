<template>
  <header :class="{ coloredHeader: colorHeader }">
    <nav class="d-flex align-items-center justify-content-around">
      <h3>Logo</h3>

      <div class="links">
        <ul class="d-flex">
          <li><router-link to="/client/Home">Home</router-link></li>
          <li><a href="">Tops</a></li>
          <li><a href="">Kids</a></li>
          <li><a href="">Accessories</a></li>
          <li><a href="">Collections</a></li>
          <li><a href="">Sale</a></li>
        </ul>
      </div>

      <div class="header-options d-flex">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-cart-shopping"></i>
        <div class="d-flex flex-column">
          <i class="fa-solid fa-user" @click="logout"></i>
          <div class="logout shadow-lg" v-if="Logout">
            <router-link to="/auth/login" @click="LogoutAuth">Logout</router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      colorHeader: false,
      Logout: false,
    };
  },
  created() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        this.colorHeader = true;
      } else {
        this.colorHeader = false;
      }
    });
  },
  methods: {
    logout() {
      this.Logout = !this.Logout;
    },
    LogoutAuth(){
      localStorage.removeItem("isAuthenticated");
      this.$root.isAuthenticated = false;
    }
  },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  z-index: 1;
  padding: 10px;
  transition: 0.4s ease-in-out;
}
.links {
  margin-top: 20px;
  ul {
    list-style: none;
    li {
      font-size: 20px;
      margin-left: 40px;
      a {
        text-decoration: none;
        color: black;
      }
    }
  }
}

.header-options {
  i {
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
  }
}
.coloredHeader {
  background-color: white;
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
}
.logout {
  position: absolute;
  top: 100%;
  right: 5%;
  background-color: white;
  width: 10%;
  height: 100%;
  text-align: center;
  justify-content: center;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    &:hover {
      background-color: rgba(128, 128, 128, 0.174);
      padding: 10px 50px 10px 50px;
    }
  }
}
</style>
