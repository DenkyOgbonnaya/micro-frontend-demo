import React from "react";
import Chart from "react-apexcharts";

const TaskPerformance: React.FC = () => {
  return (
    <>
      <Chart
        type="radialBar"
        series={[30, 50, 60]}
        options={{
          chart: {
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
          },
          labels: ["Completed", "Active", "Assigned"],
          colors: ["#077eb1", "#8bcfec", "#bfeafd"],
          legend: {
              show: true,
              position:"bottom"
          }
        }}
        
      />
    </>
  );
};

export default TaskPerformance;
