import React from "react";
import { Tabs, Tab } from "../../../../components";
import { btcList, dollorList, ethList } from "../../data/coinListData";
import CoinsList from "../coinList/CoinList";

const CoinMarket = () => {
  return (
    <div>
      <Tabs>
        <Tab label="Dollor" tabName="Dollor">
          <CoinsList coins={dollorList} />
        </Tab>
        <Tab label="BTC" tabName="BTC">
          <CoinsList coins={btcList} />
        </Tab>
        <Tab label="ETH" tabName="ETH">
          <CoinsList coins={ethList} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default CoinMarket;
