import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  test("Should show the correct card title", () => {
    const { getByText } = render(
      <Card title="Test">
        <p></p>
      </Card>
    );
    expect(getByText("Test")).toBeInTheDocument();
  });
  test("Should render the correct card children", () => {
    const { getByText } = render(
      <Card title="Test">
        <p>This is a card child</p>
      </Card>
    );
    expect(getByText("This is a card child")).toBeInTheDocument();
  });
});
