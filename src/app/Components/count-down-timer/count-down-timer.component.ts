import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.scss']
})
export class CountDownTimerComponent implements OnInit {
  timerValue: any;
  pauseTimer: boolean;
  logTimer: any;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  startTimerEmitter(event) {
    console.log(event)
    this.timerValue = event.timer;
    if (event.isPaused) {
      this.pauseTimer = true;
    }
    this.logTimer = { isPaused: event.isPaused };
    this.ref.detectChanges();
  }

  resetTimerEmitter(event) {
    this.timerValue = 0;
  }

  emitUpdatedTimer(event) {
    console.log(event)
    this.timerValue = event;
    this.ref.detectChanges();
  }

}
