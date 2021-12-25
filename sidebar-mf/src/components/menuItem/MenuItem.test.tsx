import * as React from "react";
import { render } from "@testing-library/react";
import MenuItem from "./MenuItem";

describe("<MenuItem />", () => {
  it("Should show the correct menu title", () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <MenuItem isActive={false} title="Test" selectHandler={mockFn} route="" />
    );

    expect(getByText("Test")).toBeInTheDocument();
  });

  it("Should have a light grey bg when active", () => {
    const mockFn = jest.fn();
    const { queryByRole } = render(
      <MenuItem isActive={true} title="Test" selectHandler={mockFn} route="" />
    );

    expect(
      queryByRole("menuitem").classList.contains("bg-[rgba(204,209,224,.08)]")
    ).toBeTruthy();
  });

  it("Should not have a light grey bg when not active", () => {
    const mockFn = jest.fn();
    const { queryByRole } = render(
      <MenuItem isActive={false} title="Test" selectHandler={mockFn} route="" />
    );

    expect(
      queryByRole("menuitem").classList.contains("bg-[rgba(204,209,224,.08)")
    ).not.toBeTruthy();
  });
});
