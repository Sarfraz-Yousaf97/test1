import React from "react";
import ReactApexChart from "react-apexcharts";
import { PIE_CHART_COLORS, GREY_COLOR, LIGHT_GREY_COLOR } from '../../../config';
import { Box } from "@material-ui/core";
import { Card, Typography, makeStyles } from "@material-ui/core";

export default class ChartTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [1,15.2,83.8 ],
      options: {
        legend: {
          show: false,
          position: "bottom",
          floating: true,
          fontSize: "16px",
          fontFamily: "Ubuntu",
          // offsetY: 10,
        },
        colors: [
          PIE_CHART_COLORS.GREEN,
          PIE_CHART_COLORS.ORANGE,
          PIE_CHART_COLORS.RED,
        ],
        titleTextStyle: {
          color: "#045298",
          fontSize: 15,
          bold: true,
          fontName: "Ubuntu",
        },
        fill: {
          // type: 'gradient'
        },
        labels: ["In Stock", "Running Low", "Out of stock"],
        chart: {
          type: "donut",
          width: "700px",
          height: 900,
        },
        dataLabels: {
          enabled: true,
        },
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: false,
            },
            donut: {
              size: "70%",
              labels: {
                show: false,
              },
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <Box className="bpx">
        <div id="donut-chart" style={{ position: "relative" }}>
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="donut"
          />
          <Box
            position={"absolute"}
            top="45%"
            left="50%"
            style={{ transform: "translate(-50%, -40%)" }}
          >
            <Typography
              variant="h3"
              style={{
                fontWeight: "lighter",
                fontSize: 25,
                marginBottom: 0,
                fontFamily: "Ubuntu",
                color: "#646464",
              }}
              color="textPrimary"
            >
              Total
            </Typography>
            <br />
            <Typography
              variant="h3"
              style={{
                fontWeight: "lighter",
                fontSize: 55,
                fontFamily: "Ubuntu", color: "#646464", lineHeight:'1px'
              }}
              color="textPrimary"
            >
             399
            </Typography>
          </Box>
        </div>
        <Box marginTop="2rem" display="flex" justifyContent="center">
          <Box display="flex" alignItems="center">
            <Box
              style={{
                width: 14,
                height: 14,
                marginRight: 5,
                borderRadius: "25%",
                backgroundColor: PIE_CHART_COLORS.GREEN,
              }}
            />
            <Typography>In Stock</Typography>
          </Box>

          <Box display="flex" margin="0 15px" alignItems="center">
            <Box
              style={{
                width: 14,
                height: 14,
                marginRight: 5,
                borderRadius: "25%",
                backgroundColor: PIE_CHART_COLORS.ORANGE,
              }}
            />
            <Typography>Running Low</Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <Box
              style={{
                width: 14,
                height: 14,
                marginRight: 5,
                borderRadius: "25%",
                backgroundColor: PIE_CHART_COLORS.RED,
              }}
            />
            <Typography>Out of stock</Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}
