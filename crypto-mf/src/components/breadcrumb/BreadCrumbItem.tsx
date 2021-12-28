import * as React from "react";

interface IProps {
  children: React.ReactNode;
}
const BreadCrumbItem: React.FC<IProps> = ({ children }) => {
  return <li className="flex mx-3">{children}</li>;
};

export default BreadCrumbItem;
