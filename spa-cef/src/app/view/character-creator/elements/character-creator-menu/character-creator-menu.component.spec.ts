import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorMenuComponent } from './character-creator-menu.component';

describe('CharacterCreatorMenuComponent', () => {
  let component: CharacterCreatorMenuComponent;
  let fixture: ComponentFixture<CharacterCreatorMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCreatorMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreatorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
