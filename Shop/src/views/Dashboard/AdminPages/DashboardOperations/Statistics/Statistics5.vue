<template>
    <div class="d-flex gap-5 flex-wrap ms-4 w-100">
      <div class=" p-4 shadow-lg rounded-5">
        <div class="head-card d-flex flex-column text-light p-3 mb-3">
          <span class="fs-3">Sales Overview</span>
          <span>Every month</span>
        </div>
        <canvas id="myChart5"></canvas>
      </div>
    </div>
  </template>
  
  <script>
  import Chart from "chart.js/auto";
  export default {
    mounted() {
      const data = {
        labels: ["Profit", "Revenue", "Expense"],
        datasets: [
          {
            data: [100, 70, 50],
            backgroundColor: [
              "rgb(93, 135, 255)",
              "rgb(73, 190, 255)",
              "rgb(37, 54, 98)",
            ],
            borderWidth: [0, 0, 0],
            hoverOffset: 4,
          },
        ],
      };
      const config = {
        type: "doughnut",
        data: data,
  
        options: {
          cutout: "80%",
          rotation: 0,
          animation: {
            animateRotate: true,
            animateScale: true,
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                color: "white",
              },
            },
            tooltip: {
              enabled: true,
              callbacks: {
                label: function (context) {
                  var label = context.label || "";
                  var value = context.formattedValue || "";
                  return label + ": " + value + "%";
                },
              },
            },
          },
        },
      };
      const ctx = document.getElementById("myChart5").getContext("2d");
  
      new Chart(ctx, config);
    },
  };
  </script>
  