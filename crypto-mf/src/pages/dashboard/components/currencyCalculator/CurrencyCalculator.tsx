import { ArrowUpIcon, RefreshIcon } from "@heroicons/react/outline";
import * as React from "react";
import { BitcoinPay } from "../../../../assets";
import {CurrencyCalcForm} from "../../../../components";
import MarketNews from "../marketNews/MarketNews";

const CurrencyCalculator: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex my-5 w-full">
        <img src={BitcoinPay} alt="" className="w-12 h-12 mr-12" />
        <div className="flex flex-col w-full">
          <div className="flex justify-between w-full">
            <button className="button p-2 bg-gray-100 hover:bg-gray-400 text-sm font-semibold text-gray-600">
              Balance
            </button>
            <div className="rounded-full p-2 bg-gray-100 hover:bg-gray-400">
              <RefreshIcon className="w-5 h-5 text-gray-600" />
            </div>
          </div>
          <div>
            <div className="flex">
              <h3 className="text-gray-600 font-bold mr-2">122.4748859.00</h3>{" "}
              <span className="text-gray-600 text-sm mt-1 font-bold">BTC</span>
            </div>
            <div className="flex">
              <ArrowUpIcon className="text-green-700 w-3 h-3 mt-1 mr-1" />
              <span className="text-green-700 text-sm">11.1%</span>
              <span className="text-gray-500 font-semibold ml-2 text-sm">
                Up from yesterday
              </span>
            </div>
          </div>
        </div>
      </div>
      <CurrencyCalcForm />
      <div>
        <MarketNews />
      </div>
    </div>
  );
};

export default CurrencyCalculator;
