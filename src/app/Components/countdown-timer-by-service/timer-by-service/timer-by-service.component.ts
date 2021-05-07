import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-timer-by-service',
  templateUrl: './timer-by-service.component.html',
  styleUrls: ['./timer-by-service.component.scss']
})
export class TimerByServiceComponent implements OnInit, OnDestroy {
  timerLimitSubscription: Subscription;
  timerValue: number = 0;
  startTimerInterval: any;
  isPausedSubscription: Subscription;
  isPaused: any;

  constructor(private service: CommonService) {
    this.timerLimitSubscription = this.service.getTimerLimit().subscribe((resp) => {
      console.log(resp)
      if (!resp.isPaused) {
        this.timerValue = resp.timerLimit;
        this.startTimer();
      }
    })

    this.isPausedSubscription = this.service.getPauseStatus().subscribe((resp) => {
      console.log(resp)
      this.isPaused = resp;
      this.pauseTimer();
    })
  }

  ngOnInit(): void {
  }

  startTimer() {
    console.log(this.timerValue)
    this.startTimerInterval = setInterval(() => {
      if (this.timerValue > 0) {
        this.timerValue--;
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.startTimerInterval);
    console.log(this.timerValue, '', this.isPaused,'after pause')
    this.service.updateTimerLimit(this.timerValue, this.isPaused);
  }

  ngOnDestroy() {
    this.timerLimitSubscription.unsubscribe();
  }

}
