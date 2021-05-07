import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerByServiceComponent } from './timer-by-service.component';

describe('TimerByServiceComponent', () => {
  let component: TimerByServiceComponent;
  let fixture: ComponentFixture<TimerByServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerByServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
