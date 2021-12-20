import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", async () => {
  render(<App />);
  const linkElement =  screen.findAllByRole("heading");
  expect((await linkElement).length).toBe(2);
});
