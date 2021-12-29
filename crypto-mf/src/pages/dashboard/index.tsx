import * as React from "react";
import { Link } from "react-router-dom";
import { DownloadIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import BreadCrumbItem from "../../components/breadcrumb/BreadCrumbItem";
import { DASHBOARD_ROUTE } from "../../navigations/constants";
import { BitCoin } from "../../assets";
import coinData from "./data/coinData";
import transactions from "./data/transactions";
import CoinRate from "../../components/coinRate/CoinRate";
import {
  CurrencyCalculator,
  HistoricalPriceVolume,
  PriceChart,
  PriceFilter,
  TransactionHistory,
} from "./components";
import { Card } from "../../components";
import priceVolume from "./data/historicalPriceVolume";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col bg-[color:var(--body-bg)] h-full">
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
      <div className="flex justify-between p-3">
        <div className="flex">
          <button className="button text-red-800 hover:bg-red-500 mr-3 text-sm group-hover:text-white group">
            <PaperAirplaneIcon className="text-red-600 w-4 h-4 mr-1 self-center group-hover:text-white" />{" "}
            <span className="group-hover:text-white">Send</span>
          </button>
          <button className="button text-green-800 hover:bg-green-500 group-hover:text-white text-sm group">
            <DownloadIcon className="text-green-600 w-4 h-4 mr-1 self-center group-hover:text-white" />{" "}
            <span className="group-hover:text-white">Request</span>
          </button>
        </div>
        <div className="flex">
          <img
            src={BitCoin}
            alt="bitcoin"
            className=" w-[35px] h-[35px] mr-3 self-center"
          />
          <div className="flex flex-col">
            <p className="text-[color:var(--grey)] font-semibold">
              Total Balance
            </p>
            <h2>122.46784994749940 BTC</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-3">
        {coinData.map((coin) => (
          <div className="w-[24%]" key={coin.id}>
            <CoinRate coinData={coin} />
          </div>
        ))}
      </div>
      <div className="flex justify-between  mt-3">
        <div className="bg-white w-[70%] p-4">
          <div className="flex justify-between">
            <div className="flex flex-col w-[40%]">
              <div
                className="bg-gray-200 p-3 flex hover:bg-gray-500 w-fit group"
                role="banner"
              >
                <p className="font-bold text-gray-500 mr-2 group-hover:text-white">
                  Last:
                </p>{" "}
                <span className="text-gray-400 group-hover:text-white">
                  0.25436584
                </span>
              </div>
              <div
                className="bg-green-200 p-3 flex hover:bg-green-500 w-fit group"
                role="banner"
              >
                <p className="font-bold text-green-500 mr-2 group-hover:text-white">
                  Last:
                </p>{" "}
                <span className="text-green-400 group-hover:text-white">
                  0.25436584
                </span>
              </div>
              <div
                className="bg-red-200 p-3 flex hover:bg-red-500 w-fit group"
                role="banner"
              >
                <p className="font-bold text-red-500 mr-2 group-hover:text-white">
                  Last:
                </p>{" "}
                <span className="text-red-400 group-hover:text-white">
                  0.25436584
                </span>
              </div>
            </div>

            <div className="w-[60%]">
              <PriceFilter />
            </div>
          </div>
          <PriceChart />
        </div>
        <div className="w-[29%]">
          <Card title="Currency Calculator">
            <CurrencyCalculator />
          </Card>
        </div>
      </div>
      <div className=" mt-3 flex justify-between">
        <div className="w-[30%]">
          <Card title="Transaction History">
            <TransactionHistory transactions={transactions} />
          </Card>
        </div>
        <div className="w-[69%]">
          <Card title="Historical Bitcoin Price And Volume">
            <HistoricalPriceVolume data={priceVolume} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
