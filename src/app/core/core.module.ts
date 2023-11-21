import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/services/auth.interceptor';
import { HTTPListener } from '../shared/services/loading-interceptor';

const RxJS_Services = [HTTPListener];
@NgModule({
  declarations: [],
  imports: [LayoutModule, SharedModule],
  providers: [
    ...RxJS_Services,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
