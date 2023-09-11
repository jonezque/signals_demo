import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushSignalComponent } from './on-push-signal.component';

describe('OnPushSignalComponent', () => {
  let component: OnPushSignalComponent;
  let fixture: ComponentFixture<OnPushSignalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnPushSignalComponent]
    });
    fixture = TestBed.createComponent(OnPushSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
