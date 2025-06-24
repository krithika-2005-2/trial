import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregisterationComponent } from './empregisteration.component';

describe('EmpregisterationComponent', () => {
  let component: EmpregisterationComponent;
  let fixture: ComponentFixture<EmpregisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpregisterationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpregisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
