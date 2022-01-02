import * as React from "react";
import { render } from "@testing-library/react";
import UserAvatar from "./UserAvatar";

describe("<UserAvatar />", () => {
  it("Should render user avatar", () => {
    const { getByRole } = render(<UserAvatar avatarUrl="" isOnline={true} />);

    expect(getByRole("img")).toBeInTheDocument();
  });
  it("Should have an assistive alt", () => {
    const { getByAltText } = render(
      <UserAvatar avatarUrl="" isOnline={true} />
    );

    expect(getByAltText("avatar")).toBeInTheDocument();
  });
  it("Should have a class of bg-green-700 when user is online", () => {
    const { getByRole } = render(<UserAvatar avatarUrl="" isOnline={true} />);

    expect(
      getByRole("status").classList.contains("bg-green-700")
    ).toBeTruthy();
  });
  it("Should have a class of bg-red-700 when user is offline", () => {
    const { getByRole } = render(<UserAvatar avatarUrl="" isOnline={false} />);

    expect(
      getByRole("status").classList.contains("bg-red-700")
    ).toBeTruthy();
  });
});
