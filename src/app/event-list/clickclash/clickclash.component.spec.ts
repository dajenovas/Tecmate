import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickclashComponent } from './clickclash.component';

describe('ClickclashComponent', () => {
  let component: ClickclashComponent;
  let fixture: ComponentFixture<ClickclashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClickclashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClickclashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
