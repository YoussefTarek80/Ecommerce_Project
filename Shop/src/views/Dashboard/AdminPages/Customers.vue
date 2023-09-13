<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <Statistics />
        </div>
        <div class="col-12">
          <clientTable />
        </div>
        <div class="col-12">
          <Statistics2 />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import clientTable from "../../Dashboard/AdminPages/CustomersOperations/ClientTable.vue";
import Statistics from "../../Dashboard/AdminPages/CustomersOperations/Statistics/TotalClients.vue";
import Statistics2 from "../../Dashboard/AdminPages/CustomersOperations/Statistics/ClientsMessages.vue";
export default {
  components: {
    clientTable,
    Statistics,
    Statistics2
  },
};
</script>
