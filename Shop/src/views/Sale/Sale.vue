<template>
    <headerview />
    <SaleProducts />
    <footerview />
</template>
<script>
import SaleProducts from "./SaleParts/ProductSale.vue";
import headerview from "../../../../Shop/src/components/Client/Header/header.vue";
import footerview from "../../../../Shop/src/components/Client/Footer/footer.vue";
export default {
  components: {
    SaleProducts,
    footerview,
    headerview
  },
};
</script>