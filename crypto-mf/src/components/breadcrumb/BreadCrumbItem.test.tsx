import React from "react";
import { render } from "@testing-library/react";
import BreadCrumbItem from "./BreadCrumbItem";

describe("BreadCrumbItem", () => {
  test("Should show the correct title", () => {
    const { getByText } = render(
      <BreadCrumbItem>
        <p>Dashboard</p>
      </BreadCrumbItem>
    );
    expect(getByText("Dashboard")).toBeInTheDocument();
  });
});
