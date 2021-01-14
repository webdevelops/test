export interface IFreelancerProfile {
  availability: IAvailability;
  city: string;
  country: string;
  imageUrl: string;
  name: string;
  path: string;
  postalCode: string;
  tags: Array<string>;
  title: string;
}

interface IAvailability {
  type: string;
  notAvailableBefore: string;
}
