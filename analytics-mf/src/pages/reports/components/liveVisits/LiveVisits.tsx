import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const LiveVisits: React.FC = () => {
  const [series, setSeries] = useState([50, 70]);

  useEffect(() => {
    let inteval: NodeJS.Timer;

    const updateSeries = () => {
      inteval = setInterval(() => {
        const series1 = Math.floor(Math.random() * 100) + 1;
        const series2 = Math.floor(Math.random() * 100) + 1;
        setSeries([series1, series2]);
      }, 2000);
    };

    updateSeries();
    return () => {
      clearInterval(inteval);
    };
  }, []);

  return (
    <div className="flex justify-between w-full">
      <div className="w-[49%]">
        <Chart
          type="radialBar"
          series={series}
          options={{
            labels: ["Internalnal", "Domestics"],
            plotOptions: {
              radialBar: {
                hollow: {
                  margin: 15,
                  size: "60%",
                },

                dataLabels: {
                  //showOn: "always",
                  show: true,
                  name: {
                    offsetY: -10,
                    show: true,
                    color: "#888",
                    fontSize: "12px",
                  },
                  value: {
                    color: "#111",
                    fontSize: "12px",
                    show: true,
                  },
                },
              },
            },
            legend: {
              show: false,
              position: "bottom",
              showForSingleSeries: true,
            },
           
          }}
        />
          <div className="flex">
            <div className="w-3 h-3 rounded-full bg-green-400 self-center mr-3"></div>
            <p className="text-gray-400 text-sm">Domestic- {series[1]}% </p>
        </div>
        <div className="flex">
            <div className="w-3 h-3 rounded-full bg-blue-400 self-center mr-3"></div>
            <p className="text-gray-400 text-sm">International- {series[0]}% </p>
        </div>
      </div>
      <div className="w-[49%] flex flex-col">
          <h2 className="text-[color:var(--dark-blue)] font-bold self-center">80</h2>
          <h2 className="text-[color:var(--grey)] font-bold self-center">Right Now</h2>
        <Chart
          type="bar"
          series={[
            {
              name: "Organic",
              data: [55],
              color: "#6cfd7f",
            },
            {
              name: "Direct",
              data: [70],
              color: "#dbfd7d",
            },
            {
              name: "Campaign",
              data: [17],
              color: "#8dabfc",
            },
          ]}
          options={{
            chart: {
              stacked: true,
              zoom: {
                enabled: false,
              },
              toolbar: {
                show: false,
              },
            },
            plotOptions: {
                bar: {
                  horizontal: true,
                  borderRadius:10,
                  columnWidth: "10"
                }
              },
              grid: {
                show: false,
              },
              xaxis: {
                
                labels: {
                  show: false,
                },
              },
              yaxis: {
                labels: {
                  show: false,
                },
              },
          }}
         
        />
      </div>
    </div>
  );
};

export default LiveVisits;
