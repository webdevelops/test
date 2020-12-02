export interface Tab {
  isActive: boolean;
  label: string;
  title: string;
  title2?: string;
  list?: Links[] | string[];
  description: string;
  description2?: string;
  imageSrc?: string;
  icons?: string[];
}

export class Links {
  label: string;
  link: string;
}
