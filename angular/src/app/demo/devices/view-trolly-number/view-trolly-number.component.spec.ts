import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrollyNumberComponent } from './view-trolly-number.component';

describe('ViewTrollyNumberComponent', () => {
  let component: ViewTrollyNumberComponent;
  let fixture: ComponentFixture<ViewTrollyNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTrollyNumberComponent]
    });
    fixture = TestBed.createComponent(ViewTrollyNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
