import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorMoreAppearanceComponent } from './character-creator-more-appearance.component';

describe('CharacterCreatorMoreAppearanceComponent', () => {
  let component: CharacterCreatorMoreAppearanceComponent;
  let fixture: ComponentFixture<CharacterCreatorMoreAppearanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCreatorMoreAppearanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreatorMoreAppearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
