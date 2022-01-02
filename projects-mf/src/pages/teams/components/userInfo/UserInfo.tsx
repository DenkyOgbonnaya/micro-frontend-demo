import * as React from "react";
import UserAvatar from "../userAvatar/UserAvatar";
//import "./userInfo.scss";

export type user = {
  firstName: string;
  lastName: string;
  role: string;
  imgUrl?: string;
};

interface IProps {
  user: user;
}
const UserInfo: React.FC<IProps> = ({ user }) => {
  return (
    <div className="flex p-3">
      <UserAvatar avatarUrl={user.imgUrl} isOnline={true} />
      <div className="self-center ml-2">
        <p className="text-[color:var(--dark-blue)] font-bold">
          {user.firstName} {user.lastName}{" "}
        </p>
        <p className="text-[color:var(--dark-blue)] font-semibold text-xs opacity-50">
          {" "}
          {user.role}{" "}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
