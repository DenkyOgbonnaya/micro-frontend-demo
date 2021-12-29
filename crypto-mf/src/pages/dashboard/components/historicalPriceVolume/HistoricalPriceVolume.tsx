import * as React from "react";
import { historicalPriceVolume } from "../../../../shared/interFaces";

interface IProps {
  data: historicalPriceVolume[];
}
const HistoricalPriceVolume: React.FC<IProps> = ({ data }) => {
  const isPositiveChange = (change: number) => {
    return change >= 0.5;
  };
  const getChange = (change: number): JSX.Element => {
    return (
      <span
        className={`${
          isPositiveChange(change) ? "text-green-700" : "text-red-700"
        }`}
      >
        {isPositiveChange(change) ? "+" : "-"}
        {change}%
      </span>
    );
  };
  return (
    <table className="w-full">
      <thead className="bg-gray-50">
        <tr>
          <th className="th">Date</th>
          <th className="th">Price</th>
          <th className="th">Volume</th>
          <th className="th">Change</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="td">{item.date}</td>
            <td className="td">{item.price}</td>
            <td className="td">{item.volume}</td>
            <td className="td">{getChange(item.change)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HistoricalPriceVolume;
