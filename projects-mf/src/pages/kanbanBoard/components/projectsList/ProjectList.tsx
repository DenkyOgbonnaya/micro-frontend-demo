import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { project } from "../../../teams/shared/types";
import ProjectCard from "../projectCard/ProjectCard";

interface IProps {
  projects: project[];
  index: number | string;
}
const ProjectList: React.FC<IProps> = ({ projects, index }) => {
  return (
    <>
      <Droppable droppableId={String(index)}>
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {projects.map((project, index) => (
              <ProjectCard project={project} index={index} />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </>
  );
};
export default ProjectList;
