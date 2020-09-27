import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] Login',
  props<{ username: string; password: string }>()
);


// login-page.component.ts

// onSubmit(username: string, password: string) {
//   store.dispatch(login({ username: username, password: password }));
// }