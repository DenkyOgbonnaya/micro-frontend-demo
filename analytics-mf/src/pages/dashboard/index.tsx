import { UsersIcon } from "@heroicons/react/outline";
import * as React from "react";
import { Link } from "react-router-dom";
import { Business } from "../../assets";
import { Card, Table } from "../../components";

import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import BreadCrumbItem from "../../components/breadcrumb/BreadCrumbItem";
import InfoChartCard from "../../components/infoChartCard/InfoChartCard";
import { DASHOARD_ROUTE } from "../../navigations/constants";
import { series } from "../../shared/types";
import { AudienceOverview, InfoCharts, SessionDevice } from "./components";
import browserReport from "./data/browserReport";

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
    <div className="flex flex-col bg-[color:var(--body-bg)] h-full">
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
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="bg-white shadow sm:w-[20%] py-6  flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="flex flex-col items-center p-3">
              <h1 className="text-[color:var(--dark-blue)] font-bold text-xl">
                Drop
              </h1>
              <h2 className="text-[color:var(--lifg-dark-blue)] font-bold text-xl">
                Multi Application
              </h2>
              <p className="text-[color:var(--grey)] font-semibold text-lg my-5">
                We design and build clean quality applications
              </p>
              <button className="bg-blue-500 text-white text-sm p-2 rounded-lg">
                Buy Now
              </button>
            </div>
            <img src={Business} alt="" className="w-full object-contain h-40" />
          </div>
          <div className="w-full">
            <InfoChartCard
              title="User Index"
              value="2400"
              Icon={
                <UsersIcon className="w-7 h-7 text-[color:var(--dark-blue)]" />
              }
              metaInfo=""
              chartData={sessionsSeries2}
              metaInfoColor=""
            />
          </div>
        </div>
        <div className="sm:w-[78%] max-h-fit">
          <InfoCharts />
          <Card title="Audience Overview">
            <AudienceOverview series={audienceData} xCategories={categories} />
          </Card>
        </div>
      </div>
      <div className="flex justify-between my-4 flex-col sm:flex-row">
        <div className="sm:w-[58%]">
          <Card title="Browser Used & Traffic Reports">
            <Table>
              <thead>
                <tr>
                  <th className="th">Browser</th>
                  <th className="th">Sessions</th>
                  <th className="th">Bounce Rate</th>
                  <th className="th">Transactions</th>
                </tr>
              </thead>
              <tbody>
                {browserReport.map((report) => (
                  <tr key={report.id} title="browser-report">
                    <td>
                      <img
                        src={report.browserUrl}
                        alt={report.browser}
                        className="mr-3 inline-block w-5 h-5"
                      />
                      <span className="td">{report.browser}</span>
                    </td>
                    <td className="td">{report.sessions}</td>
                    <td className="td">{report.bounceRate}</td>
                    <td className="td">{report.transactions}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </div>
        <div className="sm:w-[40%] h-full">
          <Card title="Sessions Device">
            <SessionDevice
              series={sessionDeviceData.data}
              colors={sessionDeviceData.colors}
              labels={sessionDeviceData.labels}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};
const audeinceSeries: series[] = [
  {
    name: "series 1",
    type: "column",
    data: [300, 120, 190, 120, 250, 160, 140, 305, 113, 201, 120],
    color: "rgba(239,77,86,.15)", //"#b7bdcc",
  },
  {
    name: "series 2",
    type: "line",
    data: [142, 135, 227, 103, 122, 216, 230, 142, 135, 227, 103],
    color: "rgba(34,183,131,.15)",
  },
];
const sessionDeviceData = {
  labels: ["Mobile", "Tablet", "Desktop"],
  data: [50, 30, 20],
  colors: ["#667cbe", "#b8bfd3", "#c2cae2"],
};
const sessionsSeries2 = [
  {
    name: "Series",
    data: [10, 5, 10, 5, 15, 10, 8, 5, 10, 20, 10],
    color: "rgba(239,77,86,.15)",
  },
];
export default Dashboard;
