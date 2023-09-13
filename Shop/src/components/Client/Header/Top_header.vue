<template>
    <div class="info-header d-flex justify-content-around align-items-center p-3 text-light flex-wrap ">
        <div class="support">
            <span>Support (00) 33 169 88 39</span>
        </div>
        <div class="more-info">
            <span>Free us shipping on all transition $100+ <router-link to="/">Learn more</router-link></span>
        </div>
        <div class="links ">
            <router-link to="/">Shipping</router-link>
            <router-link to="/">FAQ</router-link>
            <router-link to="/">Contact</router-link>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            colorHeader:false,
            showHeader:true
        }
    },
}
</script>
<style scoped lang="scss">
    $color:#7C3FFF;
    $second_color:#FF725E;
    $third_color:#ba68c8;
    .links a{
        color: white;
        text-decoration: none;
        margin-left: 40px;
    }
    .more-info a{
        color: white;
    }
    .info-header{
        background-color: $third_color;
        font-weight: 300;
    }
</style>