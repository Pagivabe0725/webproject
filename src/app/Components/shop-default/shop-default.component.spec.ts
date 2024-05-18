import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDefaultComponent } from './shop-default.component';

describe('ShopDefaultComponent', () => {
  let component: ShopDefaultComponent;
  let fixture: ComponentFixture<ShopDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopDefaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
