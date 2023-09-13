<template>
  <section
    class="loginsection d-flex align-items-center justify-content-center"
    v-if="!mobile"
  >
    <div
      class="box d-flex flex-column align-items-start shadow-lg p-5 mb-5 bg-white rounded-4"
    >
      <span class="text-secondary">Welcom back !!!</span>
      <h1>Sign in</h1>
      <input type="text" placeholder="Email" v-model="email" required />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        @keyup.enter="login"
        required
      />
      <a href="#" class="align-self-end mt-2">forget password !?</a>
      <button class="btn align-self-center btn1 w-50 mt-3" @click="login">
        <span v-if="!spinner">Sign in</span>
        <spinner v-if="spinner" class=""></spinner>
      </button>
      <span class="mt-5 align-self-center"
        >i don't have an account ?<button class="btn btn2 ms-1" @click="signup">
          Sign up
        </button></span
      >
    </div>
    <img src="../../assets/LoginGallary/Login.png"  alt="" />
  </section>
  <mobile :show="mobile" class="mobile">
    <h4>This Web site Working Only on Personal Computers (PCs)</h4>
  </mobile>
  <base-teleport :show="loginerror">
    <strong style="color: red">Invalid Login</strong>
    <template v-slot:status>
      <i class="fa-solid fa-xmark" style="color: red; font-size: 50px"></i>
    </template>
  </base-teleport>
</template>

<script>
import axios from "axios";
import BaseTeleport from "../../UI/BaseTeleport.vue";
import mobile from "../../views/NotFound/mobile.vue";
export default {
  components: {
    BaseTeleport,
    mobile,
  },
  data() {
    return {
      email: "",
      password: "",
      loginerror: false,
      adminrole: false,
      mobile: false,
      spinner: false,
      token:''
    };
  },
  created() {
    this.updateMobileStatus();
    window.addEventListener("resize", this.updateMobileStatus);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateMobileStatus);
  },
  methods: {
    updateMobileStatus() {
      this.mobile = window.innerWidth <= 1200;
    },
    async login() {
      try {
        const loginuser = {
          email: this.email,
          password: this.password,
        };

        this.spinner = true;
        const response = await axios.post(
          "http://localhost:3000/auth/login",
          loginuser
        );
        if (response.data && response.data.adminrole !== undefined) {
          this.clear();
          this.adminrole = response.data.adminrole;
          const token = response.data.token;
          localStorage.setItem('token', token);
          this.$root.isAuthenticated = true;
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("UserID",response.data.UserIdLogin);
          if (this.adminrole == true) {
            setTimeout(() => {
              this.$router.replace("/admin");
            }, 2000);
          } else {
            setTimeout(() => {
              this.$router.replace("/client/home");
            }, 2000);
          }
        } else {
          console.log("Invalid response format");
          this.HandleError(2000, true);
        }
      } catch (err) {
        this.HandleError(2000, true);
      }
      this.HandleError(3000, false);
      this.spinnerTimer(2000);
    },
    signup() {
      this.$router.push("/auth/signup");
    },
    clear() {
      this.email = "";
      this.password = "";
      this.loginerror = false;
    },
    HandleError(time, stat) {
      setTimeout(() => {
        this.loginerror = stat;
      }, time);
    },
    spinnerTimer(time) {
      setTimeout(() => {
        this.spinner = false;
      }, time);
    },
  },
};
</script>
<style scoped lang="scss">
.loginsection {
  height: 100vh;
}
.box {
  width: 35%;
  height: 60vh;
  input {
    margin-top: 30px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
  }
  button {
    background-color: #BA68C8;
    color: white;
    transition: 0.5s ease;
  }
  .btn2 {
    background-color: transparent;
    color: #BA68C8;
    border: 1px solid #BA68C8;
    &:hover {
      background-color: #BA68C8;
      color: white;
    }
  }
  .btn1 {
    &:hover {
      // background-color: transparent;
      // border: 1px solid #f47458;
      transform: scale(1.1);
      // color: #f47458;
    }
  }
  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
}

@media (max-width: 1200px) {
  img {
    display: none;
  }
}
</style>
