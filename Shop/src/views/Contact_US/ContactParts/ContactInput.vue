<template>
  <section class="container">
    <div class="row m-auto align-items-center justify-content-between">
      <form
        action=""
        method="post"
        class="col-6 d-flex flex-column align-item-center"
        @submit.prevent="AddMessage"
      >
        <div class="form-group">
          <label for="in1">Your Name</label>
          <input type="text" id="in1" placeholder="Name" v-model="Name" />
        </div>
        <div class="form-group">
          <label for="in2">Your Messege</label>
          <textarea
            name=""
            id="in2"
            cols="30"
            rows="10"
            placeholder="Message"
            v-model="Description"
          ></textarea>
        </div>
        <button class="btn" type="submit">Submit</button>
      </form>
      <img
        src="../../../assets/ContactGallary/Contact us-pana.png"
        class="w-50 col-6"
        alt=""
      />
    </div>
    <base-teleport class="teleport" :show="showDialog">
      <strong style="color: green">Messege Sent Successfully</strong>
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
import BaseTeleport from "../../../UI/BaseTeleport.vue";
export default {
  components:{
    BaseTeleport
  },
  data() {
    return {
      Name: "",
      Description: "",
      showDialog: false,
    };
  },
  methods: {
    async AddMessage() {
      try {
        const newMessage = {
          Name: this.Name,
          Descrbtion: this.Description,
        };
        const userId = localStorage.getItem("UserID");
        await axios.post(
          `http://localhost:3000/auth/addMessage/${userId}`,
          newMessage
        ).then(
            this.Name='',
            this.Description='',
            this.showDialog = true
        ).catch(console.log('err'));
        console.log("Added");
      } catch (err) {
        console.log(err);
      }
      setTimeout(() => {
        this.showDialog = false;
      }, 2000);
    },
  },
};
</script>
<style scoped lang="scss">
section {
  height: 90vh;
}
.form-group {
  margin-bottom: 20px;
  padding: 10px;
  color: white;
  label {
    display: block;
    font-weight: bold;
    padding: 10px;
    font-size: 17px;
  }
}
.form-group input[type="text"],
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  border: 1px solid #ba68c8;
}
.form-group textarea {
  height: 200px;
  resize: none;
}

.btn {
  background-color: #ba68c8;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 60%;
  margin: auto;
  box-shadow: 0 0 3px 1px #ba68c8;
}
.btn:hover {
  background-color: #884a93;
}

.row::after {
  content: "";
  display: block;
  position: absolute;
  background-color: #884a93;
  height: 400px;
  width: 25%;
  border-radius: 100%;
  z-index: -1;
  top: 15%;
  left: 0;
  box-shadow: 0 0 10px 10px #884a93;
}
</style>
