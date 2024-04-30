import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzyCartLiteComponent } from './ezy-cart-lite.component';

describe('EzyCartLiteComponent', () => {
  let component: EzyCartLiteComponent;
  let fixture: ComponentFixture<EzyCartLiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EzyCartLiteComponent]
    });
    fixture = TestBed.createComponent(EzyCartLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
