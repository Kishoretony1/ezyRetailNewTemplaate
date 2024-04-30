import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInvoicenumberComponent } from './view-invoicenumber.component';

describe('ViewInvoicenumberComponent', () => {
  let component: ViewInvoicenumberComponent;
  let fixture: ComponentFixture<ViewInvoicenumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewInvoicenumberComponent]
    });
    fixture = TestBed.createComponent(ViewInvoicenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
