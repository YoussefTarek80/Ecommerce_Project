<template>
  <div class="text-center mt-3">
    <div class="p-4 shadow-lg">
      <h1 class="p-4 shadow-lg">All Products</h1>
    </div>
    <div class="shop-box mt-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-3 options">
            <div class="filter">
              <h4>Filter</h4>
            </div>
            <hr />
            <div class="department">
              <h4>Department</h4>
              <div class="d-flex flex-column">
                <div class="m-1">
                  <input type="checkbox" />
                  <label for="" class="">Mens</label>
                </div>
                <div class="m-1">
                  <input type="checkbox" />
                  <label for="" class="">Womens</label>
                </div>
                <div class="m-1">
                  <input type="checkbox" />
                  <label for="" class="">Kids</label>
                </div>
                <div class="m-1">
                  <input type="checkbox" />
                  <label for="" class="">All</label>
                </div>
              </div>
            </div>
            <hr />
            <div class="category">
              <h4>Category</h4>
            </div>
          </div>
          <div class="cards d-flex col-sm-9 flex-wrap">
            <div
              class="card m-5 border-0"
              v-for="product in Products"
              :key="product.id"
            >
              <img :src="product.image" class="card-img-top" alt="error" />
              <div class="card-body d-flex flex-column align-items-center">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">{{ product.description }}</p>
                <button class="btn btn-success ms-3 w-100">Add to card</button>
                <span class="fw-bold fs-4 text-center">
                  {{ product.sallary }} $</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Products: {},
    };
  },
  methods: {
    getAllProducts() {
      this.$store.dispatch("products/fetchProducts");
      const products = this.$store.getters["products/getProducts"];
      this.Products = products;
    },
  },
  mounted() {
    this.getAllProducts();
  },
};
</script>
<style scoped lang="scss">
.card {
  img {
    height: 100%;
  }
  width: 23%;
}
.options {
  height: 100vh;
  padding: 30px;
  background-color: rgba(128, 128, 128, 0.251);
  text-align: start;
  h4 {
    padding: 30px;
  }
}
.department {
  input {
    // width: 20px;
    // height: 20px;
    cursor: pointer;
    margin-right: 10px;
  }
  label {
    font-size: 17px;
  }
}
</style>
