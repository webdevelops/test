import { IFreelancerProfile } from '@app/interfaces';

export interface IFreelancerState {
  pages: number,
  profiles: IFreelancerProfile[]
}

export const initialFreelancerState: IFreelancerState = {
  pages: 0,
  profiles: []
}