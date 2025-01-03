import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  private requestCount = 0;

  showLoader() {
    this.requestCount++;
    this.loadingSubject.next(true); // Show loader
  }

  hideLoader() {
    this.requestCount--;
    if (this.requestCount === 0) {
      this.loadingSubject.next(false); // Hide loader
    }
  }
}
