import * as React from "react";
import { createMemoryHistory } from "history";

interface IProps {
  title: string;
  isActive: boolean;
  route: string;
  selectHandler: Function;
}
const MenuItem: React.FC<IProps> = ({
  title,
  isActive,
  route,
  selectHandler,
}) => {
  const history = createMemoryHistory();

  const handleRouteing = () => {
    selectHandler(title);
    //history.push(route);
  };
  return (
    <li
      className={`flex text-[color:var(--grey)] font-semibold text-sm ml-3 p-3 cursor-pointer ${
        isActive
          ? "bg-[rgba(204,209,224,.08)]"
          : "bg-[color:var(--dark-blue)]"}
      }`}
      role="menuitem"
      onClick={handleRouteing}
    >
      <div
        className={`rounded-full w-1 h-1 self-center ${
          isActive
            ? "bg-blue-900"
            : "bg-[color:var(--dark-blue)] border border-[color:var(--grey)] border-solid"
        } `}
        
      ></div>
      <span className="text-[color:var(--grey)] font-semibold text-sm ml-4">
        {" "}
        {title}{" "}
      </span>
    </li>
  );
};

export default MenuItem;
