import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAiLogsComponent } from './view-ai-logs.component';

describe('ViewAiLogsComponent', () => {
  let component: ViewAiLogsComponent;
  let fixture: ComponentFixture<ViewAiLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAiLogsComponent]
    });
    fixture = TestBed.createComponent(ViewAiLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
