import * as React from "react";
import {
  UsersIcon,
  ClockIcon,
  TrendingUpIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";
import InfoChartCard from "../../../../components/infoChartCard/InfoChartCard";

const InfoCharts = () => {
  const sessionsSeries = [
    {
      name: "Series",
      data: [10, 5, 10, 5, 15, 10, 8, 5, 10, 20, 10],
      color: "rgba(34,183,131,.15)",
    },
  ];
  const sessionsSeries2 = [
    {
      name: "Series",
      data: [10, 5, 10, 5, 15, 10, 8, 5, 10, 20, 10],
      color: "rgba(239,77,86,.15)",
    },
  ];
  return (
    <>
      <div className="flex justify-between px-3">
        <div className="w-[15%]">
          <InfoChartCard
            title="Sessions"
            value="2400"
            Icon={
              <UsersIcon className="w-7 h-7 text-[color:var(--dark-blue)]" />
            }
            metaInfo=""
            chartData={sessionsSeries2}
            metaInfoColor=""
          />
        </div>
        <div className="w-[15%]">
          <InfoChartCard
            title="Avg.Sessions"
            value="00:18"
            Icon={
              <ClockIcon className="w-7 h-7 text-[color:var(--dark-blue)]" />
            }
            metaInfo="Active"
            chartData={sessionsSeries}
            metaInfoColor="green"
          />
        </div>
        <div className="w-[15%]">
          <InfoChartCard
            title="Bounce Rate"
            value="$2400"
            Icon={
              <TrendingUpIcon className="w-7 h-7 text-[color:var(--dark-blue)]" />
            }
            metaInfo=""
            chartData={sessionsSeries2}
            metaInfoColor=""
          />
        </div>
        <div className="w-[15%]">
          <InfoChartCard
            title="Goal Completion"
            value="8500"
            Icon={
              <CheckCircleIcon className="w-7 h-7 text-[color:var(--dark-blue)]" />
            }
            metaInfo="-2%"
            chartData={sessionsSeries}
            metaInfoColor="red"
          />
        </div>
      </div>
    </>
  );
};

export default InfoCharts;
