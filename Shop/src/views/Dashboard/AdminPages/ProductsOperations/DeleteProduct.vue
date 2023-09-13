<template>
  <section class="d-flex flex-column align-items-center justify-content-center">
    <h1 class="p-3 align-self-start">Delete Product</h1>
    <div
      class="cards d-flex col-sm-9 flex-wrap align-items-center justify-content-center"
    >
      <div
        class="card m-5 border-0 shadow-lg"
        v-for="product in Products"
        :key="product._id"
      >
        <img :src="product.image" class="card-img-top" alt="error" />
        <div class="card-body d-flex flex-column align-items-center">
          <div class="card-Info">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
          </div>
          <div
            class="btns d-flex flex-column align-items-center justify-content-center"
          >
            <button class="btn ms-3" @click="DeleteProduct(product._id)">
              Delete Item
            </button>

            <span class="fw-bold fs-5"> ${{ product.sallary }} </span>
          </div>
        </div>
      </div>
    </div>
    <base-teleport class="teleport" :show="showDialog">
      <strong style="color: green">Deleted Successfully</strong>
      <template v-slot:status>
        <i
          class="fa-solid fa-circle-check fa-shake fa-2xl"
          style="color: green"
        ></i>
      </template>
    </base-teleport>
  </section>
</template>
<script>
import axios from "axios";
import BaseTeleport from "../../../../UI/BaseTeleport.vue";
export default {
  components: {
    BaseTeleport,
  },
  data() {
    return {
      Products: [],
      showDialog: false,
    };
  },
  methods: {
    getAllProducts() {
      this.$store.dispatch("products/fetchProducts");
      const products = this.$store.getters["products/getProducts"];
      this.Products = products;
    },
    DeleteProduct(id) {
      axios
        .delete(`http://localhost:3000/product/${id}`)
        .then(() => {
          console.log("Deleted");
          this.showDialog = true;
          this.getAllProducts();
        })
        .catch((error) => {
          console.error("Error adding data:", error);
        });
      setTimeout(() => {
        this.showDialog = false;
      }, 2000);
    },
  },
  mounted() {
    this.getAllProducts();
  },
};
</script>
<style lang="scss" scoped>
section {
  height: auto;
  color: white;
  h1::after {
    content: "";
    display: block;
    height: 3px;
    width: 30%;
    margin: 10px;
    background-color: #5d88ffa9;
  }
}
.card {
  background-color: #2A3447;
  color: rgba(255, 255, 255, 0.826);
  transition: transform 0.5s ease-in-out;
  img {
    height: 100%;
    transition: transform 0.5s ease-in-out;
  }
  width: 20%;
  cursor: pointer;

  .btns {
    span {
      position: absolute;
      color: white;
      border-radius: 50px;
      padding: 10px;
      top: 0;
      left: -40px;
      background-color: black;
    }
    button {
      margin: 10px;
      width: 100%;
      background-color: #5d88ffa9;
      color: white;
      transition: 0.5s ease;
      &:hover {
        border: 1px solid black;
        transform: scale(1.1);
      }
    }
  }
  &:hover {
    img {
      transform: scale(0.9);
    }
  }
}
</style>
