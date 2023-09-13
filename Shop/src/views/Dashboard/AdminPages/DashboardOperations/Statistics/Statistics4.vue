<template>
  <section class="shadow-lg p-4 rounded-5">
    <div class="text">
      <h2 class="text-light text-center">Products Cost</h2>
    </div>
    <canvas id="myChart3"></canvas>
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
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55, 50],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };
    const config = {
      type: "line",
      data: data,
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: "linear",
            from: 1,
            to: 0,
            loop: true,
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
    const ctx = document.getElementById("myChart3").getContext("2d");

    new Chart(ctx, config);
  },
};
</script>
