import * as React from "react";
import UserAvatar from "../userAvatar/UserAvatar";
import "./userInfo.scss";

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
    <div className="userInfo">
      <UserAvatar avatarUrl="" isOnline={true} />
      <div className="userInfo__details">
        <p>
          {user.title}. {user.firstName} {user.lastName}{" "}
        </p>
        <p> {user.email} </p>
      </div>
    </div>
  );
};

export default UserInfo;
