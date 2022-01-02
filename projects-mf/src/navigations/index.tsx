import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Chats from "../pages/chats/Index";
import Dashboard from "../pages/dashboard/Index";
import KanbanBoard from "../pages/kanbanBoard/Index";
import Projects from "../pages/projects/Index";
import Tasks from "../pages/tasks/Index";
import Teams from "../pages/teams/Index";

import {
  DASHBOARD_ROUTE,
  CHATS_ROUTE,
  KANBAN_ROUTES,
  PROJECTS_ROUTE,
  TASK_ROUTE,
  TEAMS_ROUTE,
} from "./constants";

const Navigations: React.FC = () => {
  return (
    <>
      <ul className="flx justify-between">
        <li className="li inline">
          <Link to={DASHBOARD_ROUTE}>Dashboard</Link>
        </li>
        <li className="li inline">
          <Link to={CHATS_ROUTE}>Chats</Link>
        </li>
        <li className="li inline">
          <Link to={KANBAN_ROUTES}>Kamban board</Link>
        </li>
        <li className="li inline">
          <Link to={PROJECTS_ROUTE}>Projects</Link>
        </li>
        <li className="li inline">
          <Link to={TASK_ROUTE}>Task</Link>
        </li>
        <li className="li inline">
          <Link to={TEAMS_ROUTE}>Teams</Link>
        </li>
      </ul>
      <Routes>
        <Route path={DASHBOARD_ROUTE} element={<Teams />} />
        <Route path={CHATS_ROUTE} element={<Chats />} />
        <Route path={KANBAN_ROUTES} element={<KanbanBoard />} />
        <Route path={PROJECTS_ROUTE} element={<Projects />} />
        <Route path={TASK_ROUTE} element={<Tasks />} />
        <Route path={TEAMS_ROUTE} element={<Teams />} />
      </Routes>
    </>
  );
};
export default Navigations;
