import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTimerComponent } from './log-timer.component';

describe('LogTimerComponent', () => {
  let component: LogTimerComponent;
  let fixture: ComponentFixture<LogTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
