import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenzthesisComponent } from './genzthesis.component';

describe('GenzthesisComponent', () => {
  let component: GenzthesisComponent;
  let fixture: ComponentFixture<GenzthesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenzthesisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenzthesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
