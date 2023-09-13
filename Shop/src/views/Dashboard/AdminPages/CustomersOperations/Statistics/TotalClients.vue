<template>
  <section class="shadow-lg p-4 w-50 rounded-5">
    <div class="text">
      <h4 class="text-start">Client Per Day</h4>
    </div>
    <canvas id="myChart1" class="mt-4"></canvas>
  </section>
</template>

<script>
import { Chart } from "chart.js/auto";

export default {
  mounted() {
    const labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ];
    const data = {
      datasets: [
        {
          label: "First Dataset",
          data: [
            {
              x: 30,
              y: 40,
              r: 10,
            },
            {
              x: 20,
              y: 40,
              r: 10,
            },
            {
              x: 10,
              y: 50,
              r: 10,
            },
            {
              x: 12,
              y: 45,
              r: 10,
            },
          ],
          backgroundColor: "rgb(255, 99, 132)",
        },
      ],
    };
    const config = {
      type: "bubble",
      data: data,
      options: {},
    };
    const ctx = document.getElementById("myChart1").getContext("2d");

    new Chart(ctx, config);
  },
};
</script>
<style scoped lang="scss">
h4 {
  color: rgba(255, 255, 255, 0.667);
}
</style>
