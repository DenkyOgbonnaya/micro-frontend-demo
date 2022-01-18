import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { ANALYTICS_ROUTES, CRYPTO_ROUTES, PROJECTS_ROUTES } from "./constants";
const Analytics = React.lazy(() => import("../components/analytics/Analytics"));
const Projects = React.lazy(() => import("../components/projects/Projects"));
const Crypto = React.lazy(() => import("../components/crypto/Crypto"));

const Navigations: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ANALYTICS_ROUTES} element={<Analytics />} />
        <Route path={PROJECTS_ROUTES} element={<Projects />} />
        <Route path={CRYPTO_ROUTES} element={<Crypto />} />
      </Routes>
    </React.Suspense>
  );
};
export default Navigations;
