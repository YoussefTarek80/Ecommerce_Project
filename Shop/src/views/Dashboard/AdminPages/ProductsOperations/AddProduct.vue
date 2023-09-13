<template>
  <section class=" w-100 ">
    <h1 class=" p-3 text-light">Add Product</h1>
    <div class="d-flex justify-content-around align-items-start w-100 p-3 ">
      <form
        action=""
        method="post"
        class="d-flex flex-column  w-50 shadow-lg p-5 rounded-5"
        @submit.prevent="addProduct"
      >
        <input
          type="text"
          ref="imageInput"
          v-model="image"
          placeholder="Image Url"
          class="shadow-lg"
        />
        <input type="text" placeholder="Title Product" v-model="title" class="shadow-lg" />
        <input
          type="text"
          placeholder="Description Product"
          class="shadow-lg"
          v-model="description"
        />
        <input type="text" placeholder="Sallary Product" v-model="sallary" class="shadow-lg" />
        <button class="btn btn1 w-50 align-self-center mt-3">
          Add To Shop
        </button>
      </form>
      <div class="custom-card ">
        <div class="card shadow-lg " style="width: 15rem;">
          <img :src="image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvURrxVdCQ-qh_VmG80K7iMWpsKzuUOrVBA&usqp=CAU'" class="card-img-top" alt="Add Link Image" />
          <div class="card-body">
            <h5 class="card-title">{{ title || "Default Title" }}</h5>
            <p class="card-text">
              {{ description || "Default Description" }}
            </p>
            <a href="#" class="btn2 btn">Add To Cart</a>
            <span class="sallary">{{'$'+sallary}}</span>
          </div>
        </div>
      </div>
    </div>
    <base-teleport class="teleport" :show="showDialog">
      <strong style="color: green">Added Successfully</strong>
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
  padding-bottom: 12vh;
  width: 100vh;
  height: auto;
  margin: auto;
  input {
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: transparent;
    color: white;
    border: 1px solid #7c8fac69;
  }
  ::placeholder{
    color: rgba(255, 255, 255, 0.589);
  }
  form{
    border: 1px solid #7c8fac69;
  }
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
  text-align: center;
  background-color: transparent;
  color: white;
  border-radius:30px 30px 10px 10px; 
  img{
    border-radius:30px 30px 0px 0px; 
  }
  .sallary {
    position: absolute;
    background-color: black;
    top: 0%;
    left: 0%;
    font-size: 20px;
    color: white;
    padding: 10px;
    border-radius: 50%;
  
  }
}
.btn2{
  background-color: #5d88ffa9;
  color: white;
}
.btn1{
  background-color: #5d88ffa9;
  color: white;
}
</style>
