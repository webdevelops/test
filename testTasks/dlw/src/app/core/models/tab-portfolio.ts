export interface TabPortfolio {
  isActive: boolean;
  label: string;
  title: string;
  title2?: string;
  list?: { item: string };
  description: string;
  imageSrc?: string;
  icons?: string[];
}

// export interface Tab {
//   isActive: boolean;
//   label: string;
//   title: string;
//   title2?: string;
//   description: string;
//   imageSrc?: string;
// }