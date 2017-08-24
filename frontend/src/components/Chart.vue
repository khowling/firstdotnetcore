<template>
  <div></div>
</template>

<script>
import Highcharts  from 'highcharts'

export default {
    name : "Chart",
    props : {
      series : {
        type: Array,
        required: true
      }
    },
  	data : function() {
      return {
        target: undefined
      }
    },
    mounted : function() {
      this.target = Highcharts.chart(this.$el, {
        chart: {
          type: 'column',
          height: 180,
          width: 400
        },
        plotOptions: {
          series: {
              pointStart: 1
          },
          column: {
            borderWidth: 0,
            color: '#b2c831',
            shadow: false
          },
          line: {
            marker: { 
              enabled: false 
            },
            lineWidth: 3
          }
        },
        title: {
          text: 'March Bandwidth'
        },
        xAxis: {
          lineWidth: 0,
          tickWidth: 0,
          labels: { 
            enabled: true 
          }
        },
        yAxis: {
          max: 100,
          labels: { 
            enabled: true 
          },
          gridLineWidth: 0,
          title: {
            text: null,
          },
        },
        tooltip: {
          valueSuffix: ''
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
              borderWidth: 0
        },
        series: this.series
    });
  },
  beforeDestroy: function() {
    this.target.destroy();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
