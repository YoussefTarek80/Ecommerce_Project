<template>
  <div class="Admin-Profile shadow-lg d-flex text-light rounded-5">
    <div class="d-flex flex-column p-5" v-for="admin in admins">
      <h5 class="">Welcome back {{ admin.username }}!</h5>
      <div class="d-flex gap-5 m-3">
        <div class="d-flex flex-column">
          <p class="fs-2">$2,340</p>
          <span>Today’s Sales</span>
        </div>
        <div class="d-flex flex-column">
          <p class="fs-2">35%</p>
          <span>Performance</span>
        </div>
      </div>
    </div>
    <img
      src="https://modernize-vue3-dark.netlify.app/assets/welcome-bg-40581529.svg"
      alt=""
    />
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      adminData: [],
    };
  },
  computed: {
    admins() {
      return this.$store.getters['admins/getAdmins'];
    },
  },
  mounted() {
    this.$store.dispatch("admins/fetchAdmins");
    this.$store.dispatch("admins/fetchTotalAdmins");
    
  },
};
</script>

<style scoped lang="scss">
.Admin-Profile {
  background-color: #253662;
  width: 100%;
  span {
    color: #eaeff4;
    font-size: 1.1rem !important;
    font-weight: 400;
    line-height: 1.1rem;
    letter-spacing: 0.009375em !important;
    font-family: inherit !important;
    text-transform: none !important;
  }
}
</style>
