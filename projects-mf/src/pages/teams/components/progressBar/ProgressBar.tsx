import React from "react";

interface IProps {
  progressPercent: number;
  bgColor: string;
}
const ProgressBar: React.FC<IProps> = ({
  progressPercent = 50,
  bgColor = "#212121",
}) => {
  return (
    <div className="w-full flex flex-col">
      <p className="text-sm text-gray-400 self-end">
        {" "}
        {progressPercent}% complete{" "}
      </p>
      <div className="w-full bg-gray-200 h-[0.15rem]">
        <div className={`rounded w-[${progressPercent}%] ${bgColor} h-[0.15rem]`} />
      </div>
    </div>
  );
};

export default ProgressBar;
