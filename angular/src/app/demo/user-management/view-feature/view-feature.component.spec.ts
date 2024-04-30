import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFeatureComponent } from './view-feature.component';

describe('ViewFeatureComponent', () => {
  let component: ViewFeatureComponent;
  let fixture: ComponentFixture<ViewFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFeatureComponent]
    });
    fixture = TestBed.createComponent(ViewFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
