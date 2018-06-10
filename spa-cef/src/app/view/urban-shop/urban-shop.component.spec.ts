import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanShopComponent } from './urban-shop.component';

describe('UrbanShopComponent', () => {
  let component: UrbanShopComponent;
  let fixture: ComponentFixture<UrbanShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrbanShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
