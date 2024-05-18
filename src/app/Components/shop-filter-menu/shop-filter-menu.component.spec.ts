import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFilterMenuComponent } from './shop-filter-menu.component';

describe('ShopFilterMenuComponent', () => {
  let component: ShopFilterMenuComponent;
  let fixture: ComponentFixture<ShopFilterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopFilterMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopFilterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
