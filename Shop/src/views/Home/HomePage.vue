<template>
    <Top_header></Top_header>
    <Header></Header>
    <home></home>
    <new-arrival></new-arrival>
    <types></types>
    <sale></sale>
    <footerview></footerview>
</template>
<script>
import Header from '../../components/Client/Header/header.vue'
import Top_header from '../../components/Client/Header/Top_header.vue'
import NewArrival from './HomeParts/NewArrival.vue';
import home from '../Home/HomeParts/home.vue';
import types from '../Home/HomeParts/types.vue';
import Sale from '../Home/HomeParts/Sale.vue';
import footerview from '../../components/Client/Footer/footer.vue'
    export default{
        components:{
            Header,
            Top_header,
            home,
            NewArrival,
            types,
            Sale,
            footerview
        }
    }
</script>