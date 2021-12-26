import * as React from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Chart from "react-apexcharts";
import { series } from "../../../../shared/types";


interface IProps {
  series: series[];
  xCategories: string[] | number[];
}
const AudienceOverview: React.FC<IProps> = ({ series, xCategories }) => {
  return (
    <div className="flex flex-col rounded-sm shadow-sm bg-white w-full">
      <div className="flex justify-between p-3 border-b border-solid border-slate-300 w-full">
        <h3>Audience Overview</h3>
        <div className="border border-solid border-slate-300 px-2 w-fit h-fit flex">
          <p className="text-[color:var(--grey)] mr-1">This year</p>
          <ChevronDownIcon className="text-[color:var(--grey)] w-4 h-4 self-center" />
        </div>
      </div>
      <div className="w-full p-4">
        <Chart
          options={{
            dataLabels: {
              enabled: true,
            },
            theme: {
              mode: "light",
            },
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
                bar:{
                    columnWidth: "20"
                }
            },
            tooltip: {
              followCursor: true,
            },
            grid: {
              show: false,
            },
            legend: {
              show: true,
            },
            xaxis: {
              labels: {
                show: true,
              },
              categories: xCategories,
              tickPlacement: "on"
            },
            yaxis: {
              labels: {
                show: true,
              },
            },
            stroke: {
              curve: "smooth",
            },
          }}
          series={series}
          type="line"
          width="100%"
        />
      </div>
    </div>
  );
};

export default AudienceOverview;
