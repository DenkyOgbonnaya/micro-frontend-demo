import { kanbanColumn } from "../../../shared/types";
import projects from "./projectsData";

const kanbanColumns: kanbanColumn[] = [
  {
    id: 1,
    title: "New Project",
    projects: projects.slice(0, 6),
  },
  {
    id: 2,
    title: "To Do",
    projects: projects.slice(6, 11),
  },
  {
    id: 3,
    title: "In Progress",
    projects: projects.slice(11, 16),
  },
  {
    id: 4,
    title: "Code Review",
    projects: projects.slice(16, 21),
  },
  {
    id: 5,
    title: "Done",
    projects: projects.slice(21, 23),
  },
];

export default kanbanColumns;
