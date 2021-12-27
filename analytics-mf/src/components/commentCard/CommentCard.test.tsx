import * as React from "react";
import { render } from "@testing-library/react";
import CommentCard from "./CommentCard";

describe("CommentCard />", () => {
  it("Should the correct comment passed", () => {
    const { getByText } = render(<CommentCard comment="Hello World" />);

    expect(getByText("Hello World").textContent).toBe("Hello World");
  });
});
