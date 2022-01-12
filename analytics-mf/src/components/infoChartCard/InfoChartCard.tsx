import * as React from "react";
import Chart from "react-apexcharts";

export type chartData = { type?: string; name?: string; data: string[] | number[] };
interface IProps {
  title: string;
  Icon: React.ReactNode;
  value: string;
  metaInfo: string;
  chartData: chartData[];
  metaInfoColor?: string;
}
const InfoChartCard: React.FC<IProps> = ({
  title,
  Icon,
  value,
  metaInfo,
  chartData,
  metaInfoColor,
}) => {
  const metaInfoBgColors: any = {
    green: "bg-[rgba(34,183,131,.15)]",
    red: "bg-[rgba(239,77,86,.15)]",
  };
  const metaInfoTextColors: any = {
    green: "text-[#22b783]",
    red: "text-[#ef4d56]",
  };

  return (
    <div className="bg-white p-3 flex flex-col shadow justify-evenly m-1">
      <div className="flex justify-between">
        {Icon}
        <div
          className={` ${
            metaInfoColor && metaInfoBgColors[metaInfoColor]
          } px-2 flex justify-center items-center `}
        >
          <p
            className={`text-sm  ${
              metaInfoColor && metaInfoTextColors[metaInfoColor]
            }`}
          >
            {" "}
            {metaInfo}{" "}
          </p>
        </div>
      </div>
      <div>
        <Chart
          options={{
            dataLabels: {
              enabled: false,
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
            tooltip: {
              followCursor: true,
            },
            grid: {
              show: false,
            },
            legend: {
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
            stroke: {
              curve: "smooth",
            },
          }}
          series={chartData}
          type="area"
          width="100%"
        />
      </div>
      <h2 className="text-[color:var(--dark-blue)] font-bold"> {value} </h2>
      <h5 className="text-[color:var(--grey)]"> {title} </h5>
    </div>
  );
};

export default InfoChartCard;
