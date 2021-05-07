import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer-limit',
  templateUrl: './timer-limit.component.html',
  styleUrls: ['./timer-limit.component.scss']
})
export class TimerLimitComponent implements OnInit,OnChanges {
  timerLimit: number;
  isPausedEnabled: boolean = false;
  pausedList = new Array;

  @Input('updatedTimerValue') updatedTimerValue : number;
  @Output() startTimerEmitter = new EventEmitter();
  @Output() resetTimerEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges) {
    this.timerLimit = changes['updatedTimerValue'].currentValue;
  }

  startPauseTimer() {
    console.log(this.timerLimit,'timer value emitting')
    if (this.isPausedEnabled) {
      this.startTimerEmitter.emit({
        timer: this.timerLimit,
        isPaused: true
      });
      this.isPausedEnabled = false;
      this.pausedList.push(this.timerLimit);
    }
    else {
      this.startTimerEmitter.emit({
        timer: this.timerLimit,
        isPaused: false
      });
      this.isPausedEnabled = true;
    }
  }

  resetTimer() {
    this.resetTimerEmitter.emit(true);
  }

}
