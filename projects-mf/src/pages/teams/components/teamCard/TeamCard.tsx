import {
  ArrowRightIcon,
  ChatAltIcon,
  DotsCircleHorizontalIcon,
  DotsVerticalIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import React from "react";
import ProgressBar from "../progressBar/ProgressBar";
import { User1, User2, User4, User5, User9 } from "../../../../asset";
import { teamData } from "../../shared/types";
import UserInfo from "../userInfo/UserInfo";

interface IProps {
  team: teamData;
}

const TeamCard: React.FC<IProps> = ({ team }) => {
  return (
    <div className="shadow-sm flex flex-col bg-white rounded p-4 mr-1">
      <div className="flex justify-between">
        <div className="flex">
          <UserInfo user={team.user} />
        </div>
        <button className="p-0 w-fit h-fit border-none">
          <DotsVerticalIcon className="text-gray-300 text-sm w-5 h-5" />
        </button>
      </div>
      <h4 className="text-[color:var(--light-dark-blue)] py-2">{team.team}</h4>
      <p className="text-gray-500 text-sm">{team.teamDesc}</p>

      <div className="flex justify-between my-4">
        <div className="img-group">
          <img src={User2} alt="" className="w-8 h-8 rounded-full hover:z-20" />
          <img src={User9} alt="" className="img-group__img" />
          <img src={User5} alt="" className="img-group__img" />
          <img src={User4} alt="" className="img-group__img" />
          <div className="bg-[#c0f3f8] rounded-full flex justify-center items-center group hover:bg-[#41cbd8] ml-2 w-8 h-8 cursor-pointer">
            <span className="text-[#41cbd8] text-sm font-semibold group-hover:text-white">
              +6
            </span>
          </div>
        </div>

        <button className=" bg-gray-100 p-1 text-slate-900 text-[0.75rem] rounded-lg flex">
          <span className="self-center">View Details</span>
          <ArrowRightIcon className="w-2 h2 ml-1 self-center" />
        </button>
      </div>
      <div className="divider" />
      <div className="flex justify-between pt-4">
        <div className="flex text-sm text-gray-400 mr-1 self-center">
          <img
            src={team.projectImg}
            alt=""
            className="rounded-full h-8 w-8 mr-1 cursor-pointer"
          />
          <div className="self-center flex">
            <button className="p-0 w-fit h-fit border-none">
              <ViewListIcon className="w-5 h-5 text-gray-400 mr-1" />
            </button>

            <p className="mr-1">0/5</p>
            <button className="p-0 w-fit h-fit border-none">
              <ChatAltIcon className="w-5 h-5 text-gray-400 mr-1" />
            </button>
            <p className="mr-1">3</p>
          </div>
        </div>
      </div>
      <div className="relative -top-5 ms">
        <ProgressBar progressPercent={50} bgColor={team.teamColor} />
      </div>
    </div>
  );
};

export default TeamCard;
