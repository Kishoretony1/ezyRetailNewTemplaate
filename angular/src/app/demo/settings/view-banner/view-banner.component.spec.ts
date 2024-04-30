import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBannerComponent } from './view-banner.component';

describe('ViewBannerComponent', () => {
  let component: ViewBannerComponent;
  let fixture: ComponentFixture<ViewBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBannerComponent]
    });
    fixture = TestBed.createComponent(ViewBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
