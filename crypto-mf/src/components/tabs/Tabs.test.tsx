import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tabs from "./Tabs";
import Tab from "./Tab";

describe("<Tabs />", () => {
  it("it should show the correct first tab", () => {
    const {  getByText } = render(
      <Tabs>
        <Tab label="test1" tabName="Test1">
          <p>Hello</p>
        </Tab>
        <Tab label="test2" tabName="Test2">
          <p>World</p>
        </Tab>
      </Tabs>
    );

    expect(getByText("Test1")).toBeInTheDocument();
  });
  it("it should show the correct second tab", () => {
    const {  getByText } = render(
      <Tabs>
        <Tab label="test1" tabName="Test1">
          <p>Hello</p>
        </Tab>
        <Tab label="test2" tabName="Test2">
          <p>World</p>
        </Tab>
      </Tabs>
    );

    expect(getByText("Test2")).toBeInTheDocument();
  });
  it("it should render the first tab content by default", () => {
    const { getAllByRole, getByText } = render(
      <Tabs>
        <Tab label="test1" tabName="Test1">
          <p>Hello</p>
        </Tab>
        <Tab label="test2" tabName="Test2">
          <p>World</p>
        </Tab>
      </Tabs>
    );

    expect(getByText("Hello")).toBeInTheDocument();
  });
  it("it should not render the second tab content when not clicked", () => {
    const { getAllByRole, getByText, queryByText } = render(
      <Tabs>
        <Tab label="test1" tabName="Test1">
          <p>Hello</p>
        </Tab>
        <Tab label="test2" tabName="Test2">
          <p>World</p>
        </Tab>
      </Tabs>
    );

    expect(queryByText("World")).not.toBeInTheDocument();
  });
  it("it should render the second tab content when clicked", () => {
    const { getAllByRole, getByText } = render(
      <Tabs>
        <Tab label="test1" tabName="Test1">
          <p>Hello</p>
        </Tab>
        <Tab label="test2" tabName="Test2">
          <p>World</p>
        </Tab>
      </Tabs>
    );
    const secondTab = getAllByRole("button")[1];
    fireEvent.click(secondTab);

    expect(getByText("World")).toBeInTheDocument();
  });
});
