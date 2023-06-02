import Apexchart from "react-apexcharts";

const Chart = ({value}) => {

  const donutData = {
    series: [value.jsweet, value.jsour, value.jsalty, value.jsoft, value.jhard],
    options: {
      chart: {
        type: 'pie',
        offsetY : -30,
        offsetX : 5,
        fontFamily : 'Dongle',
      },
      labels: ["단맛", "신맛", "짠맛", "부들", "딱딱"],
      colors: ['#E91E63', '#91ff00', '#d2cfcf', '#a3c9ff', '#e93ce9' ],
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -5
          }
        }
      },
      title: {
        // text: "<맛 평가>",
        offsetX: 10,
        offsetY: 50,
        style : {
            fontSize : '34px',
            fontFamily:  'Dongle',
        }
      },
      dataLabels: {
        formatter(val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex]
          return [name, val.toFixed(0) + '%']
        },
        style: {
            fontSize: '30px',
            fontWeight: 'bold',
        },
      },
      legend: {
        show: true,
        fontSize: '20px',
        position: 'bottom',
        onItemHover: {
            highlightDataSeries: true
        },
    },
    tooltip:{
        style : {
            fontSize : '28px',
        },
    }
    },
  }
  
    return (
        <>
      <Apexchart
        options = {donutData.options}
        series={donutData.series}
        type ="pie"
        width={440}
      />
      </>
  );
};

export default Chart;
