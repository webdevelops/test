import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { User } from 'src/app/core/models';
import * as UserActions from '../actions/user.actions';

export interface State extends EntityState<User> {
  selectedUserId: number | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
  selectedUserId: null
})

const reducer = createReducer(
  initialState,
  on(UserActions.addUser, (state, { user }) => {
    console.log('user', user);
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
  // on(UserActions.mapUser, (state, { entityMap }) => {
  //   return adapter.map(entityMap, state);                   // doc. pos. - 14
  // }),
  // on(UserActions.mapUsers, (state, { entityMap }) => {
  //   return adapter.map(entityMap, state);                   // doc. pos. - 15
  // }),
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

export const userFeatureKey = 'user';

export function userReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}

export const getSelectedUserId = (state: State) => state.selectedUserId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectUserIds = selectIds;
export const selectUserEntities = selectEntities;
export const selectAllUsers = selectAll;
export const selectUserTotal = selectTotal;
