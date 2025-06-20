import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNComponent } from './about-n.component';

describe('AboutNComponent', () => {
  let component: AboutNComponent;
  let fixture: ComponentFixture<AboutNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutNComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
