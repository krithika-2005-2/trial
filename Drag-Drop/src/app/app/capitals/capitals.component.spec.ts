import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalsComponent } from './capitals.component';

describe('CapitalsComponent', () => {
  let component: CapitalsComponent;
  let fixture: ComponentFixture<CapitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapitalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
