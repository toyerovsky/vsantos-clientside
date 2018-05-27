import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorCarComponent } from './character-creator-car.component';

describe('CharacterCreatorCarComponent', () => {
  let component: CharacterCreatorCarComponent;
  let fixture: ComponentFixture<CharacterCreatorCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCreatorCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreatorCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
