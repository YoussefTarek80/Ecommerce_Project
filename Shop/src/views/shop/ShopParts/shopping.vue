<template>
  <div class="text-center mt-3">
    <div class="p-4 shadow-lg">
      <h1 class="p-4 shadow-lg">All Products</h1>
    </div>
    <div class="shop-box mt-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-3 options shadow-lg">
            <div class="filter">
              <h4>Filter</h4>
              <div class="badges d-flex flex-wrap">
                <div
                  class="badge-item border border-dark rounded-4 me-3 mt-3 p-1 d-flex justify-content-around align-items-center"
                  v-for="department in selectedDepartments"
                  :key="department"
                >
                  <span>{{ department }}</span>
                  <i class="fa-solid fa-xmark" @click="Remove(department)"></i>
                </div>
              </div>
            </div>
            <hr />
            <div class="department">
              <h4>Department</h4>
              <div class="d-flex flex-column">
                <div
                  class="m-1 d-flex align-items-center justify-content-between"
                >
                  <div>
                    <input
                      type="checkbox"
                      id="in1"
                      class="custom-checkbox"
                      @click="logMens('Mens')"
                      :checked="isDepartmentSelected('Mens')"
                    />
                    <label for="in1" class="">Mens</label>
                  </div>
                  <span class="">0</span>
                </div>
                <div
                  class="m-1 d-flex align-items-center justify-content-between"
                >
                  <div>
                    <input
                      type="checkbox"
                      id="in2"
                      class="custom-checkbox"
                      @click="logMens('Women')"
                      :checked="isDepartmentSelected('Women')"
                    />
                    <label for="in1" class="">Women</label>
                  </div>
                  <span class="">0</span>
                </div>
                <div
                  class="m-1 d-flex align-items-center justify-content-between"
                >
                  <div>
                    <input
                      type="checkbox"
                      id="in3"
                      class="custom-checkbox"
                      @click="logMens('Kids')"
                      :checked="isDepartmentSelected('Kids')"
                    />
                    <label for="in1" class="">Kids</label>
                  </div>
                  <span class="">0</span>
                </div>
                <div
                  class="m-1 d-flex align-items-center justify-content-between"
                >
                  <div>
                    <input
                      type="checkbox"
                      id="in4"
                      class="custom-checkbox"
                      @click="logMens('All')"
                      :checked="isDepartmentSelected('All')"
                    />
                    <label for="in1" class="">All</label>
                  </div>
                  <span class="">{{ getAllCart }}</span>
                </div>
              </div>
            </div>
            <hr />
            <div class="size">
              <h4>Size</h4>
              <div class="badges">
                <span>XXS</span>
                <span>XS</span>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
                <span>XXXL</span>
              </div>
            </div>
            <hr />
            <div class="color">
              <h4>Colors</h4>
              <div class="badges">
                <span></span><span></span><span></span><span></span><span></span
                ><span></span><span></span><span></span><span></span
                ><span></span>
              </div>
            </div>
          </div>
          <div class="cards d-flex col-sm-9 flex-wrap">
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
                  <button class="btn ms-3" @click="addtocart(product._id)">
                    Add to card
                  </button>

                  <span class="fw-bold fs-5"> ${{ product.sallary }} </span>
                </div>
              </div>
            </div>
          </div>
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
      Products: [],
      selectedDepartments: [],
      imagesLoaded: {},
    };
  },
  computed: {
    getAllCart() {
      const products = this.$store.getters["products/getProducts"];
      if (products) {
        return products.length;
      } else {
        return false;
      }
    },
  },
  methods: {
    getAllProducts() {
      this.$store.dispatch("products/fetchProducts");
      const products = this.$store.getters["products/getProducts"];
      this.Products = products;
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
    logMens(name) {
      const index = this.selectedDepartments.indexOf(name);
      if (index === -1) {
        this.selectedDepartments.push(name);
      } else {
        this.selectedDepartments.splice(index, 1);
      }
    },
    Remove(department) {
      const index = this.selectedDepartments.indexOf(department);
      if (index !== -1) {
        this.selectedDepartments.splice(index, 1);
      }
    },
    isDepartmentSelected(name) {
      return this.selectedDepartments.includes(name);
    },
  },
  mounted() {
    this.getAllProducts();
  },
};
</script>
<style scoped lang="scss">
$third_color: #ba68c8;
$colors: red, green, blue, yellow, orange,gray,black,white,purple,pink;
h1::after {
  content: "";
  display: block;
  height: 4px;
  width: 10%;
  border-radius: 50px;
  margin: 10px auto;
  background-color: $third_color;
}
.card {
  transition: transform 0.5s ease-in-out;
  img {
    height: 100%;
    transition: transform 0.5s ease-in-out;
  }
  width: 23%;
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
      background-color: $third_color;
      color: white;
      transition: 0.5s ease;
      &:hover {
        border: 1px solid $third_color;
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
.options {
  height: 110vh;
  padding: 30px;
  text-align: start;
  h4 {
    padding: 30px;
  }
}
.department {
  input {
    cursor: pointer;
    margin-right: 10px;
  }
  label {
    font-size: 17px;
  }
}
.custom-checkbox[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
}

.custom-checkbox[type="checkbox"]:checked {
  background-color: orange;
  color: white;
}
.badge-item {
  width: 40%;
}
.fa-xmark {
  cursor: pointer;
}
.size {
  .badges {
    display: flex;
    flex-wrap: wrap;
    span {
      cursor: pointer;
      border: 1px solid rgba(0, 0, 0, 0.155);
      padding: 7px;
      margin: 7px;
      font-size: 15px;
      width: 50px;
      text-align: center;
    }
  }
}
.color {
  .badges {
    display: flex;
    flex-wrap: wrap;
    @for $i from 1 through length($colors) {
      span:nth-child(#{$i}) {
        background-color: nth($colors, $i);
      }
    }
    span {
      cursor: pointer;
      border: 1px solid rgba(0, 0, 0, 0.155);
      padding: 7px;
      margin: 7px;
      font-size: 15px;
      border-radius: 100px;
      width: 30px;
      height: 30px;
      text-align: center;
    }
  }
}
</style>
