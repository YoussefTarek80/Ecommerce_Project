
<template>
  <div>
    <Header @selectComponent="selectComponent"></Header>
    <component :is="componentSelected" class="comp"></component>
  </div>
</template>

<script>
import Header from "../../components/Admin/Header.vue";
import Dashboard from "../../views/Dashboard/AdminPages/Dashboard.vue";
import Products from "../../views/Dashboard/AdminPages/Products.vue";
import Customers from "../../views/Dashboard/AdminPages/Customers.vue";
export default {
  components: {
    Header,
    Dashboard,
    Products,
    Customers
  },
  data() {
    return {
      componentSelected: "Dashboard",

    };
  },
  methods: {
    selectComponent(componentName) {
      this.componentSelected = componentName;
    },
    
  },
};
</script>
<style scoped lang="scss">
.comp{
  padding-left: 300px;
  background-color: #2A3447;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: auto;
}

</style>

