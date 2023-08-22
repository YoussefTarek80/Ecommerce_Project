<template>
  <section class="text-center mt-5">
    <h2>Add Product</h2>
    <form
      action=""
      method="post"
      class="d-flex flex-column"
      @submit.prevent="addProduct"
    >
      <input
        type="text"
        ref="imageInput"
        v-model="image"
        placeholder="Image Url"
      />
      <input type="text" placeholder="Title Product" v-model="title" />
      <input
        type="text"
        placeholder="Description Product"
        v-model="description"
      />
      <input type="text" placeholder="Sallary Product" v-model="sallary" />
      <button class="btn btn-success w-50 align-self-center mt-3">Send</button>
    </form>
    
    <base-teleport class="teleport" :show="showDialog" >
      <strong style="color: green;">Added Successfully</strong>
      <template v-slot:status>
        <i class="fa-solid fa-circle-check fa-shake fa-2xl" style="color: green;"></i>
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
      title: "",
      description: "",
      sallary: "",
      image: "",
      showDialog: false,
    };
  },
  methods: {
    addProduct() {
      const data = {
        title: this.title,
        description: this.description,
        sallary: this.sallary,
        image: this.image,
      };
      axios
        .post("http://localhost:3000/product", data)
        .then(() => {
          console.log(data);
          this.showDialog = true;
          this.title = "";
          this.description = "";
          this.sallary = "";
          this.image = "";
        })
        .catch((error) => {
          console.error("Error adding data:", error);
        });
      setTimeout(() => {
        this.showDialog = false;
      }, 2000);
    },
  },
};
</script>
<style lang="scss" scoped>
section {
  width: 100vh;
  height: 50vh;
  margin: auto;
  input {
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
  }
}
</style>
