import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewZonesBeaconsComponent } from './view-zones-beacons.component';

describe('ViewZonesBeaconsComponent', () => {
  let component: ViewZonesBeaconsComponent;
  let fixture: ComponentFixture<ViewZonesBeaconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewZonesBeaconsComponent]
    });
    fixture = TestBed.createComponent(ViewZonesBeaconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
