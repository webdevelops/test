import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
});

// test-1
// git reset --soft HEAD^
// git reset --soft HEAD^ - 2
// git reset --soft HEAD^ - 3
// git reset --soft HEAD^ - 4
// git reset --soft HEAD^ - 4.5
// git reset --soft HEAD^ - 5
// git reset --soft HEAD^ - 6