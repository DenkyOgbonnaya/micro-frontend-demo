import React from "react";
import Chart from "react-apexcharts";

const ProjectsOverview = () => {
  return (
    <div>
      <Chart
        type="bar"
        series={[
          {
            data: [
              {
                x: "Jan",
                y: 12,
              },
              {
                x: "Feb",
                y: 10,
              },
              {
                x: "April",
                y: 19,
              },
              {
                x: "May",
                y: 8,
              },
              {
                x: "June",
                y: 15,
              },
              {
                x: "July",
                y: 17,
              },
              {
                x: "Aug",
                y: 13,
              },
              {
                x: "Sept",
                y: 19,
              },
              {
                x: "Oct",
                y: 10,
              },
              {
                x: "Nov",
                y: 13,
              },
              {
                x: "Dec",
                y: 17,
              },
            ],
          },
          {
            data: [
              {
                x: "Jan",
                y: 6,
              },
              {
                x: "Feb",
                y: 19,
              },
              {
                x: "April",
                y: 10,
              },
              {
                x: "May",
                y: 5,
              },
              {
                x: "June",
                y: 17,
              },
              {
                x: "July",
                y: 10,
              },
              {
                x: "Aug",
                y: 5,
              },
              {
                x: "Sept",
                y: 10,
              },
              {
                x: "Oct",
                y: 18,
              },
              {
                x: "Nov",
                y: 13,
              },
              {
                x: "Dec",
                y: 17,
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
            bar: {
              borderRadius: 5,
              columnWidth: "40",
            },
          },
          colors: ["#077eb1", "#e0eef4"],
          legend: {
            show: false,
          },
          grid: {
            show: false,
          },
          dataLabels: {
            enabled: false,
          },
          yaxis: {
            labels: {
              formatter: (val) => `${val}`,
            },
          },
        }}
      />
    </div>
  );
};

export default ProjectsOverview;
