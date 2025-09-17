import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonTechnicalComponent } from './non-technical.component';

describe('NonTechnicalComponent', () => {
  let component: NonTechnicalComponent;
  let fixture: ComponentFixture<NonTechnicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NonTechnicalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
