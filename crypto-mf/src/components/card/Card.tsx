import * as React from "react";

interface IProps {
  children: React.ReactNode;
  title: string;
}

const Card: React.FC<IProps> = ({ title, children }) => {
  return (
    <div className="shadow rounded-sm bg-white w-full h-fit">
      <div className="flex justify-between p-4 border-b border-solid border-[color:var(--grey)]">
        <h4 className="text-[color:var(--dark-blue)] font-semibold">
          {" "}
          {title}{" "}
        </h4>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
};

export default Card;
