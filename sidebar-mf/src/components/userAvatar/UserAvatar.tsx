import * as React from "react";
import { User } from "../../assets";
//import "./userAvatar.scss";

interface IProps {
  avatarUrl: string;
  isOnline: boolean;
}
const UserAvatar: React.FC<IProps> = ({ avatarUrl, isOnline=false }) => {
  return (
    <div className="relative w-13">
      <img src={avatarUrl || User} alt="avatar" className="rounded-full w-12 h-12" />
      <div
        className={`absolute w-3 h-3 rounded-full top-2 -right-0.5 ${
          isOnline ? "bg-green-700" : "bg-red-700"
        }`}
      >
        {""}
      </div>
    </div>
  );
};

export default UserAvatar;
