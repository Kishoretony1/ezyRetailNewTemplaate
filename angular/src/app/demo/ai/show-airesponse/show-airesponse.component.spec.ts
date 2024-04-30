import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAiresponseComponent } from './show-airesponse.component';

describe('ShowAiresponseComponent', () => {
  let component: ShowAiresponseComponent;
  let fixture: ComponentFixture<ShowAiresponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAiresponseComponent]
    });
    fixture = TestBed.createComponent(ShowAiresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
