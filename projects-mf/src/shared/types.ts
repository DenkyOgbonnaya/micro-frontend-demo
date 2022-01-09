import { ReactNode } from "react";

export interface statData {
  title: string;
  titleValue: number | string;
  subTitle: string;
  subTitleValue: number | string;
}
export interface project {
  id: number | string;
  name: string;
  type: string;
  desc?: string;
  assignees: string[];
  comments?: number;
}
export interface kanbanColumn {
  id: string | number;
  title: string;
  projects: project[];
}
