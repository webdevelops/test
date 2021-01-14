// ang
import { Injectable } from '@angular/core';

// env
// import { environment } from '@app-env/environment';

@Injectable({ providedIn: 'root' })
export class AppStartService {
  async initialization(): Promise<void> {
    this._initLayoutType();

    return Promise.resolve();
  }

  private _initLayoutType(): void {
    // this.layoutService.layoutType$.subscribe(data => {
    //   this.coreStoreService.actionSetLayoutType(data);
    // });
  }
}

export function startupServiceFactory(appInitService: AppStartService) {
  return (): Promise<void> => appInitService.initialization();
}
