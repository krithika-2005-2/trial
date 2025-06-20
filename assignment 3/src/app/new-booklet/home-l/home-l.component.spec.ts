import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLComponent } from './home-l.component';

describe('HomeLComponent', () => {
  let component: HomeLComponent;
  let fixture: ComponentFixture<HomeLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
