import React from "react";
import { render } from "@testing-library/react";
import BreadCrumb from "./BreadCrumb";

describe("BreadCrumb", () => {
  test("Should show the correct page title", () => {
    const { getAllByText } = render(
      <BreadCrumb pageTitle="Analytics">
        {" "}
        <p></p>{" "}
      </BreadCrumb>
    );
    expect(getAllByText("Analytics").length).toEqual(2);
  });
});
