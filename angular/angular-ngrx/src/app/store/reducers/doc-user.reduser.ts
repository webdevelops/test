import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { User } from 'src/app/core/models';
import * as UserActions from '../actions/doc-user.actions';

// export function selectUserId(a: User) {
//   return a.id;
// }

// export function sortByName(a: User, b: User) {
//   return a.name.localeCompare(b.name);
// }

// export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
//   selectId: selectUserId,
//   sortComparer: sortByName
// })

export interface State extends EntityState<User> {
  selectedUserId: number | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
  selectedUserId: null
})

const userReducer = createReducer(
  initialState,
  on(UserActions.addUser, (state, { user }) => {
    return adapter.addOne(user, state);
  }),
  on(UserActions.addUsers, (state, { users }) => {
    return adapter.addMany(users, state);
  }),
  on(UserActions.setUser, (state, { user }) => {
    return adapter.setOne(user, state);
  }),
  on(UserActions.upsertUser, (state, { user }) => {
    return adapter.upsertOne(user, state);
  }),
  on(UserActions.upsertUsers, (state, { users }) => {
    return adapter.upsertMany(users, state);
  }),
  on(UserActions.updateUser, (state, { update }) => {
    return adapter.updateOne(update, state);
  }),
  on(UserActions.updateUsers, (state, { updates }) => {
    return adapter.updateMany(updates, state);
  }),
  on(UserActions.mapUser, (state, { entityMap }) => {
    return adapter.map(entityMap, state);                   // doc. pos. - 14
  }),
  on(UserActions.mapUsers, (state, { entityMap }) => {
    return adapter.map(entityMap, state);                   // doc. pos. - 15
  }),
  on(UserActions.deleteUser, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(UserActions.deleteUsers, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(UserActions.deleteUserByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),
  on(UserActions.loadUsers, (state, { users }) => {
    return adapter.setAll(users, state);
  }),
  on(UserActions.clearUsers, state => {
    return adapter.removeAll({ ...state, selectedUserId: null });  // удаляем только users
  })
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}