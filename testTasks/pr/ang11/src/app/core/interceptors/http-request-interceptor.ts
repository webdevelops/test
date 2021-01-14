// Angular
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

// Libs
import { Observable } from 'rxjs';

import { environment } from '@app-env/environment';

import { INTERSEPTOR_KEYS } from '@app-core/types/interseptor-keys.type';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    let { params } = request;

    // console.info(`Intercepted httpCall ${request.url}`);
    // console.info(request.params.keys());

    if (request.params.has(INTERSEPTOR_KEYS.WITHOUT_DEFAULT_API)) {
      params = params.delete(INTERSEPTOR_KEYS.WITHOUT_DEFAULT_API);

      request = request.clone({
        params,
      });

      return next.handle(request);
    }

    return next.handle(
      request.clone({
        url: `${environment.api}${request.url}`,
        params,
      }),
    );
  }
}
