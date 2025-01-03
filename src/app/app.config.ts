import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi} from '@angular/common/http'

import { routes } from './app.routes';
import { pageDataLoaderInterceptor } from './interceptors/page-data-loader.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [ provideHttpClient(withFetch(),
    withInterceptors([pageDataLoaderInterceptor])),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
