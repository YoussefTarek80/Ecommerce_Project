<template>
  <section class="Productsection">
    <div v-if="clicked" class="backdrop"></div>
    <div class="show-Options text-light" @click="clicked = !clicked">
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
    <div
      class="btns d-flex flex-column rounded-4 position-absolute shadow-lg w-25 align-items-center justify-content-center p-3"
      v-if="clicked"
    >
      <button class="btn fs-5" @click="select('AddProduct')">
        Add Product
      </button>
      <button class="btn fs-5" @click="select('DeleteProduct')">
        Delete Product
      </button>
      <button class="btn fs-5" @click="select('AddSaleProduct')">
        Add Sale On Product
      </button>
    </div>
    <component :is="isSelected"></component>
  </section>
</template>
<script>
import AddProduct from "../../../views/Dashboard/AdminPages/ProductsOperations/AddProduct.vue";
import DeleteProduct from "../../../views/Dashboard/AdminPages/ProductsOperations/DeleteProduct.vue";
import AddSaleProduct from "../../../views/Dashboard/AdminPages/ProductsOperations/AddSale.vue";
export default {
  components: {
    AddProduct,
    DeleteProduct,
    AddSaleProduct
  },
  data() {
    return {
      isSelected: "AddProduct",
      clicked: false,
    };
  },
  methods: {
    select(e) {
      this.isSelected = e;
      this.clicked = !this.clicked;
    },
  },
};
</script>
<style lang="scss" scoped>
button {
  padding: 10px;
  margin: 10px;
  width: 70%;
  background-color: #5d88ffa9;
  color: white;
}
.show-Options {
  cursor: pointer;
  font-size: 30px;
  padding: 10px;
  width: 5%;
  text-align: center;
  border-radius: 50%;
  color: black;
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.445);
  z-index: 1;
}
.btns {
  z-index: 1;
  background-color: rgb(0, 0, 0);
  border: 1px solid white;
  button {
    &:hover {
      color: #5d88fffd;
      border: 1px solid #5d88ffa9;
    }
  }
}
</style>
