<template>
  <section></section>
  <div class="text-center mt-3">
    <div class="p-4 shadow-lg">
      <h1 class="p-4 shadow-lg">Sale Products</h1>
    </div>
    <div
      class="swiper-wrapper cards d-flex flex-wrap align-items-center justify-content-center"
    >
      <div
        class="card m-5 border-0 swiper-slide"
        v-for="card in DataArr"
        :key="card._id"
      >
        <img :src="card.product.image" class="card-img-top" alt="error" />
        <div class="card-body">
          <h5 class="card-title">{{ card.product.title }}</h5>
          <p class="card-text">
            {{ card.product.describtion }}
          </p>
          <div
            class="d-flex flex-row-reverse align-items-center justify-content-between add-cart"
          >
            <span class="fs-5 p-1 w-75 rounded-2 ms-2 text-light"
              ><del class="me-2 text-dark"
                >{{ card.product.sallary + card.Value * 10 }}$</del
              >{{ card.product.sallary }}$</span
            >
            <button class="btn ms-3 w-25" @click="addtocart(card.product._id)">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
          <span class="Precenteage fw-bold fs-5">{{card.Value}}%</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      DataArr: [],
    };
  },
  mounted() {
    this.getUserProducts();
  },
  methods: {
    async getUserProducts() {
      try {
        const salesProducts = await axios.get(
          "http://localhost:3000/product/GetSaleProducts"
        );
        this.DataArr = salesProducts.data.products;
        console.log(salesProducts.data.products);
      } catch (error) {
        console.error(error);
      }
    },
    async addtocart(id) {
      const userId = localStorage.getItem("UserID");
      try {
        await axios.post(`http://localhost:3000/auth/addToCart/${userId}`, {
          productId: id,
        });
        this.$store.dispatch("cart/fetchUserCart");
      } catch (error) {
        console.error("Error adding product to cart:", error);
      }
    },
  },
};
</script>
<style scoped lang="scss">
$third_color: #ba68c8;
section {
  background: url("../../../assets/SaleGallary/banner-2000x800-1 1.png");
  height: 80vh;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 100px;
  text-align: center;
  animation: backgroundAnimation 1s infinite linear;
}
@keyframes backgroundAnimation {
  0% {
    background-position: 0% 0%;
  }
  50%{
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}
.card {
  transition: 0.5s ease;
  max-width: 15%;
  &:hover {
    transform: scale(0.9);
  }
}
.btn {
  background: transparent;
  border: 1px solid $third_color;
  &:hover {
    background-color: $third_color;
    color: black;
    i {
      color: white;
    }
  }
  i {
    color: $third_color;
  }
}
.add-cart {
  span {
    background-color: $third_color;
  }
}
.Precenteage{
     position: absolute;
      color: white;
      border-radius: 50px;
      padding: 10px;
      top: 0;
      left: -40px;
      background-color: black;
}
</style>
