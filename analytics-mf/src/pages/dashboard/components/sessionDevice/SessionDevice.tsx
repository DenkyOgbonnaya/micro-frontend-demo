import * as React from "react";
import Chart from "react-apexcharts";

interface IProps {
  series: string[] | number[];
  labels: string[];
  colors: string[];
}
const SessionDevice: React.FC<IProps> = ({ series, labels, colors }) => {
  return (
    <div className="w-full p-4">
      <Chart
        series={series}
        type="donut"
        width="100%"
    
        options={{
          labels,
          colors,
          legend: {
            position: 'bottom'
          },
          plotOptions: {
            pie: {
              customScale: 0.8,
              donut: {
                  size: '70'
              }
            },
            
          }
        }}
      />
    </div>
  );
};

export default SessionDevice;
