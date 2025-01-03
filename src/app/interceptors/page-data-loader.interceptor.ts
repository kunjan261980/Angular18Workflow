import { HttpEvent, HttpHandler, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { inject } from '@angular/core';
import { catchError, finalize, map, Observable } from 'rxjs';

// export const pageDataLoaderInterceptor: HttpInterceptorFn = (req:HttpRequest<any>, next:any): Observable<HttpEvent<any>>  => {
//   const loadingService = inject(LoadingService)
//    loadingService.showLoader(); 

//    return next.handle(req)
//    .pipe(catchError((err) => {
//      loadingService.hideLoader();
//      return err;
//    }))
//    .pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
//      if (evt instanceof HttpResponse) {
//       loadingService.hideLoader();
//      }
//      return evt;
//    }));
 
// };


export const pageDataLoaderInterceptor: HttpInterceptorFn = (req, next,) => {
  const loadingService = inject(LoadingService)
  loadingService.showLoader(); // Show spinner

  return next(req).pipe(
      finalize(() => {
        loadingService.hideLoader(); // Hide spinner
      })
  );
};