<template>
  <section class="">
    <div class="d-flex flex-column align-items-center justify-content-center">
      <img src="../../../assets/HomeGallary/home/succees.png"  alt="" />
      <div class="d-flex flex-column align-items-center justify-content-center text-center mt-4" >
        <h3>Thank you for your order!</h3>
        <p class="w-50">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div class="d-flex justify-content-around align-items-center w-50 mt-4">
        <button class="btn " style="border: 1px solid #7C3FFF;color: #7C3FFF;" @click="gotoshopping">Go back shopping</button>
        <button class="btn" style="background-color: #7C3FFF;color: white;" @click="gotoshopping">Go back shopping</button>
      </div>
    </div>
  </section>
  <footerView />
</template>
<script>
import footerView from "../../../components/Client/Footer/footer.vue";
export default {
  components: {
    footerView,
  },
  methods:{
    gotoshopping(){
        this.$router.push('/client/shop')
    }
  }
};
</script>
<style scoped lang="scss">
section{
    margin-top: 10px;
    height: 60vh;
}

</style>
