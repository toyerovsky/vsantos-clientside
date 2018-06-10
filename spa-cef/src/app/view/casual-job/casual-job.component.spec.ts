import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualJobComponent } from './casual-job.component';

describe('CasualJobComponent', () => {
  let component: CasualJobComponent;
  let fixture: ComponentFixture<CasualJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasualJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasualJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
