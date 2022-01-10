import {
  BadgeCheckIcon,
  CalendarIcon,
  ClipboardCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import { BreadCrumbItem, BreadCrumb, Card } from "../../components";
import { DASHBOARD_ROUTE } from "../../navigations/constants";
import {
  ProjectCard,
  ProjectsOverview,
  ProjectTrack,
  StatCard,
  TaskPerformance,
} from "./components";
import { budgetData, projextsData, taskData } from "./data/statsData";

const Dashboard: React.FC = () => {
  return (
    <main className="flex flex-col bg-[color:var(--body-bg)] h-full p-3">
      <BreadCrumb pageTitle="Projects">
        <BreadCrumbItem>
          <Link to={DASHBOARD_ROUTE}>
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
      <section className="flex justify-between flex-col sm:flex-row w-full py-2">
        <div className="w-[100%] sm:w-[20%]">
          <StatCard
            data={projextsData}
            TitleIcon={
              <ShieldCheckIcon className="mr-1 text-[color:var(--grey)] w-10 h-10" />
            }
            SubTitleIcon={
              <BadgeCheckIcon className="mr-1 text-green-400 w-5 h-5" />
            }
          />
          <StatCard
            data={taskData}
            TitleIcon={
              <ClipboardCheckIcon className="mr-1 text-[color:var(--grey)] w-10 h-10" />
            }
            SubTitleIcon={<ClockIcon className="mr-1 text-green-400 w-5 h-5" />}
          />
          <StatCard
            data={budgetData}
            TitleIcon={
              <CurrencyDollarIcon className="mr-1 text-[color:var(--grey)] w-10 h-10" />
            }
            SubTitleIcon={<p className="text-sm mr-1">$14k</p>}
          />
        </div>
        <div className="w-[100%] sm:w-[53%]">
          <Card title="Overview">
            <ProjectsOverview />
          </Card>
        </div>
        <div className="w-[100%] sm:w-[22%]">
          <Card title="Task Perfomance">
            <TaskPerformance />
            <div className="p-2 bg-blue-100 flex justify-between group hover:bg-blue-600 my-4">
              <CalendarIcon className="w-5 h5 text-blue-700 group-hover:text-white" />
              <p className="text-blue-700 group-hover:text-white text-sm">
                01 January 2021 to 31 June 2021
              </p>
            </div>
          </Card>
        </div>
      </section>
      <section className="flex justify-between flex-col sm:flex-row">
        <ProjectTrack
          data={{ title: "BackLog", issues: 5, points: 20 }}
          color="border-red-400"
        />
        <ProjectTrack
          data={{ title: "Todo", issues: 5, points: 20 }}
          color="border-yellow-400"
        />
        <ProjectTrack
          data={{ title: "In Prohress", issues: 5, points: 20 }}
          color="border-green-400"
        />
        <ProjectTrack
          data={{ title: "Testing", issues: 5, points: 20 }}
          color="border-blue-400"
        />
        <ProjectTrack
          data={{ title: "Done", issues: 5, points: 20 }}
          color="border-red-400"
        />
      </section>
      <section className="flex flex-col justify-between my-3 sm:flex-row">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </main>
  );
};

export default Dashboard;
