export type series = {
  type?: string;
  name?: string;
  data: string[] | number[];
  color: string;
};
export type statCardData = {
  id: string | number;
  country: string;
  value: string | number;
  countryFlag: string;
  percentValue: string;
};
