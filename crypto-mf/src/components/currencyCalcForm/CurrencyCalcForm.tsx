import * as React from "react";

const CurrencyCalcForm: React.FC = () => {
  return (
    <form className="my-10 p-3 flex flex-col">
      <div className="flex justify-between">
        <input
          name="btcAmount"
          placeholder="Enter amount"
          className="input w-[49%]"
        />
        <select
          name="crypto"
          className="input bg-white w-[49%]"
          placeholder="select crypto"
        >
          <option value="Bitcoin">Bitcoin(BTC)</option>
          <option value="Bitcoin">Ethereum</option>
        </select>
      </div>

      <div className="flex justify-between mt-3">
        <input
          name="fiatAmount"
          placeholder="Enter amount"
          className="input w-[49%]"
        />
        <select
          name="fiat"
          className="input bg-white w-[49%]"
          placeholder="select crypto"
        >
          <option value="Bitcoin">US Dollar(USA)</option>
          <option value="Bitcoin">Naira</option>
        </select>
      </div>
    </form>
  );
};

export default CurrencyCalcForm;
