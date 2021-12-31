import {
  ChatAltIcon,
  DotsCircleHorizontalIcon,
  DotsVerticalIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import React from "react";
import { User1, User9 } from "../../../../asset";

const ProjectCard: React.FC = () => {
  return (
    <div className="shadow-sm flex flex-col bg-white rounded p-4 mr-1">
      <div className="flex justify-between">
        <div className="flex">
          <DotsCircleHorizontalIcon className="w-5 h-5 text-orange-500 mr-1 self-center" />
          <div className="p-1 bg-blue-50 rounded">
            <p className="text-sm text-blue-600">Mobile App</p>
          </div>
        </div>
        <button className="p-0 w-fit h-fit border-none">
          <DotsVerticalIcon className="text-gray-300 text-sm w-5 h-5" />
        </button>
      </div>
      <h4 className="text-[color:var(--light-dark-blue)] py-3">
        Mobile Account
      </h4>
      <p className="text-gray-500 text-sm">
        Contratry to popular opinion, Lorem ipsum is not actually random text
      </p>
      <div className="divider" />
      <div className="flex justify-between pt-4">
        <div className="flex text-sm text-gray-400 mr-1 self-center">
          <button className="p-0 w-fit h-fit border-none">
            <ViewListIcon className="w-5 h-5 text-gray-400 mr-1" />
          </button>

          <p className="mr-1">0/5</p>
          <button className="p-0 w-fit h-fit border-none">
            <ChatAltIcon className="w-5 h-5 text-gray-400 mr-1" />
          </button>
          <p className="mr-1">3</p>
        </div>
        <div className="flex">
          <img
            src={User9}
            alt=""
            className="rounded-full h-8 w-8 mr-1 cursor-pointer"
          />
          <img
            src={User1}
            alt=""
            className="rounded-full h-8 w-8 mr-1 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
