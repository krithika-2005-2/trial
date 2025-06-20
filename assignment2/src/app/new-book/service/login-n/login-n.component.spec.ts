import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNComponent } from './login-n.component';

describe('LoginNComponent', () => {
  let component: LoginNComponent;
  let fixture: ComponentFixture<LoginNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginNComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
