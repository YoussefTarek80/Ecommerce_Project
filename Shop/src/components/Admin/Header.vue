<template>
  <div class="sidebar text-center">
    <h3>Admin Dashboard</h3>
    <ul class="text-start pt-5">
      <li @click="select('Dashboard')" :class="{ active: isSelected === 'Dashboard'}"><a href="#">Dashboard</a></li>
      <li @click="select('Products')" :class="{ active: isSelected === 'Products'}"><a href="#">Products</a></li>
      <li><a href="#">Customers</a></li>
      <li><a href="#">Menu Item 3</a></li>
      <li><a href="#">Menu Item 3</a></li>
      <li><a href="#">Menu Item 3</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['isSelected'],
  data() {
    return {
      isSelected: 'Dashboard',
    };
  },
  methods: {
    select(componentName) {
      this.isSelected=componentName;
      this.$emit('selectComponent', componentName);
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: auto;
  background-color: #f1f1f1;
  padding: 20px;
  height: 100vh;
  position: fixed;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  li {
    font-size: 20px;
  }
}

.sidebar li {
  margin-bottom: 10px;
}

.sidebar a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #333;
}

.sidebar a:hover {
  background-color: #ddd;
}

.comp {
  padding-left: 300px;
}

li.active {
  background-color: #ddd;
}
</style>