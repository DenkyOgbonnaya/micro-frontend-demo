import * as React from "react";
import { render } from "@testing-library/react";
import Menu from "./Menu";

describe("<Menu />", () => {
  it("Should show the correct menu title", () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <Menu
        Icon={<p></p>}
        isExpanded={false}
        title="Test"
        toggleHandler={mockFn}
      >
        {" "}
        <li></li>{" "}
      </Menu>
    );

    expect(getByText("Test")).toBeInTheDocument();
  });
  it("Should show the menu items when expanded", () => {
    const mockFn = jest.fn();
    const { getByRole } = render(
      <Menu
        Icon={<p></p>}
        isExpanded={true}
        title="Test"
        toggleHandler={mockFn}
      >
        {" "}
        <li></li>{" "}
      </Menu>
    );

    expect(getByRole("list")).toBeInTheDocument();
  });
  it("Should hide the menu items when not expanded", () => {
    const mockFn = jest.fn();
    const { queryByRole } = render(
      <Menu
        Icon={<p></p>}
        isExpanded={false}
        title="Test"
        toggleHandler={mockFn}
      >
        {" "}
        <li></li>{" "}
      </Menu>
    );

    expect(queryByRole("list")).not.toBeInTheDocument();
  });
  it("Should have a light grey bg when expanded", () => {
    const mockFn = jest.fn();
    const { queryByRole } = render(
      <Menu
        Icon={<p></p>}
        isExpanded={true}
        title="Test"
        toggleHandler={mockFn}
      >
        {" "}
        <li></li>{" "}
      </Menu>
    );

    expect(
      queryByRole("menu").classList.contains("bg-[rgba(204,209,224,.08)]")
    ).toBeTruthy();
  });

  it("Should not have a light grey bg when not expanded", () => {
    const mockFn = jest.fn();
    const { queryByRole } = render(
      <Menu
        Icon={<p></p>}
        isExpanded={false}
        title="Test"
        toggleHandler={mockFn}
      >
        {" "}
        <li></li>{" "}
      </Menu>
    );

    expect(
      queryByRole("menu").classList.contains("bg-[rgba(204,209,224,.08)")
    ).not.toBeTruthy();
  });
});
