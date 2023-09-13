<template>
  <section class="home position-relative">
    <div class="Home-data">
      <router-link to="/client/shop" class="btn"
        >Shop Now<i class="fa-solid fa-arrow-right fa-shake"></i
      ></router-link>
    </div>
  </section>
  <div class="end-home">
    <div
      class="brands d-flex justify-content-around align-items-center flex-wrap"
    >
      <img src="../../../assets/HomeGallary/home/Group 29.png" alt="" />
      <img src="../../../assets/HomeGallary/home/Group 31.png" alt="" />
      <img src="../../../assets/HomeGallary/home/Mask Group.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.home {
  $color: #7c3fff;
  $second_color: #ff725e;
  $third_color:#ba68c8;
  background: url("../../../assets/HomeGallary/home/Ecommerce checkout laptop-cuate.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 90vh;
  margin-top: 10vh;
  .Home-data {
    position: absolute;
    left: 52.5%;
    top: 30%;
    .btn {
      color: white;
      background-color: $third_color;
      font-size: 25px;
      width: 186%;
      transition: 0.5s ease-in-out;
      padding: 35px 10px 30px 20px;
      i {
        margin-left: 20px;
        font-size: 30px;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
.brands {
  img {
    padding: 40px;
  }
}
</style>
