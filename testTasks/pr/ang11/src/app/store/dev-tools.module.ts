import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '@app-env/environment';

export const storeDevToolsModule = environment.production
  ? []
  : StoreDevtoolsModule.instrument();
