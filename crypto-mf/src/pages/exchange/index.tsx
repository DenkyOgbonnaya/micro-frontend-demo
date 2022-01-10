import * as React from "react";
import { Link } from "react-router-dom";
import {
  TotalBalance,
  BreadCrumb,
  BreadCrumbItem,
  Card,
} from "../../components";
import { DASHBOARD_ROUTE } from "../../navigations/constants";
import { CoinMarket, DefaultExample } from "./components";
import CoinForm from "./components/coinForm/CoinForm";
import LiveTrading from "./components/liveTrading/LiveTrading";
import LiveTradingList from "./components/liveTradingList/LiveTradingList";
import { buyLastTrade, sellLastTrade } from "./data/lastTrade";

const Exchange: React.FC = () => {
  return (
    <div className="flex flex-col bg-[color:var(--body-bg)] h-full p-6 w-full">
      <BreadCrumb pageTitle="Crypto">
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
      <TotalBalance balance={122.4678499474994} />
      <section className="flex justify-between flex-col sm:flex-row">
        <div className="w-full sm:w-[70%]">
          <Card title="Default Example">
            <DefaultExample />
          </Card>
        </div>
        <div className="w-full sm:w-[29%]">
          <Card title="Coin Market">
            <CoinMarket />
          </Card>
        </div>
      </section>
      <section className="flex flex-col py-3 sm:flex-row flex-wrap w-full">
        <div className="w-full flex justify-between flex-col sm:w-[100%] sm:flex-row flex-wrap">
          <div className="w-full sm:w-[49%]">
            <Card title="Buy Coin">
              <CoinForm isSell={false} lastTrade={buyLastTrade} />
            </Card>
          </div>
          <div className="w-full sm:w-[49%]">
            <Card title="Sell Coin">
              <CoinForm isSell={true} lastTrade={sellLastTrade} />
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full">
        <Card title="Live Trading">
          <LiveTrading />
        </Card>
      </section>
    </div>
  );
};

export default Exchange;
