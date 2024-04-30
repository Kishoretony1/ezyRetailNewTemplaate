import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbandonedCartEzycartComponent } from './abandoned-cart-ezycart.component';

describe('AbandonedCartEzycartComponent', () => {
  let component: AbandonedCartEzycartComponent;
  let fixture: ComponentFixture<AbandonedCartEzycartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbandonedCartEzycartComponent]
    });
    fixture = TestBed.createComponent(AbandonedCartEzycartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
