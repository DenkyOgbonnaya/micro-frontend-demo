import React from "react";
import { Link } from "react-router-dom";
import { BreadCrumb, BreadCrumbItem } from "../../components";
import { DASHBOARD_ROUTE } from "../../navigations/constants";
import TeamCard from "./components/teamCard/TeamCard";
import { teams } from "./data/teamData";

const Chats: React.FC = () => {
  return (
    <main className="flex flex-col bg-[color:var(--body-bg)] h-full p-3">
      <BreadCrumb pageTitle="Teams">
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
      <div className="flex justify-between p-3">
        <p className="text-[color:var(--light-dark-blue)]">
          Here is the list of available teams{" "}
          <span
            role="banner"
            className="p-1 w-2 h-1 bg-red-200 text-red-700 rounded"
          >
            6
          </span>{" "}
        </p>

        <button className="button bg-blue-700 text-sm text-white">
          Create Card
        </button>
      </div>
      <section className="my-4 flex flex-wrap">
        {teams.map((team) => (
          <div className="w-[100%] sm:w-[32%] mb-1" key={team.id}>
            <TeamCard team={team} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Chats;
