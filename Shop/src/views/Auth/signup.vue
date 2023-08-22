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
      <input type="text" placeholder="Email" v-model="email" @blur="ValidateEmail" required/>
      <p class="error p-0 mt-0" v-if="vaildemail">Invalid Email</p>
      <input type="password" placeholder="Password" v-model="password" required/>
      <input
        type="password"
        placeholder="Conform Password"
        v-model="confpassword"
        @blur="Validatepassword"
      />
      <p class="error p-0 m-0" v-if="validpassword">This password not match </p>
      <input type="text" placeholder="phone" v-model="phone" required/>
      <input type="text" placeholder="Address" v-model="address" required/>
      <button class="btn align-self-center btn1 mt-3 w-50" :disabled="valid">Sign Up</button>
      <span class="mt-5 align-self-center"
        >i don't have an account ?<button class="btn btn2 ms-1" @click="Login">
          Sign in
        </button></span
      >
    </form>
    <img src="../../assets/LoginGallary/Group 2014.png" alt="" />
  </section>
</template>

<script>
import axios from "axios";
import router from "../../../router";
export default {
  data() {
    return {
      email: "",
      password: "",
      confpassword: "",
      phone: "",
      address: "",
      vaildemail:false,
      validpassword:false,
      valid:false
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
      try {
        axios
          .post("http://localhost:3000/auth/register", newUser)
          .then(() => {
            console.log(newUser);
            this.email = "";
            this.password = "";
            this.confpassword = "";
            this.phone = "";
            this.address = "";
          })
          .catch((error) => {
            console.error("Error adding data:", error);
          });
      } catch (err) {
        console.log(err);
      }
    },
    Login(){
        this.$router.push('/auth/login')
    },
    ValidateEmail(){
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if(emailPattern.test(this.email)!==true){
            this.vaildemail=true;
            this.valid=true
        }
        else{
            this.vaildemail=false;
            this.valid=false
        }
        
    },
    Validatepassword(){
        if(this.password!==this.confpassword){
            this.validpassword = true;
            this.valid=true
        }
        else{
            this.validpassword = false;
            this.valid=false
        }
    }
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
    background-color: #f47458;
    color: white;
    transition: .5s ease;
  }
  .btn2 {
    background-color: transparent;
    color: #f47458;
    border: 1px solid #f47458;
    &:hover{
      background-color: #f47458;
      color: white;
    }
  }
  .btn1{
    &:hover{
      background-color: transparent;
      border: 1px solid #f47458;
      color: #f47458;
    }
  }
  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
  .error{
    color: red;
    
  }
}
</style>
