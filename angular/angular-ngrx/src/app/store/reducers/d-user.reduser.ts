import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export interface User {
  id: string;
  name: string;
}

export interface State extends EntityState<User> {
  selectedUserId: number;
}

export function selectUserId(a: User) {
  return a.id;
}

export function sortByName(a: User, b: User) {
  return a.name.localeCompare(b.name);
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: selectUserId,
  sortComparer: sortByName
})