import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbandonedCartLiteComponent } from './abandoned-cart-lite.component';

describe('AbandonedCartLiteComponent', () => {
  let component: AbandonedCartLiteComponent;
  let fixture: ComponentFixture<AbandonedCartLiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbandonedCartLiteComponent]
    });
    fixture = TestBed.createComponent(AbandonedCartLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
