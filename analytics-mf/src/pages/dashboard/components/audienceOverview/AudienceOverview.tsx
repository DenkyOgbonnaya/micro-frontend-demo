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
            bar: {
              columnWidth: "20",
            },
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
            tickPlacement: "on",
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
  );
};

export default AudienceOverview;
