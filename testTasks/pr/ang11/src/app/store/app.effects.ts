// libs
import { EffectsModule } from '@ngrx/effects';

// app
import { CoreCurrentUserEffects } from '../core/store/current-user/current-user.effects';
import { CoreMainEffects } from '../core/store/main/main.effects';

export const coreEffectsModule = EffectsModule.forRoot([
  CoreMainEffects,
  CoreCurrentUserEffects,
]);
