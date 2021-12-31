import React, { ReactNode } from "react";
import { statData } from "../../../../shared/types";

interface IProps {
  data: statData;
  TitleIcon: ReactNode;
  SubTitleIcon: ReactNode;
}
const StatCard: React.FC<IProps> = ({ data, TitleIcon, SubTitleIcon }) => {
  return (
    <div className="shadow-sm bg-white p-3 flex flex-col my-3">
      <h4 className="text-[color:var(--light-dark-blue)] text-lg font-semibold">
        {data.title}
      </h4>
      <p className="text-[color:var(--light-dark-blue)] text-lg font-semibold py-3">
        {data.titleValue}
      </p>
      <div className="flex py-3">
        {SubTitleIcon}

        <p className="text-[color:var(--grey)] text-sm">
          {data.subTitleValue} {data.subTitle}{" "}
        </p>
      </div>
      <div className="flex justify-center items-center p-3 bg-gray-100 self-center rounded-full">
        {TitleIcon}
      </div>
    </div>
  );
};

export default StatCard;
