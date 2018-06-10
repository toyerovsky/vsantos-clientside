import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveThruComponent } from './drive-thru.component';

describe('DriveThruComponent', () => {
  let component: DriveThruComponent;
  let fixture: ComponentFixture<DriveThruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveThruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveThruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
