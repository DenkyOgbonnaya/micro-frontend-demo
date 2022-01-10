import React from "react";
import { inflowTrades, outflowTrades } from "../../data/trades";
import LiveTradingList from "../liveTradingList/LiveTradingList";

const LiveTrading: React.FC = () => {
  return (
    <div className="flex-col flex justify-between sm:flex-row flex-wrap">
      <div className="sm:w-[49%]">
        <LiveTradingList trades={inflowTrades} isInflow={true} />
      </div>
      <div className="sm:w-[49%]">
        <LiveTradingList trades={inflowTrades} isInflow={false} />
      </div>
    </div>
  );
};

export default LiveTrading;
