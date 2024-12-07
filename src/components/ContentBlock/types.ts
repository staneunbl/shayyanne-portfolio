import { TFunction } from "react-i18next";

export interface ContentBlockProps {
  firsttitle: string;
  icon: string;
  icon2?: string;
  icon3?: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
