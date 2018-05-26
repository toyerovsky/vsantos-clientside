import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorAppearanceComponent } from './character-creator-appearance.component';

describe('CharacterCreatorAppearanceComponent', () => {
  let component: CharacterCreatorAppearanceComponent;
  let fixture: ComponentFixture<CharacterCreatorAppearanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCreatorAppearanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreatorAppearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
