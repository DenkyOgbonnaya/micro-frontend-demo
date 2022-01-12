import { ArrowUpIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import * as React from "react";
import { coinRate } from "../../shared/interFaces";

interface IProps {
  coinData: coinRate;
}
const CoinRate: React.FC<IProps> = ({ coinData }) => {
  return (
    <div className="flex-col flex shadow-sm bg-white p-4 h-fit w-full mb-1">
      <div className="rounded-full p-1 bg-gray-300 w-fit h-fit">
        <img
          src={coinData.coinUrl}
          alt={coinData.coinName}
          className="w-10 h-10"
        />
      </div>
      <h1 className="font-semibold text-lg my-3"> {coinData.coinName} </h1>
      <p className="text-[color:var(--grey)] font-semibold text-sm">
        {coinData.coinName} went up {coinData.upPercent} in {coinData.year}{" "}
        despite turbulent markets{" "}
      </p>
      <div className="border-b border-dashed border-[color:var(--grey)] my-3"></div>
      <h1 className="font-semibold text-lg my-1"> ${coinData.rateAmount} </h1>
      <div className="flex justify-between">
        <div className="flex">
          <p className="text-[color:var(--grey)] font-semibold text-sm">
            {coinData.coinName} ({coinData.coinShortName})
          </p>
          <span className="text-green-700 font-semibold ml-2 text-sm">
            {coinData.ratePercent}
          </span>
          <ArrowUpIcon className="text-green-700 w-3 h-3 mt-1" />
        </div>
        <button
          title="buy-btn"
          className="button text-white bg-green-600 group-hover:text-white text-sm self-start ml-3 justify-self-end relative -top-7 "
        >
          <ShoppingCartIcon className="text-white w-4 h-4  self-center" /> Buy
        </button>
      </div>
    </div>
  );
};

export default CoinRate;
