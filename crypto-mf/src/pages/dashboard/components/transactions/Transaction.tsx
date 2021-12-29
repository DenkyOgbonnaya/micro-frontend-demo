import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline";
import * as React from "react";
import { transaction } from "../../../../shared/interFaces";

interface IProps {
  transaction: transaction;
}
const Transaction: React.FC<IProps> = ({ transaction }) => {
  const isInflowTrans = () => {
    return transaction.type !== "sent";
  };
  return (
    <div className="flex px-3 bg-white border-b border-gray-200 py-6">
      <div className="bg-[rgba(85,126,248,.08)] p-2 rounded-full group hover:bg-[#557ef8] mr-3 flex justify-center items-center">
        {isInflowTrans() ? (
          <ArrowDownIcon className=" text-[#557ef8] w-5 h-5 group-hover:text-white  font-bold" />
        ) : (
          <ArrowUpIcon className=" text-[#557ef8] w-5 h-5 group-hover:text-white  font-bold" />
        )}
      </div>
      <div className="flex flex-col mr-3">
        <h3 className="text-[color:var(--light-dark-blue)] font-semibold text-sm">
          {isInflowTrans() ? "Recieved" : "Sent"} BTC
        </h3>
        <p className="text-[color:var(--grey)] text-sm"> {transaction.date} </p>
      </div>
      <h4 className={`${isInflowTrans() ? "text-green-700" : "text-rose-700"}`}>
        {" "}
        {transaction.amount}{" "}
      </h4>
    </div>
  );
};

export default Transaction;
