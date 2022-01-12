import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CurrencyCalcForm from "./CurrencyCalcForm";

describe("<CurrencyCalcForm ./>", () => {
  it("Should render the amount input fields", () => {
    const { getAllByPlaceholderText } = render(<CurrencyCalcForm />);

    const amountInput = getAllByPlaceholderText("Enter amount");
    expect(amountInput.length).toBe(2);
  });
  it("Should render the crypto input fields", () => {
    const { getAllByPlaceholderText } = render(<CurrencyCalcForm />);

    const cryptoInput = getAllByPlaceholderText("select crypto");
    expect(cryptoInput.length).toBe(2);
  });

  it("Should change the input value when the user types into the first amount input", () => {
    const { getAllByPlaceholderText } = render(<CurrencyCalcForm />);

    const amountInput = getAllByPlaceholderText(
      "Enter amount"
    )[0] as HTMLInputElement;
    fireEvent.change(amountInput, { target: { value: "123" } });
    expect(amountInput.value).toBe("123");
  });
  it("Should change the input value when the user types into the second amount input", () => {
    const { getAllByPlaceholderText } = render(<CurrencyCalcForm />);

    const amountInput = getAllByPlaceholderText(
      "Enter amount"
    )[1] as HTMLInputElement;
    fireEvent.change(amountInput, { target: { value: 123 } });
    expect(amountInput.value).toBe("123");
  });
  it("Should allow only numbers to be inputed into the first amount input", () => {
    const { getAllByPlaceholderText } = render(<CurrencyCalcForm />);

    const amountInput = getAllByPlaceholderText(
      "Enter amount"
    )[0] as HTMLInputElement;
    fireEvent.change(amountInput, { target: { value: "123" } });
    const valueType = Number(amountInput.value);
    expect(String(valueType)).not.toBe("NaN");
  });
  it("Should not allow letters to be inputed into the first amount input", () => {
    const { getAllByPlaceholderText } = render(<CurrencyCalcForm />);

    const amountInput = getAllByPlaceholderText(
      "Enter amount"
    )[0] as HTMLInputElement;
    fireEvent.change(amountInput, { target: { value: "hello word" } });
    const valueType = Number(amountInput.value);
    expect(String(valueType)).toBe("NaN");
  });

  it("Should change the input value when the user select an option", () => {
    const { getAllByPlaceholderText } = render(<CurrencyCalcForm />);

    const input = getAllByPlaceholderText(
      "select crypto"
    )[0] as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Bitcoin" } });
    
    expect(input.value).toBe("Bitcoin");
  });
});
