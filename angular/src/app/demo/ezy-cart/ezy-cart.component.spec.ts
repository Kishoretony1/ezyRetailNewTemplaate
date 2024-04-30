import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzyCartComponent } from './ezy-cart.component';

describe('EzyCartComponent', () => {
  let component: EzyCartComponent;
  let fixture: ComponentFixture<EzyCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EzyCartComponent]
    });
    fixture = TestBed.createComponent(EzyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
