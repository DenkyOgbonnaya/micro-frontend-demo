import {
  ChatAltIcon,
  DotsCircleHorizontalIcon,
  DotsVerticalIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { project } from "../../../teams/shared/types";

interface IProps {
  project: project;
  index: number;
}
const ProjectCard: React.FC<IProps> = ({ project, index }) => {
  return (
    <Draggable draggableId={String(project.id)} index={index}>
      {(provided) => (
        <div
          className="shadow flex flex-col bg-white rounded p-4 mb-3"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex justify-between">
            <div className="flex">
              <DotsCircleHorizontalIcon className="w-5 h-5 text-orange-500 mr-1 self-center" />
              <div className="p-1 bg-blue-50 rounded">
                <p className="text-sm text-blue-600"> {project.type} </p>
              </div>
            </div>
            <button className="p-0 w-fit h-fit border-none">
              <DotsVerticalIcon className="text-gray-300 text-sm w-5 h-5" />
            </button>
          </div>
          <h4 className="text-[color:var(--light-dark-blue)] py-3">
            {project.name}
          </h4>
          <p className="text-gray-500 text-sm">{project.desc}</p>
          <div className="divider" />
          <div className="flex justify-between pt-4 flex-wrap">
            <div className="flex text-sm text-gray-400 mr-1 self-center">
              <button className="p-0 w-fit h-fit border-none">
                <ViewListIcon className="w-5 h-5 text-gray-400 mr-1" />
              </button>

              <p className="mr-1">0/5</p>
              <button className="p-0 w-fit h-fit border-none">
                <ChatAltIcon className="w-5 h-5 text-gray-400 mr-1" />
              </button>
              <p className="mr-1"> {project.comments} </p>
            </div>
            <div className="img-group">
              {project.assignees.map((assignee, index) => (
                <img
                  key={index}
                  src={assignee}
                  alt=""
                  className="img-group__img"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default ProjectCard;
