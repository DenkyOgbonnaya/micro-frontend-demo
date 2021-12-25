import * as React from "react";
import { AppLogo, UserInfo } from "./components";
import SidebarMenu from "./components/sidebarMenu/SidebarMenu";
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
    <div className="bg-[color:var(--dark-blue)] h-[100vh]">
      <div className="fixed top-0 right-0 left-0">
        <AppLogo />
        <UserInfo user={user} />
      </div>

      <div className="mt-40 pt-3">
        <SidebarMenu />
      </div>
    </div>
  );
};

export default App;
