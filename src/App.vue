<template>
  <div id="app">
    <div class="container">
      <h1 class="page-header"> Nozzle Stateful Firewall </h1>
      <br><br>

      <h3> Port Counters </h3>
      <div class="row">
        <canvas id="rate-in-port" class="col-sm-6" ></canvas>
        <canvas id="rate-out-port" class="col-sm-6" ></canvas>
    </div>
      <br><br>

      <h3> Static ACL Rules</h3>
      <br>
      <b-table hover :items="items"></b-table>
    </div>
  </div>
</template>


<script>
//import Table from 'components/Table';
import Chart from 'chart.js';
import inportData from './chart-data.js';
import outportData from './chart-data-2.js';
const items = [
  {
    acl_type: 'ACL_IN',
    src_ip: '*',
    dst_ip: '238.43.64.3',
    src_port: '*',
    dst_port: '80',
    action: 'Allow',
  },
  {
    acl_type: 'ACL_IN',
    src_ip: '*',
    dst_ip: '238.43.64.56',
    action: 'Allow',
    src_port: '*',
    dst_port: '80',
    _cellVariants: {action: 'success'}
  },
  {
    acl_type: 'ACL_IN',
    src_ip: '204.204.204.204',
    dst_ip: '*',
    action: 'Block',
    src_port: '*',
    dst_port: '*',
    _cellVariants: {action: 'danger'}
  }
]

export default {
  name: 'app',
  data () {
    return {
      msg: 'Nozzle Security Firewall',
      items: items,
      inportData: inportData,
      outportData: outportData
    }
  },
  methods: {
    createChart(chartId, chartData) {
    const ctx = document.getElementById(chartId);
    const myChart = new Chart(ctx, {
      type: chartData.type,
      data: chartData.data,
      options: chartData.options,
      });
    }
  },
  mounted() {
    this.createChart('rate-in-port', this.inportData);
    this.createChart('rate-out-port', this.outportData);
  }

  // components: {
  //   Table
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
