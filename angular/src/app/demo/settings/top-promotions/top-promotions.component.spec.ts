import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPromotionsComponent } from './top-promotions.component';

describe('TopPromotionsComponent', () => {
  let component: TopPromotionsComponent;
  let fixture: ComponentFixture<TopPromotionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopPromotionsComponent]
    });
    fixture = TestBed.createComponent(TopPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
