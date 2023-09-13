<template>
  <section>
    <form action="post">
        <h3 class="p-3">Credit Card <i class="fa-regular fa-credit-card"></i></h3>
      <div>
        <div>
          <input type="text" class="p-2 w-100 m-2" placeholder="Card Number" />
        </div>
        <div>
          <input type="text" class="p-2 w-100 m-2" placeholder="Name on card" />
        </div>
        <div class="d-flex justify-content-between align-items-center  ms-4 mb-4">
          <select id="monthSelect "  class="p-2 m-2">
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select id="yearSelect" class="p-2 m-2" v-model="selectedYear">
            <option value="">Select a Year</option>
            <option v-for="year in yearRange" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
          <input type="text" class="p-2 w-25 m-2" placeholder="CCV">
        </div>
      </div>
    </form>
  </section>
</template>
<script>
export default{
    data(){
        return{
            selectedYear: '',
            yearRange: Array.from({ length: 12 }, (_, index) => new Date().getFullYear() - index)
        }
    }
}

</script>
<style scoped lang="scss">
input,
select {
  outline: none;
  padding: 7px;
  margin: 10px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.196);
  border-radius: 10px;
}
</style>