import React from "react";
import { inflowTrades, outflowTrades } from "../../data/trades";
import LiveTradingList from "../liveTradingList/LiveTradingList";

const LiveTrading: React.FC = () => {
  return (
    <div className="flex-col flex justify-between sm:flex-row">
      <LiveTradingList trades={inflowTrades} isInflow={true} />
      <LiveTradingList trades={outflowTrades} isInflow={false} />
    </div>
  );
};

export default LiveTrading;
