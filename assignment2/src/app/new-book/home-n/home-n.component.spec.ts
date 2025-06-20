import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNComponent } from './home-n.component';

describe('HomeNComponent', () => {
  let component: HomeNComponent;
  let fixture: ComponentFixture<HomeNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeNComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
