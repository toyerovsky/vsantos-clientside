import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerItemsComponent } from './player-items.component';

describe('PlayerItemsComponent', () => {
  let component: PlayerItemsComponent;
  let fixture: ComponentFixture<PlayerItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
