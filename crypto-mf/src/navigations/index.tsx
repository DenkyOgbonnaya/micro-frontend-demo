import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Wallet from "../pages/wallet";
import Dashboard from "../pages/dashboard";
import { DASHBOARD_ROUTE, WALLET_ROUTE, EXCHANGE_ROUTE } from "./constants";
import Exchange from "../pages/exchange";

const Navigations: React.FC = () => {
  return (
    <>
      <ul className="flx justify-between">
        <li className="li inline">
          <Link to={DASHBOARD_ROUTE}>Dashboard</Link>
        </li>
        <li className="li inline">
          <Link to={EXCHANGE_ROUTE}>Exchange</Link>
        </li>
        <li className="li inline">
          <Link to={WALLET_ROUTE}>Wallet</Link>
        </li>
      </ul>
      <Routes>
        <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
        <Route path={WALLET_ROUTE} element={<Wallet />} />
        <Route path={EXCHANGE_ROUTE} element={<Exchange />} />
      </Routes>
    </>
  );
};
export default Navigations;
