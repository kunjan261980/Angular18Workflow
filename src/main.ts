import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { pageDataLoaderInterceptor } from './app/interceptors/page-data-loader.interceptor';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
