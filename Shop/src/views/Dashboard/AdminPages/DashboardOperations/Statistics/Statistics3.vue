<template>
  <section class="shadow-lg p-4  rounded-5">
    <div class="text">
      <h4 class=" text-start">Total Revenue</h4>
      <span class="text-light text-start fs-3 ">$999,999,999</span>
    </div>
    <canvas id="myChart2" class="mt-4"></canvas>
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
      labels: labels,
      datasets: [
        {
          label: "Revenue",
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    };
    const config = {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        tooltips: {
          mode: "index",
          intersect: false,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          titleFontColor: "white",
          bodyFontColor: "white",
        },
      },
    };
    const ctx = document.getElementById("myChart2").getContext("2d");

    new Chart(ctx, config);
  },
};
</script>
<style scoped lang="scss">
h4{
  color: rgba(255, 255, 255, 0.667);
}
</style>
