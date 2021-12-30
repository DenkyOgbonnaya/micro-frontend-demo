import React from "react";

export interface ITabProbs {
  children: React.ReactNode;
  label: string;
  tabName: string;
}
const Tab: React.FC<ITabProbs> = ({ children }) => {
  return <>{children}</>;
};

export default Tab;
