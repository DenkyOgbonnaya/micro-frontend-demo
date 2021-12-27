import { GermanyFlag, SpainFlag, UsaFlag } from "../../../assets";
import { statCardData } from "../../../shared/types";

const reportsData: statCardData[] = [
  {
    id: 1,
    country: "USA",
    countryFlag: UsaFlag,
    value: "50,466",
    percentValue: "2.5%",
  },
  {
    id: 2,
    country: "Germany",
    countryFlag: GermanyFlag,
    value: "50,466",
    percentValue: "1.5%",
  },
  {
    id: 1,
    country: "Spain",
    countryFlag: SpainFlag,
    value: "50,466",
    percentValue: "0.5%",
  },
];
export default reportsData;
