<template>
  <section class="d-flex align-items-center justify-content-center">
    <form
      action=""
      method="post"
      @submit.prevent="Signup"
      class="box d-flex flex-column align-items-start shadow-lg p-5 mb-5 bg-white rounded-4"
    >
      <span class="text-secondary">Register New User</span>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Email"
        v-model="email"
        @blur="ValidateEmail"
        required
      />
      <p
        class="error p-0 mt-1 fs-6 bg-danger w-100 rounded-3"
        v-if="vaildemail"
      >
        Invalid Email
      </p>
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        required
      />
      <input
        type="password"
        placeholder="Conform Password"
        v-model="confpassword"
        required
        @blur="Validatepassword"
      />
      <p
        class="error p-0 mt-1 fs-6 bg-danger w-100 rounded-3"
        v-if="validpassword"
      >
        This password not match
      </p>
      <input type="text" placeholder="phone" v-model="phone" required />
      <input type="text" placeholder="Address" v-model="address" required />
      <button class="btn align-self-center btn1 mt-3 w-50" :disabled="valid">
        <span v-if="!spinner">Sign Up</span>
        <spinner v-if="spinner" class=""></spinner>
      </button>

      <span class="mt-5 align-self-center"
        >i don't have an account ?<button class="btn btn2 ms-1" @click="Login">
          Sign in
        </button></span
      >
    </form>
    <img src="../../assets/LoginGallary/Login.png" alt="" />
  </section>
  <base-teleport :show="signupstatussucces">
    <strong style="color: green">Signup Successfully</strong>
    <template v-slot:status>
      <i class="fa-solid fa-check" style="color: green; font-size: 50px"></i>
    </template>
  </base-teleport>
</template>

<script>
import axios from "axios";
import BaseTeleport from "../../UI/BaseTeleport.vue";
export default {
  components: {
    BaseTeleport,
  },
  data() {
    return {
      email: "",
      password: "",
      confpassword: "",
      phone: "",
      address: "",
      vaildemail: false,
      validpassword: false,
      valid: false,
      spinner: false,
      signupstatuserror: false,
      signupstatussucces: false,
    };
  },
  methods: {
    Signup() {
      const newUser = {
        email: this.email,
        password: this.password,
        phone: this.phone,
        address: this.address,
      };
      this.spinner = true;
      try {
        axios
          .post("http://localhost:3000/auth/register", newUser)
          .then(() => {
            console.log(newUser);
            this.Success(2000, true);
          })
          .catch((error) => {
            console.error("Error adding data:", error);
          });
      } catch (err) {
        console.log(err);
      }
      this.Success(3000, false);
      this.spinnerTimer(2000);
      this.clear(2500);
    },
    clear(time) {
      setTimeout(() => {
        this.email = "";
        this.password = "";
        this.confpassword = "";
        this.phone = "";
        this.address = "";
      },time);
    },
    spinnerTimer(time) {
      setTimeout(() => {
        this.spinner = false;
      }, time);
    },
    Login() {
      this.$router.push("/auth/login");
    },
    ValidateEmail() {
      const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      if (emailPattern.test(this.email) !== true) {
        this.vaildemail = true;
        this.valid = true;
      } else {
        this.vaildemail = false;
        this.valid = false;
      }
    },
    Validatepassword() {
      if (this.password !== this.confpassword) {
        this.validpassword = true;
        this.valid = true;
      } else {
        this.validpassword = false;
        this.valid = false;
      }
    },
    Success(time, stat) {
      setTimeout(() => {
        this.signupstatussucces = stat;
      }, time);
    },
  },
};
</script>
<style scoped lang="scss">
section {
  height: 100vh;
}
.box {
  width: 35%;
  input {
    margin-top: 30px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
  }
  button {
    background-color: #ba68c8;
    color: white;
    transition: 0.5s ease;
  }
  .btn2 {
    background-color: transparent;
    color: #ba68c8;
    border: 1px solid #ba68c8;
    &:hover {
      background-color: #ba68c8;
      color: white;
    }
  }
  .btn1 {
    &:hover {
      // background-color: transparent;
      border: 1px solid #ba68c8;
      // color: #BA68C8;
      transform: scale(1.1);
    }
  }
  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
  .error {
    color: white;
    text-align: center;
  }
}
</style>
