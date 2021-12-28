import { BitCoin, DashCoin, Ethereum, LiteCoin } from "../../../assets";
import { coinRate } from "../../../shared/interFaces";

const coinData: coinRate[] = [
  {
    id: 1,
    coinName: "Bitcoin",
    coinShortName: "BTC",
    rateAmount: "50,289.45",
    coinUrl: BitCoin,
    upPercent: "88%",
    ratePercent: "2.5",
    year: "2021",
  },
  {
    id: 2,
    coinName: "Ethereum",
    coinShortName: "ETH",
    rateAmount: "30,289.45",
    coinUrl: Ethereum,
    upPercent: "56%",
    ratePercent: "2.5",
    year: "2021",
  },
  {
    id: 3,
    coinName: "Litecoin",
    coinShortName: "LTC",
    rateAmount: "23,289.45",
    coinUrl: LiteCoin,
    upPercent: "25%",
    ratePercent: "2.5",
    year: "2021",
  },
  {
    id: 4,
    coinName: "Dash",
    coinShortName: "BTC",
    rateAmount: "5,289.45",
    coinUrl: DashCoin,
    upPercent: "18%",
    ratePercent: "2.5",
    year: "2021",
  },
];

export default coinData;
