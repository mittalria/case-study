import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-log-timer',
  templateUrl: './log-timer.component.html',
  styleUrls: ['./log-timer.component.scss']
})
export class LogTimerComponent implements OnInit, OnChanges {
  @Input('logTimer') logTimer: any;
  logs = new Array();
  currentDate = new Date();

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.logTimer && changes.logTimer.currentValue) {
      let date = this.currentDate.getDate() + '-' + this.currentDate.getMonth() + '-' + this.currentDate.getFullYear() + ' ' + (this.currentDate.getHours() > 12 ? (24 - this.currentDate.getHours()) : this.currentDate.getHours()) + ':' + this.currentDate.getMinutes() + ':' + this.currentDate.getSeconds() + ' ' + (this.currentDate.getHours() > 12 ? 'pm' : 'am')
      if (changes.logTimer.currentValue.isPaused) {
        this.logs.push(`Paused at ${date}`)
      }
      else {
        this.logs.push(`Started at ${date}`)
      }
    }
    this.ref.detectChanges();
  }

}
