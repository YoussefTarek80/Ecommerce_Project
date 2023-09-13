<template>
  <div class="reload">
    <div
      class="spinner-container d-flex justify-content-center align-items-center"
    >
      <div
        class="spinner-border"
        style="width: 100px; height: 100px"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  computed: {
    getEmail() {
      const users = this.$store.getters["admins/getUsers"];
      console.log(users);
      const Userid = localStorage.getItem("UserID");
      const currentUser = users.find((user) => user._id === Userid);
      return currentUser ? currentUser.email : "";
    },
  },
  methods: {
    sendMessage() {
      console.log(this.getEmail);
      const paymentData = {
        email: this.getEmail,
      };
      axios
        .post("http://localhost:3000/payment", paymentData)
        .then((response) => {
          console.log(response.data.message);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    setTimeout(() => {
      this.$router.push("/client/cart/payment/successfully");
    }, 2000);
    this.sendMessage();
    this.$store.dispatch("admins/fetchUsersArray");
  },
};
</script>
<style scoped lang="scss">
// .reload {
//   height: 20vh;
//   background-color: #7c3fff;
//   position: relative;
//   .spinner {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
// }
.reload {
  // background-color: #ba68c8;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  margin-left: 50px;
  .spinner-border {
    color: #7c3fff;
  }
}
</style>
