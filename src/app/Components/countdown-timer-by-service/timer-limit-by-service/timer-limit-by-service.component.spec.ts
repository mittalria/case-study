import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerLimitByServiceComponent } from './timer-limit-by-service.component';

describe('TimerLimitByServiceComponent', () => {
  let component: TimerLimitByServiceComponent;
  let fixture: ComponentFixture<TimerLimitByServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerLimitByServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerLimitByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
