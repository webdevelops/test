import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
export { renderModule, renderModuleFactory } from '@angular/platform-server';

// test - 2
// git reset --soft HEAD^ - 1 from main.server

// test - 2 --- 3 --- 4 --- 5 --- 6 --- 7 --- 8 ---
