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
    <ul className="ul">
      {fiterItems.map((item) => (
        <li key={item} className="li">
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
