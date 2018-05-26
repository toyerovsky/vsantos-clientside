import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorAppearanceRootsComponent } from './character-creator-appearance-roots.component';

describe('CharacterCreatorAppearanceRootsComponent', () => {
  let component: CharacterCreatorAppearanceRootsComponent;
  let fixture: ComponentFixture<CharacterCreatorAppearanceRootsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCreatorAppearanceRootsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreatorAppearanceRootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
