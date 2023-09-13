<template>
    <headerview />
    <Inputs /> 
    <footerview />
</template>
<script>
import Inputs from "./ContactParts/ContactInput.vue";
import headerview from "../../../../Shop/src/components/Client/Header/header.vue";
import footerview from "../../../../Shop/src/components/Client/Footer/footer.vue";
export default {
  components: {
    Inputs,
    footerview,
    headerview
  },
};
</script>