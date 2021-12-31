import React, { useState, useCallback } from "react";
import * as TabsTab from "./Tab";

type ITabChild = {
  props: {
    label: string;
    tabName: string;
  };
};

interface IProps {
  children: ITabChild[];
}

const Tabs: React.FC<IProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const handleActiveTab = useCallback((label) => setActiveTab(label), []);

  const tabs = children.map(
    (child): JSX.Element => (
      <button
        onClick={(e) => {
          e.preventDefault();
          handleActiveTab(child.props.label);
        }}
        className={`tabs__tab
        ${
          child.props.label === activeTab &&
          "border-blue-700 text-blue-700 border-b border-solid"
        }
        `}
        key={child.props.label}
      >
        {child.props.tabName}
      </button>
    )
  );
  const tabContent = children.filter(
    (child) => child.props.label === activeTab
  );
  return (
    <div>
      <div className="flex justify-between w-[60%]">{tabs}</div>
      <div>{tabContent}</div>
    </div>
  );
};
export const Tab = TabsTab;
export default Tabs;
