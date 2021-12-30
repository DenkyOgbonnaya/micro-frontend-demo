export interface coinRate {
  id: number | string;
  coinName: string;
  coinShortName: string;
  coinUrl: string;
  year: string | number;
  rateAmount: string | number;
  upPercent: string | number;
  ratePercent: string | number;
}

export interface transaction {
  id: number | string;
  type: "sent" | "recieved";
  date: string;
  amount: number | string;
}

export interface historicalPriceVolume {
  id: string | number;
  date: string;
  price: string | number;
  volume: string;
  change: number;
}

export interface coin {
  id: string | number;
  name: string;
  img: string;
  value: string | number;
  percentValue: number;
}
export interface trade {
  id: number | string;
  price: number;
  amount: number;
  total: number;
}
