import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendInvoiceComponent } from './send-invoice.component';

describe('SendInvoiceComponent', () => {
  let component: SendInvoiceComponent;
  let fixture: ComponentFixture<SendInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendInvoiceComponent]
    });
    fixture = TestBed.createComponent(SendInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
