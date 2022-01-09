import React from "react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import ProjectsList from "../projectsList/ProjectList";
import { project } from "../../../../shared/types";

interface IProps {
  title: string;
  index: number | string;
  projects: project[];
}
const ProjectColumn: React.FC<IProps> = ({ title, index, projects }) => {
  return (
    <div className="flex flex-col bg-gray-100 p-3 mr-2 sm:min-w-[19%]">
      <div className="flex justify-between py-3">
        <h4 className="text-[color:var(--ligth-dark-blue)]"> {title} </h4>
        <button className="p-0 w-fit h-fit border-none">
          <DotsVerticalIcon className="text-gray-300 text-sm w-5 h-5" />
        </button>
      </div>
      <ProjectsList projects={projects} index={index} />
    </div>
  );
};

export default ProjectColumn;
