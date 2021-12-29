import * as React from "react";

const MarketNews: React.FC = () => {
  return (
    <div
      className="shadow-sm  bg-[#ffecd9] p-3 flex justify-between"
      role="banner"
    >
      <div className="w-[89%]">
        <p className="text-sm text-[#995f28]">
          The global crypto market cap is $2.48T, a 2.02% increase over the last
          day.
        </p>
        <button className="text-sm ext-amber-600 font-semibold text-amber-800 border-none">Read More</button>
      </div>
      <button className="border-none text-gray-400 font-semibold relative -top-5 text-sm">X</button>
    </div>
  );
};

export default MarketNews;
