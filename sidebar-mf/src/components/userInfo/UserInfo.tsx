import * as React from "react";
import UserAvatar from "../userAvatar/UserAvatar";
//import "./userInfo.scss";

export type user = {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  profileUrl: string;
  email: string;
};

interface IProps {
  user: user;
}
const UserInfo: React.FC<IProps> = ({ user }) => {
  return (
    <div className="flex p-7 bg-[color:var(--dark-blue)]">
      <UserAvatar avatarUrl="" isOnline={false} />
      <div className="self-center ml-2">
        <p className="text-[#ccd1e0] font-bold">
          {user.title}. {user.firstName} {user.lastName}{" "}
        </p>
        <p className="text-[#ccd1e0] font-semibold text-xs opacity-50">
          {" "}
          {user.email}{" "}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
