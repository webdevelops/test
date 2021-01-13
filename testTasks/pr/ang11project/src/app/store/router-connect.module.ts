// router state
import { StoreRouterConnectingModule } from '@ngrx/router-store';

export const storeRouterConnectingModule = StoreRouterConnectingModule.forRoot({
  stateKey: 'router',
});
