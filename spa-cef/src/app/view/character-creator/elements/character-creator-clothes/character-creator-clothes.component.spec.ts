import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorClothesComponent } from './character-creator-clothes.component';

describe('CharacterCreatorClothesComponent', () => {
  let component: CharacterCreatorClothesComponent;
  let fixture: ComponentFixture<CharacterCreatorClothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCreatorClothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreatorClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
