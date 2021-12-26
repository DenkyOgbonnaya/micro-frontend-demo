import * as React from "react";
import { Link } from "react-router-dom";

import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import BreadCrumbItem from "../../components/breadcrumb/BreadCrumbItem";
import { DASHOARD_ROUTE } from "../../navigations/constants";
import { series } from "../../shared/types";
import { AudienceOverview, InfoCharts } from "./components";

interface IState {
  audienceData: series[];
}
const Dashboard: React.FC = () => {
  const [audienceData] = React.useState<IState["audienceData"]>(audeinceSeries);
  const [categories] = React.useState([
    "Mon",
    "Tues",
    "Weds",
    "Thurs",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tues",
    "Weds",
    "Thurs",
  ]);
  return (
    <div className="flex flex-col bg-[color:var(--body-bg)] h-[100vh]">
      <BreadCrumb pageTitle="Analytics">
        <BreadCrumbItem>
          <Link to={DASHOARD_ROUTE}>
            <span className=" text-blue-600 text-xs font-semibold self-center ml-3">
              Dashboard
            </span>
          </Link>
        </BreadCrumbItem>
        <BreadCrumbItem>
          <span className="text-[color:var(--grey)] text-xs font-semibold self-center">
            /
          </span>
        </BreadCrumbItem>
      </BreadCrumb>
      <InfoCharts />
      <AudienceOverview series={audienceData} xCategories={categories} />
    </div>
  );
};
const audeinceSeries: series[] = [
  {
    name: "series 1",
    type:"column",
    data: [300, 120, 190, 120, 250, 160, 140, 305, 113, 201, 120],
    color: "#8d93a1",
  },
  {
    name: "series 2",
    type: "line",
    data: [142, 135, 227, 103, 122, 216, 230, 142, 135, 227, 103],
    color: "#435177",
  },
];
export default Dashboard;
