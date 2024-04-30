import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTransactionEzycartComponent } from './by-transaction-ezycart.component';

describe('ByTransactionEzycartComponent', () => {
  let component: ByTransactionEzycartComponent;
  let fixture: ComponentFixture<ByTransactionEzycartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByTransactionEzycartComponent]
    });
    fixture = TestBed.createComponent(ByTransactionEzycartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
