export const inportData = {
  type: 'line',
  data: {
    labels: ['12AM', '4AM', '8AM', '12PM', '4PM', '8PM', '12AM'],
    datasets: [
      { // one line graph
        label: 'Rate on in-port [Gbps]',
        data: [3.1,1.2,4,6,7.5,8.5,3],
        backgroundColor: [
          'rgba(113, 161, 237,0.5)'
        ],
        borderColor: [
          '#092c63'
        ],
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 25,
        }
      }]
    }
  }
}

export default inportData;
