<template>
    <Header/>
    <shop></shop>
    <shopping></shopping>
    <footerView></footerView>
</template>
<script>
    import Header from '../../components/Client/Header/header.vue'
    import shop from './ShopParts/shop.vue'
    import footerView from '../../components/Client/Footer/footer.vue'
    import shopping from '../../views/shop/ShopParts/shopping.vue'
    export default{
        components:{
            Header,
            shop,
            footerView,
            shopping
        }
    }

</script>
<style>

</style>