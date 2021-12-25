import * as React from "react";
import {
  CurrencyEuroIcon,
  ChartPieIcon,
  CubeTransparentIcon,
} from "@heroicons/react/outline";
import Menu from "../menu/Menu";
import MenuItem from "../menuItem/MenuItem";
import { analytics, crypto, projects } from "./sidebarMenuItems";

const SidebarMenu = () => {
  const [activeMenu, setActiveMenu] = React.useState("");
  const [activeMenuItem, setActiveMenuItem] = React.useState("");

  const isActive = (menu: string) => {
    return menu === activeMenu;
  };
  const isActiveMenuItem = (menuItem: string) => {
    return menuItem === activeMenuItem;
  };
  const handleSetActive = (menu: string) => {
    if (menu === activeMenu) {
      setActiveMenu("");
    } else setActiveMenu(menu);
  };
  const handleSetActiveMenuItem = (menuItem: string) => {
    console.log(menuItem, "ITEM");
    setActiveMenuItem(menuItem);
  };
  return (
    <div className="flex flex-col justify-evenly bg-[color:var(--dark-blue)]">
      <Menu
        Icon={<ChartPieIcon className="text-[color:var(--grey)] w-5 h-5" />}
        title="Analytics"
        isExpanded={isActive("Analytics")}
        toggleHandler={handleSetActive}
      >
        {analytics.map((item) => (
          <MenuItem
            key={item.title}
            title={item.title}
            isActive={isActiveMenuItem(item.title)}
            route={item.route}
            selectHandler={handleSetActiveMenuItem}
          />
        ))}
      </Menu>
      <Menu
        Icon={<CurrencyEuroIcon className="text-[color:var(--grey)] w-5 h-5" />}
        title="Crypto"
        isExpanded={isActive("Crypto")}
        toggleHandler={handleSetActive}
      >
        {crypto.map((item) => (
          <MenuItem
            key={item.title}
            title={item.title}
            isActive={isActiveMenuItem(item.title)}
            route={item.route}
            selectHandler={handleSetActiveMenuItem}
          />
        ))}
      </Menu>
      <Menu
        Icon={
          <CubeTransparentIcon className="text-[color:var(--grey)] w-5 h-5" />
        }
        title="Projects"
        isExpanded={isActive("Projects")}
        toggleHandler={handleSetActive}
      >
        {projects.map((item) => (
          <MenuItem
            key={item.title}
            title={item.title}
            isActive={isActiveMenuItem(item.title)}
            route={item.route}
            selectHandler={handleSetActiveMenuItem}
          />
        ))}
      </Menu>
    </div>
  );
};

export default SidebarMenu;
