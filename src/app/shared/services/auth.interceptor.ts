import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string = JSON.parse(localStorage.getItem('tokan') || '{}');
    if (token) {
      const cloned = req.clone({
        headers: req.headers
          .set('Authorization', 'Bearer' + token)
          .set('Cache-Control', 'no-cache')
          .set('Pragma', 'no-cache')
          .set('Expires', 'Thu, 01 Jan 1970 00:00:00 GMT')
          .set('If-Modified-Since', '0'),
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
