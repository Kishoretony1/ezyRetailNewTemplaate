import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBeaconsComponent } from './view-beacons.component';

describe('ViewBeaconsComponent', () => {
  let component: ViewBeaconsComponent;
  let fixture: ComponentFixture<ViewBeaconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBeaconsComponent]
    });
    fixture = TestBed.createComponent(ViewBeaconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
