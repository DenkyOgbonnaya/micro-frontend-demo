import React from "react";
import { BitCoin, LiteCoin } from "../../../../assets";
import { coin } from "../../../../shared/interFaces";

interface IProps {
  isSell: boolean;
  lastTrade: coin;
}
const CoinForm: React.FC<IProps> = ({ isSell, lastTrade }) => {
  return (
    <form>
      <div className="flex justify-between py-4">
        <div className="bg-gray-200 p-2 w-[33%] flex justify-center items-center">
          <label className="text-sm text-[color:var(--dark-grey)] w-[32%]">
            Amount
          </label>
        </div>
        <input
          name="amount"
          className="border border-solid border-gray-200 w-[33%] outline-none"
        />
        <div className="bg-gray-200 p-2 w-[33%] flex justify-center items-center">
          <label className="text-sm text-[color:var(--dark-grey)]">BTC</label>
        </div>
      </div>

      <div className="flex justify-between py-4">
        <select
          name="amount"
          className="border border-solid border-gray-200 w-[33%] bg-white outline-none"
        >
          <option value="last trade price">Last trade price</option>
          <option value="last buy price">Last buy price</option>
          <option value="last sell price">Last sell price</option>
        </select>
        <input
          name="amount"
          className="border border-solid border-gray-200 w-[33%] outline-none"
        />
        <div className="bg-gray-200 p-2 w-[33%] flex justify-center items-center">
          <label className="text-sm text-[color:var(--dark-grey)]">
            $ Dollor
          </label>
        </div>
      </div>
      <div className="flex justify-between py-4">
        <div className="bg-gray-200 p-2 w-[33%] flex justify-center items-center">
          <label className="text-sm text-[color:var(--dark-grey)] w-[32%]">
            Total
          </label>
        </div>
        <input
          name="amount"
          className="border border-solid border-gray-200 w-[33%]"
        />
        <div className="bg-gray-200 p-2 w-[33%] flex justify-center items-center">
          <label className="text-sm text-[color:var(--dark-grey)]">
            $ Dollor
          </label>
        </div>
      </div>

      <button
        className={`button py-2 ${
          isSell ? "bg-red-700" : "bg-green-700"
        } text-white`}
      >
        Buy Coin
      </button>
      <div className="border-b border-dashed py-3"></div>
      <div>
        <h3 className="font-semibold text-[color:var(--light-dark-blue)] py-3">
          Last Trade
        </h3>
        <div className="flex justify-between">
          <div className="flex">
            <img
              src={lastTrade.img}
              alt="bitcoin"
              className=" w-[35px] h-[35px] mr-3 self-center"
            />
            <div className="flex flex-col">
              <p className="text-[color:var(--grey)] font-semibold text-sm">
                {lastTrade.name}
              </p>
              <p className="text-gray-500">${lastTrade.value}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p
              className={`font-semibold text-sm ${
                isSell ? "text-red-700" : "text-green-700"
              }`}
            >
              0.95842536
            </p>
            <p className="text-gray-500">{lastTrade.percentValue}</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CoinForm;
