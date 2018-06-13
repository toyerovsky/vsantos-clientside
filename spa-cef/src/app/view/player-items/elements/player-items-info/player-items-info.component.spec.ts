import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerItemsInfoComponent } from './player-items-info.component';

describe('PlayerItemsInfoComponent', () => {
  let component: PlayerItemsInfoComponent;
  let fixture: ComponentFixture<PlayerItemsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerItemsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerItemsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
