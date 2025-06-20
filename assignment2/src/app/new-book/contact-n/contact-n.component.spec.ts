import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNComponent } from './contact-n.component';

describe('ContactNComponent', () => {
  let component: ContactNComponent;
  let fixture: ComponentFixture<ContactNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactNComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
