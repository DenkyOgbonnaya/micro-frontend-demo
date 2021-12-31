import * as React from "react";

interface IProps {
  pageTitle: string;
  children: React.ReactNode;
}
const BreadCrumb: React.FC<IProps> = ({ children, pageTitle }) => {
  return (
    <nav className="flex justify-between p-3">
      <p className="text-[color:var(--dark-blue)] text-sm font-bold">
        {" "}
        {pageTitle}{" "}
      </p>
      <div className="flex">
        <ul className="list-none flex">{children}</ul>
        <p className="text-[color:var(--grey)] text-xs font-semibold self-center ml-3">
          {pageTitle}
        </p>
      </div>
    </nav>
  );
};

export default BreadCrumb;
