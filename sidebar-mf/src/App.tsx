import * as React from "react";
import "./app.scss";
import { AppLogo, UserInfo } from "./components";
import { user } from "./components/userInfo/UserInfo";

interface IState {
  user: user;
}
const App: React.FC = () => {
  const [user] = React.useState<IState["user"]>({
    id: 1,
    firstName: "Michael",
    lastName: "Hill",
    profileUrl: "",
    title: "Mr",
    email: "michael@gmail.com",
  });

  return (
    <div className="sideBar">
      <AppLogo />
      <UserInfo user={user} />
    </div>
  );
};

export default App;
