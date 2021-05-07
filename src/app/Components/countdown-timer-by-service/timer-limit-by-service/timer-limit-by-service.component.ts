import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-timer-limit-by-service',
  templateUrl: './timer-limit-by-service.component.html',
  styleUrls: ['./timer-limit-by-service.component.scss']
})
export class TimerLimitByServiceComponent implements OnInit, OnDestroy {
  timerLimit: number;
  pausedList: any;
  isPaused = false;
  timerLimitSubscription: any;

  constructor(private service: CommonService) {
    this.timerLimitSubscription = this.service.getTimerLimit().subscribe((resp) => {
      console.log(resp)
      // if (!resp.isPaused) {
      this.timerLimit = resp.timerLimit;
      // }
    })
  }

  ngOnInit(): void {
  }

  startPauseTimer() {
    console.log(this.timerLimit, this.isPaused)
    if (this.isPaused) {
      console.log('ispaused')
      this.service.updateIsPausedStatus(false);
    }
    else {
      this.service.updateTimerLimit(this.timerLimit, this.isPaused);
      this.isPaused = !this.isPaused;
    }

  }

  resetTimer() {
    this.service.updateTimerLimit(0, false);
  }

  ngOnDestroy() {
    this.timerLimitSubscription.unsubscribe();
  }
}
