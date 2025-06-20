import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLComponent } from './contact-l.component';

describe('ContactLComponent', () => {
  let component: ContactLComponent;
  let fixture: ComponentFixture<ContactLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
