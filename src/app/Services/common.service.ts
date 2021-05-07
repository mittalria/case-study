import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private timerLimitSubject = new Subject<any>();
  private isPausedSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  getProducts() {
    let dataUrl = 'https://60939331a7e53a00179511c1.mockapi.io/products';
    return this.http.get(dataUrl);
  }

  getTimerLimit() {
    return this.timerLimitSubject.asObservable();
  }

  updateTimerLimit(limit, isPaused) {
    console.log(limit, isPaused)
    this.timerLimitSubject.next({ timerLimit: limit, isPaused: isPaused });
  }

  getPauseStatus() {
    return this.isPausedSubject.asObservable();
  }

  updateIsPausedStatus(isPaused) {
    this.isPausedSubject.next(isPaused);
  }
}
