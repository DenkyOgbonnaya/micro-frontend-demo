import * as React from "react";
import { render } from "@testing-library/react";
import AppLogo from "./AppLogo";

describe("<AppLogo />", () => {
  it("Should show the correct company name", () => {
    const { getByText } = render(<AppLogo />);
    const companyName = getByText("DROP");

    expect(companyName).toBeInTheDocument();
  });
  it("Should render the app logo", () => {
    const { getByRole } = render(<AppLogo />);
    const logo = getByRole("img");

    expect(logo).toBeInTheDocument();
  });
  it("Should have an assistive alt ", () => {
    const { getByAltText } = render(<AppLogo />);
    const logo = getByAltText("logo");

    expect(logo).toBeInTheDocument();
  });
});
