<template>
  <div ref="chartdiv" style="width: 100%; height: 270px;"/>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import * as am5 from '@amcharts/amcharts5/index';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const chartdiv = ref(null);
let root = null;

const totalValue = 457000
const completedPercent = 10
const completedValue = totalValue * (completedPercent / 100)
const remainingValue = totalValue - completedValue

onMounted(() => {
  root = am5.Root.new(chartdiv.value);

  root.setThemes([
    am5themes_Animated.new(root)
  ]);

  const chart = root.container.children.push(
    am5percent.PieChart.new(root, {
      layout: root.verticalLayout,
      innerRadius: am5.percent(50)
    })
  );

  const series = chart.series.push(
    am5percent.PieSeries.new(root, {
      valueField: 'value',
      categoryField: 'category',
      alignLabels: false
    })
  );

  series.labels.template.setAll({
    visible: false
  });

  series.data.setAll([
    { value: completedValue, category: 'Completed' },
    { value: remainingValue, category: 'Remaining' }
  ]);

  chart.seriesContainer.children.push(
    am5.Label.new(root, {
      textAlign: 'center',
      centerX: am5.p50,
      centerY: am5.p50,
      text: `[bold fontSize:14px]${totalValue.toLocaleString()}`,
      populateText: true
    })
  );

  const legend = chart.children.push(
    am5.Legend.new(root, {
      centerX: am5.percent(50),
      x: am5.percent(50),
      marginTop: 15,
      marginBottom: 15,
    })
  );

  legend.data.setAll(series.dataItems);

  series.appear(1000, 100);

  root._logo.dispose();
});

onBeforeUnmount(() => {
  if (root) {
    root.dispose();
  }
});
</script>
