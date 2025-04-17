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
  id: string;
  direction: "left" | "right";
}
