import React from "react";
import { coin } from "../../../../shared/interFaces";

interface IProps {
  coins: coin[];
}
const CoinsList: React.FC<IProps> = ({ coins }) => {
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
    <div>
      <table className="w-full">
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id}>
              <td className="td flex">
                <img src={coin.img} alt="" className="mr-3 w-5 h-5" />{" "}
                <span className="self-center"> {coin.name} </span>
              </td>
              <td className="td">{coin.value}</td>
              <td className="td">{getChange(coin.percentValue)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CoinsList;
