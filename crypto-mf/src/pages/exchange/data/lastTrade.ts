import { BitCoin, Ethereum } from "../../../assets";
import { coin } from "../../../shared/interFaces";

export const sellLastTrade: coin = {
  id: 1,
  name: "ETH",
  img: Ethereum,
  value: 83994,
  percentValue: 88,
};
export const buyLastTrade: coin = {
  id: 1,
  name: "BTC",
  img: BitCoin,
  value: 9030,
  percentValue: 95,
};
