import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { AppConfig } from 'src/app/config/app.config';
import { LoaderService } from './loader.service';
interface ApiParam {
  data?: any;
  params?: any;
}
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private loaderService: LoaderService
  ) {}

  /**
   * @description a single request method to perform any api operation
   * it's fully depends on the ApiConfig file.
   * @param name
   * @param param
   */

  request(name: string, param?: ApiParam): Observable<any> {
    const endpoint = AppConfig.api.endpoints.find(
      (_endpoint) => _endpoint.name === name
    );
    if (!endpoint) {
      throw new Error('Endpoint with this name not found');
    }

    const apiUrl = this.buildApiUrl(endpoint, param);
    const httpMethod = endpoint.method;
    const httpRequest = {};
    httpRequest['body'] = param != null ? param['data'] : '';
    httpRequest['header'] =
      param && param['data'] instanceof FormData
        ? {}
        : { 'content-type': 'application/json' };
    this.loaderService.setLoaderDisplay(true);
    return this.httpClient.request(httpMethod, apiUrl, httpRequest).pipe(
      catchError(this.handleError('apiCall', [])),
      finalize(() => {
        this.loaderService.setLoaderDisplay(false);
      })
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.loaderService.setLoaderDisplay(false);
      if (error.status === 401) {
        this.router.navigate(['app/account/login']);
      } else if (error.status === 422) {
        return throwError(error.error);
      } else if (error.error instanceof ErrorEvent) {
        console.error('An error occurred', error.error.massage);
      }
      return throwError(error);
    };
  }

  /**
   * @description a single request method to perform any api operation
   * it's fully depends on the ApiConfig file.
   * @param endpoint
   * @param param
   */

  private buildApiUrl(endpoint, param?: ApiParam): string {
    let url = endpoint.url;
    if (param) {
      for (const key in param.params) {
        if (param.params.hasOwnProperty(key)) {
          const value = param.params[key];
          url = url.replace('[' + key + ']', value);
        }
      }
    }
    return url;
  }
}
