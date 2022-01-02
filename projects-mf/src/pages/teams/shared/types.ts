export interface teamData {
  id?: number | string;
  user: {
    firstName: string;
    lastName: string;
    role: string;
    imgUrl?: string;
    id?: string | number;
  };
  team: string;
  teamDesc?: string;
  teamColor:string;
  project: string;
  projectImg: string;
}
