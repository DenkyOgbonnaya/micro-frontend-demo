import * as React from "react";
import { render } from "@testing-library/react";
import UserInfo, { user } from "./UserInfo";

const user: user = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  email: "jd@gmail.com",
  title: "Mr",
  profileUrl: "",
};
describe("<UserInfo />", () => {
  it("Should show the correct user title an full name", () => {
    const { getByText } = render(<UserInfo user={user} />);
    const titleAndName: string = `${user.title}. ${user.firstName} ${user.lastName}`;

    expect(getByText(titleAndName)).toBeInTheDocument();
  });
  it("Should show the correct user email", () => {
    const { getByText } = render(<UserInfo user={user} />);

    expect(getByText(user.email)).toBeInTheDocument();
  });
});
