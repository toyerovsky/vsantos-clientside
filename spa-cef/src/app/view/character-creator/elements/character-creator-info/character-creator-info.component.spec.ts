import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorInfoComponent } from './character-creator-info.component';

describe('CharacterCreatorInfoComponent', () => {
  let component: CharacterCreatorInfoComponent;
  let fixture: ComponentFixture<CharacterCreatorInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCreatorInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreatorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
