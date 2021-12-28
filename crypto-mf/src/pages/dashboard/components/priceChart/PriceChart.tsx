import * as React from "react";
import Chart from "react-apexcharts";

const PriceChart: React.FC = () => {
  return (
    <>
      <Chart
        type="candlestick"
        series={[
          {
            data: [
              {
                x: "23:00",
                y: [51.98, 56.29, 51.59, 53.85],
              },
              {
                x: "3:00",
                y: [53.66, 54.99, 51.35, 52.95],
              },

              {
                x: "06:00",
                y: [52.76, 57.35, 52.15, 57.03],
              },
              {
                x: "09:00",
                y: [55.76, 59.35, 62.15, 67.03],
              },
              {
                x: "12:00",
                y: [54.76, 51.35, 52.15, 40.03],
              },
              {
                x: "15:00",
                y: [52.76, 57.35, 52.15, 57.03],
              },
              {
                x: "18:00",
                y: [52.76, 47.35, 32.15, 27.03],
              },
              {
                x: "21:00",
                y: [52.76, 57.35, 52.15, 57.03],
              },
              {
                x: "07 Oct",
                y: [53.66, 54.99, 51.35, 52.95],
              },
              {
                x: "03:00",
                y: [12.76, 15.35, 18.15, 17.03],
              },
            ],
          },
        ]}
        options={{
          chart: {
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            candlestick: {
              colors: {
                upward: "#3C90EB",
                downward: "#DF7D46",
              },
            },
          },
         legend: {
           show: true
         }
        }}
      />
    </>
  );
};

export default PriceChart;
