import * as React from "react";
import { User } from "../../assets";
import "./userAvatar.scss";

interface IProps {
  avatarUrl: string;
  isOnline: boolean;
}
const UserAvatar: React.FC<IProps> = ({ avatarUrl, isOnline }) => {
  return (
    <div className="userAvatar">
      <img src={avatarUrl || User} alt="avatar" />
      <div
        className={`userAvatar__onlineStatus userAvatar__onlineStatus--${
          isOnline ? "green" : "red"
        }`}
      >
        {" "}
      </div>
    </div>
  );
};

export default UserAvatar;
