<template>
  <section class="new-arrival text-center">
    <h1>New Arrival</h1>
    <div class="swiper-container">
      
      <div class="swiper-wrapper cards d-flex">
        <div
          class="card m-5 border-0 swiper-slide"
          v-for="card in DataArr"
          :key="card._id"
        >
          <img :src="card.image" class="card-img-top" alt="error" />
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">
              {{ card.describtion }}
            </p>
            <div class="d-flex flex-row-reverse align-items-center justify-content-between add-cart">
              <span class="fs-5 p-1 w-75 rounded-2 ms-2 text-light">{{ card.sallary }}$</span>
              <button class="btn ms-3 w-25" @click="addtocart(card._id)"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>

          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>

<script>
import Swiper from "swiper";
import axios from "axios";
export default {
  data() {
    return {
      DataArr: [],
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    this.getUserProducts();
  },
  methods: {
    async getUserProducts() {
      try {
        await this.$store.dispatch("products/fetchProducts");
        const products = this.$store.getters["products/getProducts"];
        this.DataArr = products.slice(-8).reverse();
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

<style lang="scss" scoped>
$third_color:#ba68c8;
.swiper-container {
  overflow: hidden;
  cursor: grab;
}
.swiper-slide {
  min-width: 15%;
}
.new-arrival{
  position: relative;
}
.new-arrival h1{
  text-align: start;
  padding: 30px;
}
.new-arrival h1::after{
  content: '';
  height: 4px;
  width: 5%;
  display: block;
  background-color: $third_color;
}
.card{
  transition: .5s ease;
  &:hover{
    transform: scale(0.9);
  }
}
.btn{
  background: transparent;
  border: 1px solid  $third_color;
  &:hover{
      background-color: $third_color;
      color: black;
      i{
         color: white;
      }
  }
  i{
    color: $third_color;
  }
}
.add-cart{
  span{
    background-color: $third_color;
  }

}
</style>
