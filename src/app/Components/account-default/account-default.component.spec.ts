import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDefaultComponent } from './account-default.component';

describe('AccountDefaultComponent', () => {
  let component: AccountDefaultComponent;
  let fixture: ComponentFixture<AccountDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountDefaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
