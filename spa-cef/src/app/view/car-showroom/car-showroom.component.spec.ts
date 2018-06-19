import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarShowroomComponent } from './car-showroom.component';

describe('CarShowroomComponent', () => {
  let component: CarShowroomComponent;
  let fixture: ComponentFixture<CarShowroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarShowroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
