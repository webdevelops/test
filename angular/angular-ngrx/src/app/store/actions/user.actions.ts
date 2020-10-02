import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { User } from 'src/app/core/models';

export const addUser = createAction('[User/Api] Add User', props<{ user: User }>());
export const addUsers = createAction('[User/Api] Add Users', props<{ users: User[] }>());
export const loadUsers = createAction('[User/Api] Load Users', props<{ users: User[] }>());
export const setUser = createAction('[User/Api] Set User', props<{ user: User }>());
export const upsertUser = createAction('[User/Api] Upsert User', props<{ user: User }>());
export const upsertUsers = createAction('[User/Api] Upsert Users', props<{ users: User[] }>());
export const updateUser = createAction('[User/Api] Update User', props<{ update: Update<User> }>());
export const updateUsers = createAction('[User/Api] Update Users', props<{ updates: Update<User>[] }>());
export const mapUser = createAction('[User/Api] Map User', props<{ entityMap: EntityMapOne<User> }>());
export const mapUsers = createAction('[User/Api] Map Users', props<{ entityMap: EntityMap<User[]> }>());
export const deleteUser = createAction('[User/Api] Delete User', props<{ id: string }>());
export const deleteUsers = createAction('[User/Api] Delete Users', props<{ ids: string[] }>());
export const deleteUserByPredicate = createAction('[User/Api] Delete User By Predicate', props<{ predicate: Predicate<User> }>());
export const clearUsers = createAction('[User/Api] Clear Users');