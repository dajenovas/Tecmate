import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeonaiComponent } from './eyeonai.component';

describe('EyeonaiComponent', () => {
  let component: EyeonaiComponent;
  let fixture: ComponentFixture<EyeonaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EyeonaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EyeonaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
