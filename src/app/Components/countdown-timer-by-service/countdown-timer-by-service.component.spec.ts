import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerByServiceComponent } from './countdown-timer-by-service.component';

describe('CountdownTimerByServiceComponent', () => {
  let component: CountdownTimerByServiceComponent;
  let fixture: ComponentFixture<CountdownTimerByServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerByServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
