import * as React from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/outline";

interface IProps {
  Icon: any;
  title: string;
  children: any;
  isExpanded: boolean;
  toggleHandler: Function;
}
const Menu: React.FC<IProps> = ({
  Icon,
  title,
  children,
  isExpanded,
  toggleHandler,
}) => {
  const handleMenuToggle = () => {
    toggleHandler(title);
  };
  return (
    <div className="flex-col justify-evenly">
      <div
        className={`flex justify-between p-3 cursor-pointer ${
          isExpanded
            ? "bg-[rgba(204,209,224,.08)]"
            : "bg-[color:var(--dark-blue)]"
        }`}
        role="menu"
        aria-expanded={isExpanded}
        onClick={handleMenuToggle}
      >
        <div className="flex">
          {" "}
          {Icon}
          <p className="text-[color:var(--grey)] font-semibold text-sm ml-3">
            {title}
          </p>
        </div>

        {isExpanded ? (
          <ChevronDownIcon className="text-[color:var(--grey)] w-4 h-4" />
        ) : (
          <ChevronRightIcon className="text-[color:var(--grey)] w-4 h-4" />
        )}
      </div>
      {isExpanded && <ul>{children}</ul>}
    </div>
  );
};

export default Menu;
