import React from "react";
import { render } from "@testing-library/react";
import TransactionHistory from "./TransactionHistory";
import transactions from "../../data/transactions";

describe("<TransactionHistory />", () => {
  it("Should render the correct number of transactions passes as prop", () => {
    const { getAllByTitle } = render(
      <TransactionHistory transactions={transactions} />
    );

    expect(getAllByTitle("transaction").length).toEqual(transactions.length);
  });
});
