<template>
  <div class="backdropcart" v-if="hide"></div>
  <transition name="dialog">
    <div class="cart-component" v-if="hide">
      <div
        class="header d-flex justify-content-between align-items-center p-4 bg-light"
      >
        <div class="d-flex">
          <h3>Shopping Cart</h3>
          <span class="ms-3"
            >( <span class="text-danger fs-5">{{ totalQuantity }} items</span> )
          </span>
        </div>

        <button @click="hideCart" class="btn">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="elements">
        <div
          class="element d-flex justify-content-around align-items-center"
          v-for="item in cartItems"
          :key="item._id"
        >
          <img :src="item.image" alt="" />
          <div
            class="element-content d-flex flex-column justify-content-between w-50"
          >
            <div class="d-flex flex-column justify-content-center">
              <span class="fs-2 mb-3">{{ item.title }}</span>
              <span class="fs-4" style="color: #ba68c8; font-weight: 700"
                >{{ item.sallary }}$</span
              >
            </div>
            <div
              class="element-options d-flex align-items-center justify-content-between"
            >
              <ul class="pagination pagination-md">
                <button class="page-link" @click="decQuantity">-</button>
                <button class="page-link">{{ item.quantity }}</button>
                <button class="page-link" @click="IncreaseQuantity">+</button>
              </ul>
              
              <i class="fa-solid fa-trash fs-4" @click="deleteFromCart(item.product)"></i>
            </div>
            <div class="total">
              <span class="fs-4 d-flex"
                >Total product :
                <p class="ms-3" style="color: #ba68c8; font-weight: 700">
                  {{ item.total }}$
                </p></span
              >
            </div>
          </div>
        </div>
      </div>
      <img
        v-if="empty && cartItems.length === 0"
        src="https://www.funincursion.com.au/assets/frontend/images/Empty-Cart.jpg"
        class="w-100 mt-5"
        alt=""
      />
      <div
        class="Checkout d-flex align-items-center justify-content-center w-100 mb-3"
        v-else
      >
        <router-link to="/client/cart/payment"
          style="color: white; background-color: #ba68c8; font-weight: 700"
          class="btn p-3 border-0 w-75 rounded-3 mt-4"
        >
          check Out - {{ TotalCart }}$
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    hide: Boolean,
  },
  data() {
    return {
      empty: true,
      TotalCart: 0,
    };
  },
  computed: {
    cartItems() {
      return this.$store.state.cart.cartItems;
    },
    totalQuantity() {
      return this.$store.getters["cart/totalQuantity"];
    },
    TotalCart() {
      return this.$store.getters["cart/totalCheckOut"];
    },
    empty(){
      return this.cartItems.length === 0;
    }
  },
  methods: {
    hideCart() {
      this.$emit("hide-cart");
    },
    async getUserCart() {
      try {
        await this.$store.dispatch("cart/fetchUserCart");
      } catch (error) {
        console.error("Error fetching user's cart:", error);
      }
    },
    async deleteFromCart(productid){
      try {
        await this.$store.dispatch('cart/deleteFromCart', productid);
      } catch (error) {
        console.error('Error deleting from cart:', error);
      }
    }
  },
  mounted() {
    this.getUserCart();
  },
};
</script>
<style scoped lang="scss">
$third_color:#ba68c8;
.backdropcart {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.466);
  z-index: 10;
}
.cart-component {
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  width: 40%;
  background-color: white;
  z-index: 1000;
  overflow: auto;
  max-height: 100vh;
  transition: 0.3s ease;
  .btn {
    i {
      font-size: 35px;
    }
  }
}
.cart-component::-webkit-scrollbar {
  width: 10px;
}
.cart-component::-webkit-scrollbar-thumb {
  background-color: $third_color;
  height: 10%;
}

.cart-component::-webkit-scrollbar-track {
  background-color: white;
}
.elements {
  img {
    height: 40vh;
  }
  .element {
    margin: 40px;
  }
  .element-content {
    height: 30vh;
  }
  .element-options {
    button {
      color: black;
    }
    i {
      cursor: pointer;
    }
  }
}
.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}
.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: translateX(0); /* Reset position to the original */
}
</style>
