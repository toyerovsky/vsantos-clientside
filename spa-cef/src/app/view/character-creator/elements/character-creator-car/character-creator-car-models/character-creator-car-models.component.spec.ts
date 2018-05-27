import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorCarModelsComponent } from './character-creator-car-models.component';

describe('CharacterCreatorCarModelsComponent', () => {
  let component: CharacterCreatorCarModelsComponent;
  let fixture: ComponentFixture<CharacterCreatorCarModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCreatorCarModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreatorCarModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
