import * as React from "react";
import { Link } from "react-router-dom";
import { WorldMap } from "../../assets";
import {
  BreadCrumbItem,
  BreadCrumb,
  Card,
  CommentCard,
} from "../../components";
import LiveVisits from "./components/liveVisits/LiveVisits";
import StatCard from "./components/statCard/StatCard";
import reportsData from "./data/reportStats";

const Reports: React.FC = () => {
  return (
    <div className="flex flex-col bg-[color:var(--body-bg)] h-full">
      <BreadCrumb pageTitle="Reports">
        <BreadCrumbItem>
          <Link to={""}>
            <span className=" text-blue-600 text-xs font-semibold self-center ml-3">
              Reports
            </span>
          </Link>
        </BreadCrumbItem>
        <BreadCrumbItem>
          <span className="text-[color:var(--grey)] text-xs font-semibold self-center">
            /
          </span>
        </BreadCrumbItem>
      </BreadCrumb>
      <div className="flex justify-between mt-4 flex-col sm:flex-row">
        {reportsData.map((data) => (
          <div key={data.id} className="sm:w-[32%]">
            <StatCard stat={data} />
          </div>
        ))}
      </div>
      <div className="flex justify-between flex-col mt-4 sm:flex-row">
        <div className=" sm:w-[49%]">
          <Card title="Visitors By Country">
            <div className="relative">
              <div className="absolute right-[100px]  top-[85px]">
                <CommentCard comment="India / 145" />
              </div>
              <div className="absolute left-20 top-[30px]">
                <CommentCard comment="USA / 350" />
              </div>
              <img src={WorldMap} alt="world map" className="w-full" />
            </div>
          </Card>
        </div>
        <div className="sm:w-[49%]">
          <Card title="Live Visits / Traffic Sources">
            <div>
              <LiveVisits />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reports;
