<template>
  <header :class="{ coloredHeader: colorHeader }">
    <nav class="d-flex align-items-center justify-content-around">
      <h3 class="p-3 rounded-4">
        <span class="">E</span>-commerce <span>Shop</span>
      </h3>

      <div class="links">
        <ul class="d-flex">
          <li ><router-link to="/client/home">Home</router-link></li>
          <li ><router-link to="/client/shop">Shop</router-link></li>
          <li><a href="">Kids</a></li>
          <li><a href="">Accessories</a></li>
          <li><router-link to="/client/contact" exact>Contact Us</router-link></li>
          <li><router-link to="/client/sale" exact>Sale</router-link></li>
        </ul>
      </div>

      <div class="header-options d-flex">
        <i class="fa-solid fa-magnifying-glass"></i>
        <div class="position-relative">
          <i class="fa-solid fa-cart-shopping" @click="hideCart"></i>
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            {{ totalQuantity }}
          </span>
        </div>

        <div class="d-flex flex-column">
          <i class="fa-solid fa-user" @click="logout"></i>
          <transition name="fade">
            <div class="logout shadow-lg d-flex flex-column" v-if="Logout">
              <router-link to="/auth/login"  @click="LogoutAuth"
                >Logout</router-link
              >
              <!-- <router-link to="/" >Account</router-link> -->
            </div>
          </transition>
        </div>
      </div>
    </nav>
    <div class="cart">
      <cart :hide="hide" @hide-cart="hideCart"></cart>
    </div>
  </header>
</template>

<script>
import cart from "../../../views/shop/ShopParts/cart.vue";
export default {
  components: {
    cart,
  },
  data() {
    return {
      colorHeader: false,
      Logout: false,
      hide: false,
    };
  },
  computed: {
    cartItems() {
      return this.$store.state.cart.cartItems;
    },
    totalQuantity() {
      return this.$store.getters["cart/totalQuantity"];
    },
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
    hideCart() {
      this.hide = !this.hide;
    },
    logout() {
      this.Logout = !this.Logout;
    },
    LogoutAuth() {
      localStorage.removeItem("isAuthenticated");
      this.$root.isAuthenticated = false;
    },
  },
};
</script>

<style lang="scss" scoped>
$color: #7c3fff;
$second_color: #f47458;
$third_color: #ba68c8;
header {
  position: fixed;
  width: 100%;
  z-index: 1;
  padding: 10px;
  transition: 0.4s ease-in-out;
  h3 {
    background-color: white;
    color: black;
    span {
      color: $third_color;
      font-weight: 700;
    }
  }
}
.links {
  margin-top: 20px;
  ul {
    list-style: none;
    li {
      position: relative;
      // background-color: white;
      padding: 10px;
      font-size: 20px;
      margin-left: 40px;
      border-radius: 10px;
      a {
        text-decoration: none;
        color: black;
        font-weight: 500;
      }
    }
  }
}

.links li {
  position: relative;
  &:after {
    content: "";
    display: block;
    background-color: $third_color;
    height: 4px;
    border-radius: 10px;
    width: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
}
.header-options {
  i {
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
    background-color: white;
    margin-left: 6px;
    border-radius: 10px;
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
    padding: 10px;
    &:hover {
      background-color: rgba(128, 128, 128, 0.174);
      padding: 10px 50px 10px 50px;
    }
  }
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.3s ease-in;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
