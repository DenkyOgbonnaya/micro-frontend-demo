import { DownloadIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import * as React from "react";
import { BitCoin } from "../../assets";

interface Iprops {
  balance: string | number;
}
const TotalBalance: React.FC<Iprops> = ({ balance }) => {
  return (
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
          <h2>{balance} BTC</h2>
        </div>
      </div>
    </div>
  );
};

export default TotalBalance;
