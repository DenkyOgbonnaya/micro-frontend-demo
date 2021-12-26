import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Customers from "../pages/customers";
import Dashboard from "../pages/dashboard";
import Reports from "../pages/reports";
import { DASHOARD_ROUTE, CUSTOMERS_ROUTE, REPORTS_ROUTE } from "./constants";

const Navigations: React.FC = () => {
  return (
    <Routes>
      <Route path={DASHOARD_ROUTE} element={<Dashboard />} />
      <Route path={CUSTOMERS_ROUTE} element={<Customers />} />
      <Route path={REPORTS_ROUTE} element={<Reports />} />
    </Routes>
  );
};
export default Navigations;
