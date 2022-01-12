import React from "react";
import { render } from "@testing-library/react";
import CoinRate from "./CoinRate";
import { coinRate } from "../../shared/interFaces";

let coinrate: coinRate;
describe("CoinRate", () => {
  beforeEach(() => {
    coinrate = {
      id: 1,
      coinName: "Bitcoin",
      coinShortName: "BTC",
      rateAmount: "50,289.45",
      coinUrl: "",
      upPercent: "88%",
      ratePercent: "2.5",
      year: "2021",
    };
  });

  test("Should show the correct coin name", () => {
    const { getByText } = render(<CoinRate coinData={coinrate} />);
    expect(getByText(coinrate.coinName)).toBeInTheDocument();
  });

  test("Should show the correct coin short name", () => {
    const { getByText } = render(<CoinRate coinData={coinrate} />);
    expect(
      getByText(`${coinrate.coinName} (${coinrate.coinShortName})`)
    ).toBeInTheDocument();
  });
  test("Should show the coin logo", () => {
    const { getByAltText } = render(<CoinRate coinData={coinrate} />);
    expect(getByAltText(coinrate.coinName)).toBeInTheDocument();
  });
  test("Should show the correct coin rate amount", () => {
    const { getByText } = render(<CoinRate coinData={coinrate} />);
    expect(getByText(`$${coinrate.rateAmount}`)).toBeInTheDocument();
  });
  test("Should show render the button to buy coin", () => {
    const { getByTitle } = render(<CoinRate coinData={coinrate} />);
    expect(getByTitle("buy-btn")).toBeInTheDocument();
  });
});
