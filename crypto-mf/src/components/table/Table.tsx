import * as React from "react";

interface IProps {
  children: React.ReactNode;
}
const Table: React.FC<IProps> = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">{children}</table>
    </div>
  );
};

export default Table;
