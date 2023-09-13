<template>
  <section class="">
    <div class="container">
      <div class="row align-items-center gap-3  justify-content-between">
        <div class="col-7 m-2 ">
          <Profile />
        </div>
        <div class="col-4 m-2 ">
          <Statistics />
        </div>
      </div>
      <div class="row align-items-center gap-3">
        <div class="col-4 m-2">
          <Statistics2 />
        </div>
        <div class="col-7 m-2">
          <Statistics3 />
        </div>
        <div class="col-7 m-2">
          <Statistics4 />
        </div>
        <div class="col-3 m-2">
          <Statistics5 />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Statistics from "../AdminPages/DashboardOperations/Statistics/Statistics.vue";
import Profile from "../AdminPages/DashboardOperations/ProfileAdmin.vue";
import Statistics2 from "../AdminPages/DashboardOperations/Statistics/Statistics2.vue";
import Statistics3 from "../AdminPages/DashboardOperations/Statistics/Statistics3.vue";
import Statistics4 from "../AdminPages/DashboardOperations/Statistics/Statistics4.vue";
import Statistics5 from "../AdminPages/DashboardOperations/Statistics/Statistics5.vue";
export default {
  components: {
    Statistics,
    Profile,
    Statistics2,
    Statistics3,
    Statistics4,
    Statistics5
  },
};
</script>
<style scoped lang="scss">
section {
  padding-top: 0;
}
</style>
