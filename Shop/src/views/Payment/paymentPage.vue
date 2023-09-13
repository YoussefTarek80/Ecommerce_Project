<template>
  <section class="payment-section d-flex flex-column">
    <div class="d-flex p-5 justify-content-evenly">
      <div class="address-shopping d-flex flex-column justify-content-center">
        <div class="main-progress-bar">
          <ul class="d-flex">
            <div class="text-center">
              <span
                class="p-3 number"
                :class="{
                  active: currentStep,
                }"
                ><i class="fa-solid fa-check"></i>
              </span>
              <li>My Cart</li>
            </div>
            <div class="text-center" @click="currentStep = 1">
              <div
                class="p-3 number"
                :class="{
                  active: currentStep === 1,
                  completed: currentStep > 1,
                }"
              >
                <span v-if="currentStep == 1">2</span>
                <i v-if="currentStep > 1" class="fa-solid fa-check"></i>
              </div>
              <li>Information</li>
            </div>
            <div class="text-center" @click="currentStep = 2">
              <div
                class="p-3 number"
                :class="{
                  active: currentStep === 2,
                  completed: currentStep > 2,
                }"
              >
                <span v-if="currentStep <= 2">3</span>
                <i v-if="currentStep > 2" class="fa-solid fa-check"></i>
              </div>
              <li>Shipping</li>
            </div>
            <div class="text-center" @click="currentStep = 3">
              <span
                class="p-3 number"
                :class="{
                  active: currentStep === 3,
                  completed: currentStep > 3,
                }"
              >
                <span v-if="currentStep <= 3">4</span>
                <i v-if="currentStep > 3" class="fa-solid fa-check"></i>
              </span>
              <li>Payment</li>
            </div>
          </ul>
        </div>
        <component :is="isSelected"></component>
        <div
          class="btns d-flex justify-content-around w-100"
          v-if="currentStep <= 3"
        >
          <button class="btn btn-outline-success" @click="previousStep">
            <span v-if="currentStep <= 3 && currentStep > 1">Return</span>
            <span v-if="currentStep === 1" @click="goToShopping"
              >Back to Shopping</span
            >
          </button>
          <button class="btn btn-success" @click="nextStep">
            <span v-if="currentStep < 3">Continue</span
            ><span v-if="currentStep === 3" @click="sendNotify">
              <span>Order Now</span>
            </span>
          </button>
        </div>
      </div>
      <div class="box d-flex flex-column w-25 p-4 rounded-4">
        <div class="head d-flex">
          <h3>Shopping Bag</h3>
          <span class="ms-3"
            >( <span class="text-danger fs-5">{{ totalQuantity }} items</span> )
          </span>
        </div>

        <hr />
        <div class="elements">
          <div
            class="element d-flex justify-content-around align-items-center m-3"
            v-for="item in cartItems"
            :key="item._id"
          >
            <img :src="item.image" class="w-50 me-3" alt="" />
            <div
              class="element-content d-flex flex-column justify-content-between w-50"
            >
              <div class="d-flex flex-column justify-content-center mb-3">
                <span class="fs-4 mb-3">{{ item.title }}</span>
                <span class="fs-5" style="color: #7c3fff; font-weight: 500"
                  >{{ item.sallary }}$</span
                >
              </div>
              <div
                class="element-options d-flex align-items-center justify-content-between"
              >
                <ul class="pagination pagination-md">
                  <button class="page-link">{{ item.quantity }}</button>
                </ul>
              </div>
              <div class="total">
                <span class="fs-6 d-flex"
                  >Total product :
                  <p class="ms-3" style="color: #7c3fff; font-weight: 500">
                    {{ item.total }}$
                  </p></span
                >
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="total d-flex justify-content-between align-items-center">
          <span class="fs-3 fw-bold">Total : </span>
          <span class="fs-5">{{ TotalCart }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import information from "../Payment/PaymentParts/information.vue";
import shipping from "../Payment/PaymentParts/shipping.vue";
import creditcard from "../Payment/PaymentParts/creditcard.vue";
import reload from "../Payment/PaymentParts/Reload.vue";
export default {
  components: { information, shipping, creditcard,reload },
  data() {
    return {
      currentStep: 1,
      isSelected: "information",
      spinnerCounter: false,
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
    isSelected() {
      if (this.currentStep === 1) {
        return "information";
      } else if (this.currentStep === 2) {
        return "shipping";
      } else if (this.currentStep === 3) {
        return "creditcard";
      } else if (this.currentStep === 4) {
        return "reload";
      }
    },
  },
  methods: {
    async getUserCart() {
      try {
        await this.$store.dispatch("cart/fetchUserCart");
      } catch (error) {
        console.error("Error fetching user's cart:", error);
      }
    },
    goToShopping() {
      this.$router.replace("/client/shop");
    },
    nextStep() {
      if (this.currentStep < 4) {
        this.currentStep += 1;
      }
    },
    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep -= 1;
      }
    },
    sendNotify() {
      this.spinner = true;
      setTimeout(() => {
        this.spinner = false;
      }, 2000);

      console.log("notify");
    },
  },
  mounted() {
    this.getUserCart();
  },
};
</script>
<style lang="scss" scoped>
.box {
  background-color: #e4e4e4;
  max-height: 80vh;
  overflow: auto;
}
.box::-webkit-scrollbar {
  width: 10px;
}
.box::-webkit-scrollbar-thumb {
  border-radius: 0px 10px 10px 0px;
  background-color: #7c3fffb4;
}
ul {
  list-style: none;
  li {
    margin: 10px;
  }
}
.number {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #7c3fff;
  color: #ffffff;
  font-weight: bold;
}
.number::before {
  content: "";
  position: absolute;
  width: 24%;
  height: 2px;
  background-color: #7c3fff;
  left: 21%;
  z-index: -10;
}
.number.active {
  background-color: white;
  border: 1px solid #7c3fff;
  color: #7c3fff;
}
.number.completed {
  background-color: white;
  border: 1px solid #7c3fff;
  color: #7c3fff;
}
a {
  text-decoration: none;
}
</style>
