import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLComponent } from './about-l.component';

describe('AboutLComponent', () => {
  let component: AboutLComponent;
  let fixture: ComponentFixture<AboutLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
