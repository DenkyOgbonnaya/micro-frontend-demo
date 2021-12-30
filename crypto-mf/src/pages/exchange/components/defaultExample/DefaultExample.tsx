import * as React from "react";
import Chart from "react-apexcharts";
import { CurrencyCalcForm } from "../../../../components";

const DefaultExample = () => {
  return (
    <div className="flex justify-between bg-white">
      <div className="w-[30%]">
        <Chart
          type="donut"
          series={[50, 25, 25]}
          options={{
            chart: {
              zoom: {
                enabled: false,
              },
              toolbar: {
                show: false,
              },
            },

            labels: ["Binance", "Kraken", "Bittrex"],
            legend: {
              show: true,
              position: "bottom",
            },
            colors: ["#0b51b7", "#7baffd", "#c3d8f8"],
          }}
        />
      </div>
      <div className="w-[69%]">
        <div className="flex justify-between">
          <div className="bg-white py-2 shadow px-4">
            <p className="text-lg text-[color:var(--light-dark-blue)] font-semibold pb-3">
              $32450
            </p>
            <p className="text-sm text-[color:var(--grey)] font-semibold">
              BINANCE
            </p>
          </div>
          <div className="bg-white py-2 shadow px-4">
            <p className="text-lg text-[color:var(--light-dark-blue)] font-semibold pb-3">
              $22450
            </p>
            <p className="text-sm text-[color:var(--grey)] font-semibold">
              KRAKEN
            </p>
          </div>
          <div className="bg-white py-2 shadow px-4">
            <p className="text-lg text-[color:var(--light-dark-blue)] font-semibold pb-3">
              $12450
            </p>
            <p className="text-sm text-[color:var(--grey)] font-semibold">
              BITTREX
            </p>
          </div>
        </div>
        <CurrencyCalcForm />
      </div>
    </div>
  );
};

export default DefaultExample;
