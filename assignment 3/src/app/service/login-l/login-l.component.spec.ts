import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLComponent } from './login-l.component';

describe('LoginLComponent', () => {
  let component: LoginLComponent;
  let fixture: ComponentFixture<LoginLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
