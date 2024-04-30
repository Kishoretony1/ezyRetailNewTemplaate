import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTransactionLiteComponent } from './by-transaction-lite.component';

describe('ByTransactionLiteComponent', () => {
  let component: ByTransactionLiteComponent;
  let fixture: ComponentFixture<ByTransactionLiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByTransactionLiteComponent]
    });
    fixture = TestBed.createComponent(ByTransactionLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
