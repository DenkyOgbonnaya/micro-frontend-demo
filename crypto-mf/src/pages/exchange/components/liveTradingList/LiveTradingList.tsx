import React from "react";
import { trade } from "../../../../shared/interFaces";

interface IProps {
  trades: trade[];
  isInflow: boolean;
}
const LiveTradingList: React.FC<IProps> = ({ trades, isInflow }) => {
  return (
    <table className="w-full">
      <thead className="bg-gray-50">
        <tr>
          <th className="th">Price(USD)</th>
          <th className="th">Amount(BTC)</th>
          <th className="th">Total(USD)</th>
        </tr>
      </thead>
      <tbody className={`${isInflow ? "bg-green-200" : "bg-red-200"}`}>
        {trades.map((trade) => (
          <tr key={trade.id}>
            <td
              className={`td ${isInflow ? "text-green-700" : "text-red-700"}`}
            >
              {trade.price}
            </td>
            <td className="td">{trade.amount}</td>
            <td className="td">{trade.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LiveTradingList;
