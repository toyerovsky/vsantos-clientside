import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorFeaturesComponent } from './character-creator-features.component';

describe('CharacterCreatorFeaturesComponent', () => {
  let component: CharacterCreatorFeaturesComponent;
  let fixture: ComponentFixture<CharacterCreatorFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCreatorFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreatorFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
