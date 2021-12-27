import * as React from "react";
import { render } from "@testing-library/react";
import StatCard from "./StatCard";
import { statCardData } from "../../../../shared/types";

describe("<StatCard />", () => {
  const stat: statCardData = {
    id: 1,
    country: "USA",
    countryFlag: "",
    value: "200",
    percentValue: "50%",
  };

  it("Should show the correct value", () => {
    const { getByText } = render(<StatCard stat={stat} />);

    expect(getByText(stat.value).textContent).toBe(stat.value);
  });
  it("Should show the correct country name ", () => {
    const { getByText } = render(<StatCard stat={stat} />);

    const searchText = `${stat.country} . Last Month`;
    expect(getByText(searchText).textContent).toBe(searchText);
  });
  it("Should show the correct percentage value", () => {
    const { getByText } = render(<StatCard stat={stat} />);

    expect(getByText(stat.percentValue).textContent).toBe(stat.percentValue);
  });
});
