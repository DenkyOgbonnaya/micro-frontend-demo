import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { BreadCrumb, BreadCrumbItem } from "../../components";
import { DASHBOARD_ROUTE } from "../../navigations/constants";
import { kanbanColumn } from "../../shared/types";
import kanbanColumns from "./data/kanbanColumn";
import { project } from "../teams/shared/types";
import { ProjectColumn } from "./components";

const KanbanBoard: React.FC = () => {
  const [colums, setColumns] = useState<kanbanColumn[]>(kanbanColumns);

  const getColumnProjects = (columnId: number | string): project[] => {
    const theColumn: kanbanColumn = colums.find((col) => col.id == columnId);
    return theColumn.projects;
  };
  const getProject = (
    projectId: string | number,
    columnId: string
  ): project => {
    return getColumnProjects(columnId).find(
      (project) => project.id == projectId
    );
  };

  const addProjectToColumn = (
    theProject: project,
    colTo: string,
    destIndex: number,
    colFrom: string,
    sourceIndex: number
  ) => {
    const handleUpdate = (col: kanbanColumn) => {
      if (colTo == colFrom) {
        col.projects.splice(sourceIndex, 1);
      }
      col.projects.splice(destIndex, 0, theProject);

      return col.projects;
    };
    const updatedColumns = colums.map((col) =>
      col.id == Number(colTo)
        ? Object.assign({}, col, {
            projects: handleUpdate(col),
          })
        : col
    );
  };
  const removeProjectFromColumn = (projectId: string, colFrom: string) => {
    const updatedColumns = colums.map((col) =>
      col.id == colFrom
        ? Object.assign({}, col, {
            projects: col.projects.filter((proj) => proj.id != projectId),
          })
        : col
    );
    setColumns(updatedColumns);
  };

  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    const draggedProject = getProject(draggableId, source.droppableId);
    if (!destination) return;
    if (
      destination.droppableId == source.droppableId &&
      destination.index == source.index
    )
      addProjectToColumn(
        draggedProject,
        destination.droppableId,
        destination.index,
        source.droppableId,
        source.index
      );
    if (source.droppableId != destination.droppableId)
      removeProjectFromColumn(draggableId, source.droppableId);
  };

  return (
    <main className="flex flex-col bg-[color:var(--body-bg)] h-full p-3">
      <BreadCrumb pageTitle="Kamban">
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
      <DragDropContext onDragEnd={onDragEnd}>
        <section className="flex justify-between flex-col bg-white p-4 overflow-auto sm:flex-row">
          {colums.map((col, index) => (
            <ProjectColumn
              key={col.id}
              title={col.title}
              projects={col.projects}
              index={col.id}
            />
          ))}
        </section>
      </DragDropContext>
    </main>
  );
};

export default KanbanBoard;
