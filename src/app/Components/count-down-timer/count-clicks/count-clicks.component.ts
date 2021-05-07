import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-count-clicks',
  templateUrl: './count-clicks.component.html',
  styleUrls: ['./count-clicks.component.scss']
})
export class CountClicksComponent implements OnInit, OnChanges {
  @Input('logTimer') logTimer: any;

  countStarted = 0;
  countPaused = 0;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.logTimer && changes.logTimer.currentValue) {
      if (changes.logTimer.currentValue.isPaused) {
        this.countPaused++;
      }
      else {
        this.countStarted++;
      }
    }
    this.ref.detectChanges();
  }

}
