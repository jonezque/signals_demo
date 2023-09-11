import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushRxjsComponent } from './on-push-rxjs.component';

describe('OnPushRxjsComponent', () => {
  let component: OnPushRxjsComponent;
  let fixture: ComponentFixture<OnPushRxjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnPushRxjsComponent]
    });
    fixture = TestBed.createComponent(OnPushRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
