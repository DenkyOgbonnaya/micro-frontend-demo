import React from "react";
export type trackData = {
  title: string;
  issues: number;
  points: number;
};
interface IProps {
  data: trackData;
  color: string;
}
const ProjectTrack: React.FC<IProps> = ({ data, color }) => {
  return (
    <div className="flex flex-col w-full mr-1 group">
      <div className="flex justify-between">
        <h4 className="uppercase text-sm text-[color:var(--light-dark-blue)] py-1 font-semibold">
          {data.title}
        </h4>
        <button className=" flex justify-center items-center w-8 h-7 rounded border-none bg-[color:var(--body-bg)] p-1 self-center hover:bg-blue-500 group-hover:bg-blue-500">
          <span className="text-[color:var(--body-bg)] group-hover:text-white text-sm font-semibold">
            +
          </span>
        </button>
      </div>

      <div className="flex">
        <p className="text-sm text-[color:var(--light-dark-blue)] font-semibold mr-1">
          {data.issues} Issues -
        </p>
        <p className="text-sm text-[color:var(--grey)] font-semibold">
          {data.points} Ponts
        </p>
      </div>
      <div className={`border-b-2 border-solid ${color}`}></div>
    </div>
  );
};

export default ProjectTrack;
