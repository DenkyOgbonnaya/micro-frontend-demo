import * as React from "react";
import { transaction } from "../../../../shared/interFaces";
import Transaction from "../transactions/Transaction";

interface Iprops {
  transactions: transaction[];
}
const TransactionHistory: React.FC<Iprops> = ({ transactions }) => {
  return (
    <div className="flex flex-col">
      {transactions.map((trans) => (
        <Transaction key={trans.id} transaction={trans} />
      ))}
    </div>
  );
};

export default TransactionHistory;
