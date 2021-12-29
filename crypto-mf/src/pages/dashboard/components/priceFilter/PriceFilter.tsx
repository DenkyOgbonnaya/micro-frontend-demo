import * as React from "react";

const PriceFilter: React.FC = () => {
  const [active, setActive] = React.useState("Order Book");
  const fiterItems: string[] = ["Hour", "Day", "Week", "Month", "Order Book"];

  const handleSelect = (value: string) => {
    setActive(value);
  };
  const isActive = (value: string) => {
    return value === active;
  };
  return (
    <ul className=" bg-gray-200 p-3 rounded w-full h-fit flex justify-between">
      {fiterItems.map((item) => (
        <li
          key={item}
          className="text-sm font-semibold text-[color:var(--dark-blue)] inline mr-3"
        >
          <span
            className={`cursor-pointer ${isActive(item) && "text-blue-400"} `}
            onClick={() => handleSelect(item)}
            role="button"
            aria-current={isActive ? "true" : "false"}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PriceFilter;
