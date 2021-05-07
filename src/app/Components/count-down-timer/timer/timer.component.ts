import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnChanges {
  @Input('timerValue') timerValue: number;
  @Input('pauseTimer') pauseTimer: boolean;
  @Output() emitUpdatedTimer = new EventEmitter();
  startTimer: any;

  constructor() { }

  ngOnInit(): void {
    this.timerValue = 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['pauseTimer'] && changes['pauseTimer'].currentValue != undefined) {
      if (changes['pauseTimer']) {
        clearInterval(this.startTimer);
        // console.log('emitting updated value of timer')
        this.emitUpdatedTimer.emit(this.timerValue);
      }
    }

    if (changes['timerValue'] && changes['timerValue'].currentValue != undefined) {
      // console.log('inside timer changes')
      // console.log('timer value',this.timerValue)
      if (this.pauseTimer) {

      }
      else {
        this.startTimer = setInterval(() => {
          if (this.timerValue > 0) {
            this.timerValue--;
          }
        }, 1000);
      }
    }
  }

}
