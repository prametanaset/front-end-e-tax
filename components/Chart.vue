<template>
  <div>
    <ApexChart
      type="area"
      height="80"
      width="140"
      :options="chartOptions1"
      :series="areaChart1.series"
    >
    </ApexChart>
  </div>
</template>

<script lang="ts" setup>
// chart 1
const chartOptions1 = computed(() => {
  return {
    chart: {
      type: "area",
      height: 80,
      width: 80,
      fontFamily: `inherit`,
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#af38ff"],
    fill: {
      type: "gradient",
      opacity: 0.9,
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => "Sales :",
        },
      },
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            width: "200",
          },
        },
      },
      {
        breakpoint: 960,
        options: {
          chart: {
            width: "400",
          },
        },
      },
      {
        breakpoint: 1280,
        options: {
          chart: {
            width: "100",
          },
        },
      },
      {
        breakpoint: 1400,
        options: {
          chart: {
            width: "60",
          },
        },
      },
      {
        breakpoint: 1600,
        options: {
          chart: {
            width: "100",
          },
        },
      },
    ],
  };
});

const areaChart1 = {
  series: [
    {
      name: "Sales",
      data: [200, 600, 100, 400, 300, 400, 50],
    },
  ],
};
</script>

<style></style>
