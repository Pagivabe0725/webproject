import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModuleDefaultComponent } from './login-module-default.component';

describe('LoginModuleDefaultComponent', () => {
  let component: LoginModuleDefaultComponent;
  let fixture: ComponentFixture<LoginModuleDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginModuleDefaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginModuleDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
