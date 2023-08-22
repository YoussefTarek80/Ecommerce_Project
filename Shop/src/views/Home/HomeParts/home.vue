<template>
    <section class="home position-relative "> 
        <div class="Home-data d-flex flex-column w-50 ">
            <img src="../../../assets/HomeGallary/home/Group 49.png" alt="">
            <router-link to="/client/shop" class="btn fs-5 align-self-center w-50">Shop Now <i class="fa-solid fa-arrow-left fa-rotate-180"></i></router-link> >
        </div>
    </section>
    <div class="end-home">
        <div class="brands d-flex justify-content-around align-items-center flex-wrap">
            <img src="../../../assets/HomeGallary/home/Group 29.png" alt="">
            <img src="../../../assets/HomeGallary/home/Group 31.png" alt="">
            <img src="../../../assets/HomeGallary/home/Mask Group.png" alt="">
        </div>
    </div>
</template>
<script>

    export default{
    }
</script>
<style lang="scss" scoped>
.home{
    $color:#7C3FFF;
    background: url('../../../assets/HomeGallary/home/Home-image.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    .Home-data {
        .btn{
            color: white;
            background-color: $color;
        }
    }
}
.brands{
    img{
        padding: 40px;
    }
}
</style>