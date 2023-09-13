<template>
  <section class="text-light">
    <h1>Add Sale</h1>
    <div class="head-options text-light">
      <label for="choose" class="me-4">Choose Your Precent</label>
      <select v-model="SaleValue" id="choose">
        <option
          v-for="percentage in percentages"
          :value="percentage.value"
          :key="percentage.value"
          @change="updateSaleValue(percentage.value)"
        >
          {{ percentage.label }}
        </option>
      </select>
    </div>
    <div
      class="Products d-flex flex-column align-items-center justify-content-center text-center"
    >
      <h3 class="p-3 rounded-3 shadow-lg">Select Your Product for Sale</h3>
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
              <button class="btn ms-3" @click="addSaleToProduct(product._id)">
                Add Sale to This Item
              </button>

              <span class="fw-bold fs-5"> ${{ product.sallary }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      Products: [],
      SaleValue: 0,
      percentages: [
        { label: "0%", value: 0 },
        { label: "10%", value: 10 },
        { label: "20%", value: 20 },
        { label: "30%", value: 30 },
        { label: "40%", value: 40 },
        { label: "50%", value: 50 },
      ],
    };
  },
  methods: {
    getAllProducts() {
      this.$store.dispatch("products/fetchProducts");
      const products = this.$store.getters["products/getProducts"];
      this.Products = products;
    },
    updateSaleValue(value) {
      this.SaleValue = value;
    },
    async addSaleToProduct(productId) {
      try {
        await axios
          .post(`http://localhost:3000/product/${productId}`, { sale: this.SaleValue })
          .then(()=>{
            this.getAllProducts();
          })
          .catch((Error) => console.log(Error));
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getAllProducts();
  },
  watch: {
    SaleValue(newVal) {
      console.log("SaleValue updated:", newVal);
    },
  },
};
</script>
<style lang="scss" scoped>
.Products {
  margin-top: 65px;
}
h3 {
  background-color: #3a4963;
}
label {
  font-size: 25px;
  margin-top: 30px;
}
h1::after {
  content: "";
  display: block;
  height: 3px;
  width: 7%;
  margin: 10px;
  background-color: #5d88ffa9;
}
.card {
  background-color: #2a3447;
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
select#choose {
  width: 10%;
  padding: 3px;
  font-size: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #3a4963;
  color: white;
  cursor: pointer;
  border-radius: 40px;

  //   appearance: none;
}
select#choose::-ms-expand {
  display: none;
}
select#choose:hover,
select#choose:focus {
  border-color: #3a4963;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
</style>
