import { ArrowUpIcon } from "@heroicons/react/outline";
import * as React from "react";
import { statCardData } from "../../../../shared/types";

interface IProps {
  stat: statCardData;
}
const StatCard: React.FC<IProps> = ({ stat }) => {
  return (
    <div className="flex bg-white shadow rounded-sm  p-3 h-fit">
      <img
        src={stat.countryFlag}
        alt={stat.country}
        className="w-12  h-12 mr-3"
      />

      <div className="flex flex-col">
        <p className=" text-lg font-bold text-[color:var(--dark-bkue)]">
          {stat.value}
        </p>
        <div className="flex">
          <p className="text-sm font-bold text-[color:var(--grey)]">
            {stat.country} . Last Month
          </p>
          <span className="text-green-700 font-semibold ml-2 text-sm">
            {stat.percentValue}
          </span>
          <ArrowUpIcon className="text-green-700 w-3 h-3 inline-block self-center" />{" "}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
