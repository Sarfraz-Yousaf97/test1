
import { Typography } from "@material-ui/core";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { LINE_CHART_COLORS, PIE_CHART_COLORS } from "../../../config";

export default class ItemChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
          100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
          100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
          100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
          89, 88, 87, 86, 85, 84, 80, 80, 80, 80,
          69, 68, 67, 66, 65, 64, 60, 60, 60, 60,
          49, 48, 47, 46, 45, 44, 40, 40, 40, 40,
          39, 38, 37, 36, 35, 34, 30, 30, 30, 30,
          19, 18, 17, 16, 15, 14, 10, 10, 10, 10,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ]
      }],
      options: {
        chart: {
          type: 'bar',
         
        },
        colors: [PIE_CHART_COLORS.GREEN, PIE_CHART_COLORS.ORANAGE, PIE_CHART_COLORS.RED],
        backgroundColor: "#fff",
        titleTextStyle: {
          color: "#045298",
          fontSize: 15,
          bold: true,
          fontName: "Ubuntu",
        },
        color: '#045298',
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Mars', 'Aam', 'testranj...', 'Twix',
            'Italy', 'France', 'Japan', 'United States', 'China',
            'Germany', 'Mars', 'Aam', 'testranj...', 'Twix', 'Italy',
            'France', 'Japan', 'United States', 'China', 'Germany', 'Mars',
            'Aam', 'testranj...', 'Twix', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany', 'Mars', 'Aam',
            'testranj...', 'Twix', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany', 'Mars', 'Aam',
            'testranj...', 'Twix', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany', 'Mars', 'Aam',
            'testranj...', 'Twix', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany', 'Mars', 'Aam',
            'testranj...', 'Twix', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany', 'Mars', 'Aam',
            'testranj...', 'Twix', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany', 'Mars', 'Aam',
            'testranj...', 'Twix', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany', 'Mars', 'Aam',
            'testranj...', 'Twix', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany',

          ],
        }
      },
    };
  }
  render() { 
    return (
      <>

        <div id="chart">
          <ReactApexChart options={this.state.options}
            series={this.state.series} type="bar" height={2050} />
        </div>
      </>

    );
  }
}
