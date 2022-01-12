import React from "react";
import { render } from "@testing-library/react";
import HistoricalPriceVolume from "./HistoricalPriceVolume";
import historicalPrices from "../../data/historicalPriceVolume";

describe("<TransactionHistory />", () => {
  it("Should render the correct number of price volume passes as prop", () => {
    const { getAllByTitle } = render(
      <HistoricalPriceVolume data={historicalPrices} />
    );

    expect(getAllByTitle("price-volume").length).toEqual(
      historicalPrices.length
    );
  });
});
